import s from './page.module.scss'
import Link from 'next/link'

type Props = {
  user: Customer
}

export default function Account({ user }: Props) {

  return (
    <div className={s.container}>
      <h1>Account</h1>
      {user.firstName}
      <p>
        <Link href="/account/orders">Orders</Link>
      </p>
    </div>
  )
}