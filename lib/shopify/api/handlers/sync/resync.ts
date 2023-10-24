import type { NextApiRequest, NextApiResponse } from 'next'
import { syncAll } from '../../../sync';

export default async function resync(req: NextApiRequest, res: NextApiResponse) {

  try {
    await syncAll()
    return res.status(200).json({ success: true })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error })
  }
}
