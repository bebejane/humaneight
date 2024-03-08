'use client'

import s from './NewsletterPopup.module.scss'
import cn from 'classnames'
import NewsletterForm from '@components/forms/NewsletterForm'
import { useEffect, useRef, useState } from 'react'

export type Props = {
  className?: string
  show: boolean
  onClose: () => void
}

export default function NewsletterPopup({ show: _show, onClose }: Props) {

  const [show, setShow] = useState(_show)
  const autoShowRef = useRef<NodeJS.Timeout>()

  const handleClose = () => {
    setShow(false)
    onClose?.()
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return
    autoShowRef.current = setTimeout(() => setShow(true), 15000)
    return () => clearTimeout(autoShowRef.current)
  }, [])

  useEffect(() => {
    if (_show)
      clearTimeout(autoShowRef.current)
    setShow(_show)
  }, [_show])

  return (
    <div className={cn(s.newsletterPopup, show && s.show)} >
      <div className={s.popup}>
        <h2>Join our community. Sign up for our newsletter.</h2>
        <NewsletterForm key={show ? 'true' : 'false'} className={s.form} />
        <button className={s.close} type="button" onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}