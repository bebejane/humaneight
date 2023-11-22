'use server'

import client from './datocms-client'
import shopify from './rest-client'
import { isDeepStrictEqual } from 'util';
import { itemTypeId } from '@lib/utils';
import { IProduct, ISmartCollection, ICustomCollection } from 'shopify-api-node';
import asyncPromiseBatch from 'async-promise-batch';
import { Item } from '@datocms/cma-client/dist/types/generated/SimpleSchemaTypes';
import { ItemInstancesHrefSchema } from '@datocms/cma-client/dist/types/generated/SchemaTypes';

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
      //image: 'image',
    }
  },
  {
    model: 'collection',
    path: 'smartCollection',
    fields: {
      shopify_id: 'id',
      title: 'title',
      slug: 'handle',
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
      products: 'products'
    }
  }
]

export const syncAll = async () => {
  console.log('sync started...')
  console.time('sync all')
  console.log(process.env.DATOCMS_API_TOKEN)

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

  console.log('sync', object.model, data.id)

  data.id = String(data.id)

  let record = (await client.items.list({ version: 'latest', filter: { type: itemType, fields: { shopify_id: { eq: data.id } } } }))[0]
  const item = { ...data }

  if (object.model === 'collection') {
    const products = await shopify.collection.products(data.id, { limit: 250 })
    const datoProducts = (await Promise.all(products.map(({ id }) => client.items.list({ version: 'latest', filter: { type: 'product', fields: { shopify_id: { eq: id } } } }))))
    data.products = datoProducts.map((p) => p[0].id)
  }

  if (!record)
    record = await client.items.create({ item_type: { type: 'item_type', id: itemType }, ...mapObject(object, data, item as ObjectType) });
  else
    record = await client.items.update(record.id, mapObject(object, data, item));

  if (object.model === 'product')
    await syncProductVariants(data)


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

export const syncProductVariants = async (data: IProduct) => {

  const { variants, options } = data
  const itemTypes = await client.itemTypes.list()
  const variantOptionTypeId = itemTypes.find(t => t.api_key === 'product_variant_option')?.id as string
  const variantTypeId = itemTypes.find(t => t.api_key === 'product_variant')?.id as string
  const productTypeId = itemTypes.find(t => t.api_key === 'product')?.id as string

  const [products, productVariants, productOptions] = await Promise.all([
    listAll({ filter: { type: productTypeId, fields: { shopify_id: { eq: data.id } } } }),
    listAll({ filter: { type: variantTypeId, fields: { product_shopify_id: { eq: data.id } } } }),
    listAll({ filter: { type: variantOptionTypeId, fields: { product_shopify_id: { eq: data.id } } } })
  ])

  const product = products[0].id

  console.log('sync variants/options', data.id, data.title)
  console.time('sync variants/options')

  const variantsToDelete = productVariants.filter(({ shopify_id }) => !variants.find((pv) => String(pv.id) === String(shopify_id)))
  const allDeletedVariants = variantsToDelete.map(({ id }) => client.items.destroy(id))

  const allNewVariants = variants?.filter(({ id }) => !productVariants.find((pv) => String(pv.shopify_id) === String(id)))
    .map(({ product_id: product_shopify_id, id: shopify_id, title, }) =>
      client.items.create({
        item_type: { type: 'item_type', id: variantTypeId },
        product,
        title,
        product_shopify_id: String(product_shopify_id),
        shopify_id: String(shopify_id)
      }))


  const optionsToDelete = productOptions.filter(({ shopify_id }) => !options.find((pv) => String(pv.id) === String(shopify_id)))
  const allDeletedOptions = optionsToDelete?.map(({ id }) => client.items.destroy(id))
  const allNewOptions = options?.filter(({ id }) => !productOptions.find((pv) => String(pv.shopify_id) === String(id)))
    .map(({ product_id: product_shopify_id, id: shopify_id, name, values }) =>
      client.items.create({
        item_type: { type: 'item_type', id: variantOptionTypeId },
        product,
        name,
        values: JSON.stringify(values),
        product_shopify_id: String(product_shopify_id),
        shopify_id: String(shopify_id)
      }))

  await Promise.all([...allDeletedVariants, ...allNewVariants, ...allDeletedOptions, ...allNewOptions])

  console.time('sync variants/options')
}

const listAll = async function listAll(query: ItemInstancesHrefSchema): Promise<Item[]> {
  const records = await client.items.list(query);

  for await (const record of client.items.listPagedIterator(query)) {
    records.push(record)
  }
  return records;
}