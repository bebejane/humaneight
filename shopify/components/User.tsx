import React, { useEffect, useState } from 'react'
import s from './User.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { getCookie } from 'cookies-next'

export type Props = {}

export default function User({ }: Props) {

  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    const user = getCookie('user') ? JSON.parse(getCookie('user') as string) : null
    setUser(user)
  }, [])


  return (
    <div id="user" className={cn(s.user)} >
      {user ?
        <>
          <p>{user.firstName}</p>
          <Link href="/api/shopify/account/logout">Logout</Link>
        </>
        :
        <Link href="/account/auth/login">Login</Link>
      }
    </div>
  )
}