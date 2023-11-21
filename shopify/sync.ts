import { buildClient } from '@datocms/cma-client-node';
import { isDeepStrictEqual } from 'util';
import { itemTypeId } from '@lib/utils';
import { IProduct, ISmartCollection, ICustomCollection } from 'shopify-api-node';
import { Item } from '@datocms/cma-client/dist/types/generated/SimpleSchemaTypes';

import shopify from './rest-client'
import asyncPromiseBatch from 'async-promise-batch';

const client = buildClient({ apiToken: process.env.DATOCMS_CMA_TOKEN as string })

type ObjectType = IProduct | ISmartCollection | ICustomCollection

type ObjectMap = {
  model: 'product' | 'collection'
  path: 'product' | 'smartCollection' | 'customCollection'
  fields: { [key: string]: string }
}

const objects: ObjectMap[] = [
  {
    model: 'product',
    path: 'product',
    fields: {
      shopify_id: 'id',
      title: 'title',
      slug: 'handle',
      image: 'image',
    }
  },
  {
    model: 'collection',
    path: 'smartCollection',
    fields: {
      shopify_id: 'id',
      title: 'title',
      slug: 'handle',
      image: 'image',
      products: 'products'
    }
  },
  {
    model: 'collection',
    path: 'customCollection',
    fields: {
      shopify_id: 'id',
      title: 'title',
      slug: 'handle',
      image: 'image',
      products: 'products'
    }
  }
]

export const syncAll = async () => {
  console.log('sync started...')
  console.time('sync all')

  for (let i = 0; i < objects.length; i++) {
    const data = await shopify[objects[i].path].list({ limit: 250 })
    await syncObjects(data)
  }

  console.timeEnd('sync all')
}

export const syncObjects = async (data: ObjectType[] | ObjectType, concurrency = 10) => {

  const records = Array.isArray(data) ? data : [data] as ObjectType[]

  if (records.length === 0)
    return

  const model = dataToObjectModel(records[0])?.model
  const object = objects.find((o) => o.model === model) as ObjectMap

  if (typeof object === 'undefined')
    throw new Error('Invalid data')

  const itemType = await itemTypeId(object.model)
  const reqs = records.map((item) => () => upsertObject(object, itemType, item))

  console.time(`sync ${object.model} ${reqs.length}`)
  const response = await asyncPromiseBatch(reqs, concurrency)
  console.timeEnd(`sync ${object.model} ${reqs.length}`)
  return response

}

export const upsertObject = async (object: ObjectMap, itemType: string, data: any) => {

  let record = (await client.items.list({ version: 'latest', filter: { type: itemType, fields: { shopify_id: { eq: data.id } } } }))[0]
  const item = { ...data }
  console.log('upsert', object.model, data.id)


  if (data.image) {
    console.log('upload image', data.image.src.split('?')[0])
    try {
      const upload = await client.uploads.createFromUrl({
        url: data.image.src,//.split('?')[0],
        skipCreationIfAlreadyExists: true
      })
      data.image = { upload_id: upload.id }
      console.log('uploaded image', data.image.upload_id)
    } catch (error) {
      console.log('error uploading image')
      delete data.image
    }

  }

  if (object.model === 'collection') {
    const products = await shopify.collection.products(data.id, { limit: 250 })
    const datoProducts = (await Promise.all(products.map(({ id }) => client.items.list({ version: 'latest', filter: { type: 'product', fields: { shopify_id: { eq: id } } } }))))
    data.products = datoProducts.map((p) => p[0].id)
  }

  if (!record)
    record = await client.items.create({ item_type: { type: 'item_type', id: itemType }, ...mapObject(object, data, item as ObjectType) });
  else
    record = await client.items.update(record.id, mapObject(object, data, item));

  if (item.status === 'draft')
    await client.items.unpublish(record.id)
  else
    await client.items.publish(record.id)
}

const mapObject = (object: ObjectMap, data: any, item: ObjectType): any => {
  const mapped: any = {}
  Object.keys(object.fields).forEach((key) => {
    mapped[key] = data[object.fields[key]]
  })
  mapped.shopify_data = JSON.stringify(item)
  return mapped
}

const dataToObjectModel = (data: any): ObjectMap | undefined => {
  const shopifyType = data.admin_graphql_api_id.replace('gid://shopify/', '').split('/')[0].toLowerCase()
  return objects.find((o) => o.model === shopifyType)
}


export const deleteObject = async (data: any) => {


}

export const syncDatoCMSObject = async (item: Item) => {

  if (!item || !item.shopify_data)
    throw new Error('Invalid item')

  try {
    const itemType = await client.itemTypes.find(item.item_type.id)
    const object = objects.find((o) => o.model === itemType.api_key) as ObjectMap

    const data: any = {}
    Object.keys(object.fields).forEach((key) => {
      data[object.fields[key]] = item[key]
    })

    if (data.image) {
      const upload = await client.uploads.find(data.image.upload_id)
      data.image = { src: upload.url }
    }

    data.status = item.meta.status !== 'published' ? 'draft' : 'active'

    const shopify_data = JSON.parse(item.shopify_data as string)
    const current = await shopify[object.path].get(shopify_data.id) as any

    if (isDeepStrictEqual(current, data)) {
      console.log('no changes')
      return
    }

    await shopify[object.path].update(data.id, data)
  } catch (error) {
    console.log('syncDatoCMSObject error')
    console.log(error)
    throw error

  }
}