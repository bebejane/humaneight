'use client'

import { useEffect, useRef, useState } from 'react'
import { Markdown } from 'next-dato-utils/components'
import s from './Feedback.module.scss'
import cn from 'classnames'
import Content from '../content/Content'
import React from 'react'

export type Props = {
  feedback: FeedbackQuery['feedback']
}

export default function Feedback({ feedback }: Props) {

  const [showForm, setShowForm] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    setMaxHeight(formRef.current?.scrollHeight ?? 0);
  }, [])

  return (
    <section className={cn(s.feedback, "grid")}>
      <h3 className="nav">{feedback?.headline}</h3>
      <div className={s.wrapper}>
        <Content content={feedback?.intro} />
        <button className={cn(showForm && s.active)} type="button" onClick={() => setShowForm(!showForm)}>
          Submit your view
        </button>
        <form className={cn(s.form)} ref={formRef} style={{ maxHeight: showForm ? maxHeight : 0 }}>
          {feedback?.questions.map(({ id, headline, text }, i) =>
            <React.Fragment key={i}>
              <h3 className="mid">
                {headline}
              </h3>
              <Markdown className="light small" content={text} />
              <textarea id={id} name={id} rows={3} />
            </React.Fragment>
          )}
          <button className="full" type="submit">Send</button>
        </form>
      </div >
    </section >
  )
}
