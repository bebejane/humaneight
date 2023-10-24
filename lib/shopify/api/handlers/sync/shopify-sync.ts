import type { NextApiRequest, NextApiResponse } from 'next'
import { syncObjects, deleteObject } from '../../../sync'

export default async function shopifyToDatoCMSSync(req: NextApiRequest, res: NextApiResponse) {

  try {

    const event = (req.headers['x-shopify-topic'] as string)?.split('/')[1]
    const data = req.body

    if (!data)
      return res.status(400).json({ success: false, error: 'item not found' })

    console.log('sync', event, data.id, data.title)

    if (['create', 'update'].includes(event))
      await syncObjects(data)
    else if (event === 'delete')
      await deleteObject(data)

    return res.status(200).json({ success: true, event })

  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    return res.status(500).json({ success: false, error })
  }
}