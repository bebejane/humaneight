'use client'

import s from './NewsletterForm.module.scss'
import cn from 'classnames'
import SubmitButton from './SubmitButton'
import campaignMonitorNewsletterSignup from 'next-dato-utils/server-actions/campaignMonitorNewsletterSignup'
import { useFormState } from 'react-dom'
import { useEffect, useState } from 'react'
import { el } from 'date-fns/locale'

export type Props = {
  className?: string
}

export default function NewsletterForm({ className }: Props) {

  const [state, formAction] = useFormState(campaignMonitorNewsletterSignup, { success: false, error: undefined })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    setError(state?.error ? state.error : null)
    setSuccess(state?.success ? true : false)
  }, [state])

  useEffect(() => {
    if (success)
      localStorage.setItem('newsletter_subscribed', '1')
    else if (error)
      localStorage.removeItem('newsletter_subscribed')

  }, [error, success])

  return (
    <>
      {success ?
        <p className={cn(s.success, "success small")}>Thank you for subscribing!</p>
        :
        <form action={formAction} className={cn(s.form, className)}>
          <div className={s.agree}>
            <input type="checkbox" required={true} />
            <div>
              I have read <span className={s.mobile}> &</span> <span className={s.desktop}>and</span> understood the privacy policy
            </div>
          </div>
          <input name="email" type="email" placeholder="Your e-mail..." required={true} aria-errormessage="newsletter-error" />

          <SubmitButton label="Subscribe" loading="Subscribing..." />
          {error &&
            <p id="newsletter-error" className={cn(s.error, "error small")}>{error}</p>
          }
        </form >
      }
    </>
  )
}