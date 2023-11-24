'use server'


export type Props = {
  money: MoneyV2
}

export default async function Price({ money }: Props) {
  return money.amount

}