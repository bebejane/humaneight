import { deleteCookie } from "cookies-next"
import { redirect } from "next/navigation"
import { cartCookieOptions } from '@shopify/utils'

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(req: Request) {
  deleteCookie("cart", cartCookieOptions)
  return redirect("/")
}