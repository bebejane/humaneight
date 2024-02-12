'use client'

import { useEffect, useRef, useState } from 'react'
import s from './FeedbackForm.module.scss'
import cn from 'classnames'

export type Props = {
  show: boolean
  className?: string
}

export default function Feedback({ show, className }: Props) {

  const [maxHeight, setMaxHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    setMaxHeight(formRef.current?.scrollHeight ?? 0);
  }, [])

  return (
    <form className={cn(s.form, className)} ref={formRef} style={{ maxHeight: show ? maxHeight : 0 }}>
      <p className="mid">
        Experiences with Our Garments
      </p>
      <p className="light mid">
        Please describe your experience with the garments you purchased from us. What did you like or dislike about them? How did they meet your needs or fall short?
      </p>
      <input />

      <p className="mid">
        Living as a Neurodivergent Individual</p>
      <p className="light mid">
        Please describe the challenges you might face as a neurodivergent individual in todays world.
        What aspects of neurotypical daily life do you find most challenging, what can be improved?
      </p>
      <input />
      <p className="mid">Experiences with Our Garments</p>
      <p className="light mid">
        Please describe your experience with the garments you purchased from us.
        What did you like or dislike about them? How did they meet your needs or fall short?
      </p>
      <input />
      <button type="submit">Send</button>
    </form>

  )
}
