'use client'

import { useEffect, useRef, useState } from 'react'
import { Markdown } from 'next-dato-utils/components'
import s from './Feedback.module.scss'
import cn from 'classnames'
import Content from '../content/Content'
import React from 'react'
import useIsDesktop from '@lib/hooks/useIsDesktop'

export type Props = {
  feedback: FeedbackQuery['feedback']
}

export default function Feedback({ feedback }: Props) {

  const [showForm, setShowForm] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)
  const firstInputRef = useRef<HTMLTextAreaElement | null>(null)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    setMaxHeight(formRef.current?.scrollHeight ?? 0);
  }, [])

  useEffect(() => {
    if (showForm && isDesktop)
      setTimeout(() => firstInputRef.current?.focus(), 200)
  }, [isDesktop, showForm])

  return (
    <section className={cn(s.feedback, "grid")}>
      <h2 >{feedback?.headline}</h2>
      <div className={s.wrapper}>
        <Content content={feedback?.intro} />
        <button className={cn(showForm && s.active)} type="button" onClick={() => setShowForm(!showForm)}>
          Submit your view
        </button>
      </div >
      <form className={cn(s.form)} ref={formRef} style={{ maxHeight: showForm ? maxHeight : 0 }}>
        {feedback?.questions.map(({ id, headline, text }, i) =>
          <React.Fragment key={i}>
            <div className={s.text}>
              <h3 className="small">
                {headline}
              </h3>
              <Markdown className="light small" content={text} />
            </div>
            <div className={s.textarea}>
              <textarea id={id} name={id} rows={3} ref={i === 0 ? firstInputRef : undefined} />
            </div>
          </React.Fragment>
        )}
        <button className="full" type="submit">Send</button>
      </form>

    </section >
  )
}