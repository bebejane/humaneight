import { NextRequest, NextResponse } from 'next/server'
import { syncAll } from '../sync';

export default async function resync(req: NextRequest) {

  try {
    await syncAll()
    return NextResponse.json({ success: true })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: (error as Error).message })
  }
}
