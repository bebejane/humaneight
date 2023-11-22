'use server'

import { cookies } from "next/headers"

export type Props = {
  money: MoneyV2
}

export default async function Price({ money }: Props) {
  const cookieStore = cookies();
  //const locale = cookieStore.get('country')?.value as string ?? 'sv_SE'
  //const currency = cookieStore.get('currency')?.value as string ?? 'SEK'
  const locale = 'sv'
  const currency = 'SEK'
  const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 })
  return <>{formatter.format(money.amount).toUpperCase()}</>
}