'use client'

import s from './ContactFormBlock.module.scss'
import cn from 'classnames'
import addContact from '@lib/actions/addContact'
import { useFormState, useFormStatus } from 'react-dom'

type Props = {
  data: ContactFormBlockRecord
  className?: string
}

export default function ContactFormBlock({ data: { id, message }, className }: Props) {

  const [state, formAction] = useFormState(addContact, { success: false })

  return (
    <section className={s.contactForm}>
      {state.success ?
        <p>{message}</p>
        :
        <form action={formAction}>
          <input id="email" name="email" type="text" placeholder="Your e-mail..." />
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
  return <button type="submit" disabled={status.pending}>Send</button>
}