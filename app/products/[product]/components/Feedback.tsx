'use client'

import { useEffect, useRef, useState } from 'react'
import s from './Feedback.module.scss'
import cn from 'classnames'
import FeedbackForm from '@components/common/FeedbackForm'

export type Props = {

}

export default function Feedback({ }: Props) {

  const [showForm, setShowForm] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    setMaxHeight(formRef.current?.scrollHeight ?? 0);
  }, [])

  return (
    <section className={cn(s.feedback, "grid")}>
      <h3 className="nav">Share your unique knowledge and experiences with us.
      </h3>
      <div className={s.wrapper}>
        <p>
          Your voice is essential in our journey towards creating a neurodiverse world.
          Please share your experiences, thoughts, and ideas.
          Your input will be the backbone for future explorations and things to come.
        </p>

        <button
          className={cn(showForm && s.active)}
          type="button"
          onClick={() => setShowForm(!showForm)}
        >Submit your view</button>

        <FeedbackForm show={showForm} />
      </div >
    </section >
  )
}
