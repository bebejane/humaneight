import sync from './handlers/sync'
import account from './handlers/account'
import test from './handlers/test'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {

  try {

    const params = req.query.shopify as string[]
    const route = `/${params?.join('/')}`

    switch (route) {
      case '/shopify/resync':
        return sync.resync(req, res)
      case '/shopify/shopify-sync':
        return sync.shopify_sync(req, res)
      case '/shopify/datocms-sync':
        return sync.datocms_sync(req, res)
      case '/shopify/account/login':
        return account.login(req, res)
      case '/shopify/account/logout':
        return account.logout(req, res)
      case '/shopify/account/register':
        return account.register(req, res)
      case '/shopify/account/orders/cancel':
        return account.orders.cancel(req, res)

      case '/shopify/test':
        return test(req, res)
    }

    return res.status(500).json({ success: false, error: 'Invalid handler' })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error })
  }
}
