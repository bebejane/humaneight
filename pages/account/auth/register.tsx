import { useState } from 'react'
import s from './login.module.scss'
import Link from 'next/link'

type Props = {

}

export default function Register({ }: Props) {

  const [errors, setErrors] = useState<string | string[] | null>(null)

  const register: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setErrors(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const body: any = {
      ...Object.fromEntries(formData.entries()),
      acceptsMarketing: formData.get('acceptsMarketing') === 'on' ? true : false
    }


    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await res.json()

    if (data.errors)
      setErrors(data.errors)
    //else window.location.href = '/account/login'
  }

  return (
    <div className={s.container}>
      <form method="post" action="/api/shopify/account/register" onSubmit={register}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="firstName">First name</label>
        <input type="first_name" name="firstName" id="first_name" />
        <label htmlFor="lastName">First name</label>
        <input type="last_name" name="lastName" id="last_name" />
        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" id="phone" />
        <label htmlFor="acceptsMarketing">Accept marketing</label>
        <input type="checkbox" name="acceptsMarketing" id="accepts_marketing" />

        <button type="submit">Register</button>
      </form>
      {errors &&
        <div className={s.errors}>
          {typeof errors === 'string' ? errors : errors.map((e, i) => <div key={i}>{e}</div>)}
        </div>
      }
      <Link href="/account/auth/login">Login</Link>
    </div>
  )
}