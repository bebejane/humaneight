import { GetServerSideProps } from 'next/types'
import s from './index.module.scss'
import { getCookie, getCookies } from 'cookies-next'
import Link from 'next/link'
import withGlobalProps from '/lib/withGlobalProps'

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


export const getServerSideProps = withGlobalProps({ queries: [] }, async ({ props, context, revalidate }: any) => {
  const { req, res } = context;
  const user = getCookie('user', { req, res });

  if (!user) {
    return {
      redirect: {
        destination: '/account/auth/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      ...props,
      user: JSON.parse(user)
    }
  }

});
