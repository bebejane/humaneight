'use client'

import useCountry from "@lib/hooks/useCountry"

export type Props = {
  money: MoneyV2
}

export default async function Price({ money }: Props) {

  const country = useCountry()
  const currency = 'SEK'
  //const formatter = new Intl.NumberFormat(country, { style: 'currency', currency, maximumFractionDigits: 0 })
  return <>{parseFloat(money.amount).toFixed(0)} {currency}</>
}