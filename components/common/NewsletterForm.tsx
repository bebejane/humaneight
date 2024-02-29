'use client'

import s from './NewsletterForm.module.scss'
import cn from 'classnames'
import SubmitButton from './SubmitButton'
import newsletterSignup from '@lib/actions/newsletterSignup'
import { useFormState } from 'react-dom'
import { useEffect, useState } from 'react'

export type Props = {
  className?: string
}

export default function NewsletterForm({ className }: Props) {

  const [state, formAction] = useFormState(newsletterSignup, { success: false, error: undefined })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    setError(state?.error ? state.error : null)
    setSuccess(state?.success ? true : false)
  }, [state])

  return (
    <>
      {success ?
        <p className={cn(s.success, "success small")}>Thank you for subscribing!</p>
        :
        <form action={formAction} className={cn(s.form, className)}>
          <input name="email" type="email" placeholder="Your email" required={true} />
          {error && <p className={cn(s.error, "error small")}>{error}</p>}
          <SubmitButton label="Subscribe" loading="Subscribing..." />
        </form>
      }
    </>
  )
}