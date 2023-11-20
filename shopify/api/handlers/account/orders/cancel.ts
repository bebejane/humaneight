import type { NextApiRequest, NextApiResponse } from 'next'
import shopify from '../../../../rest-client'
import { getCookie } from 'cookies-next'
import { parseGID } from '../../../../utils'

export default async function cancel(req: NextApiRequest, res: NextApiResponse) {

  const u = getCookie('user', { req, res })
  const user = u ? JSON.parse(u) : null as unknown as User
  const { order }: { order: Order } = req.body
  const orderId = order?.id

  console.log('cancel order', order?.id, user)

  if (!orderId)
    return res.status(400).json({ success: false, error: 'orderId not found' })

  if (order.email !== user.email)
    return res.status(401).json({ success: false, error: 'Unauthorized' })

  await shopify.order.cancel(parseGID(order.id))

  return res.status(200).json({ success: true })
}
