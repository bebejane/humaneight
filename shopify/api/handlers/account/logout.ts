import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteCookie } from 'cookies-next'

export default async function logout(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  deleteCookie('user', { req, res })
  res.redirect('/account/auth/login')
  return
}
