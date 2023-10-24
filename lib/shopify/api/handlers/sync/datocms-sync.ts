import client from '/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { syncDatoCMSObject } from '../../../sync'
import shopify from '../..';
import util from 'util';

export default async function datocmsToShopifySync(req: NextApiRequest, res: NextApiResponse) {

  try {

    const payload = req.body;

    if (!payload)
      throw new Error('Invalid payload')

    const { event_type, entity } = payload

    console.log('sync datocms > shopify', event_type)

    const item = await client.items.find(entity.id)

    if (!item)
      throw new Error(`Invalid item ${entity.id}`)

    if (['update', 'publish', 'unpublish'].includes(event_type))
      await syncDatoCMSObject(item)

    return res.status(200).json({ success: true })

  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    return res.status(500).json({ success: false, error })
  }
}