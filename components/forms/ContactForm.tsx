'use client'

import s from './ContactForm.module.scss'
import cn from 'classnames'
import addContact from '@lib/actions/addContact'
import { useFormState, useFormStatus } from 'react-dom'
import SubmitButton from './SubmitButton'
import { useEffect, useRef, useState } from 'react'

type Props = {
  message: string
}

export default function ContactForm({ message }: Props) {

  const [state, formAction] = useFormState(addContact, { success: false })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }
    setError(state.error ?? null)
  }, [state])

  return (
    <section className={s.contactForm}>
      <form action={formAction} ref={formRef}>
        <label>Email</label>
        <input id="email" name="email" type="text" required={true} />
        <label>Message</label>
        <textarea id="message" name="message" required={true} />
        <SubmitButton label="Send" loading="Sending..." />
      </form>
      {success && <p className={s.success}>Thanks for your message!</p>}
      {state.error && <p className={s.error}>{state.error}</p>}
    </section>
  )
}