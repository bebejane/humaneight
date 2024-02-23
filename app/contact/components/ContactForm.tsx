'use client'

import s from './ContactForm.module.scss'
import cn from 'classnames'
import addContact from '@lib/actions/addContact'
import { useFormState, useFormStatus } from 'react-dom'

type Props = {
  message: string
}

export default function ContactForm({ message }: Props) {

  const [state, formAction] = useFormState(addContact, { success: false })

  return (
    <section className={s.contactForm}>
      {state.success ?
        <p>{message}</p>
        :
        <form action={formAction}>
          <input id="email" name="email" type="text" placeholder="E-mail..." />
          <textarea id="message" name="message" placeholder="Message..."></textarea>
          <SubmitButton />
        </form>
      }
      {state.error && <p className={s.error}>{state.error}</p>}
    </section>
  )
}

function SubmitButton() {
  const status = useFormStatus();
  return <button type="submit" className="full" disabled={status.pending}>Send</button>
}