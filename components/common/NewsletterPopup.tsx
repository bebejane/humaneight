'use client'

import { useEffect, useState } from 'react'
import s from './NewsletterPopup.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  show: boolean
  onClose: () => void
}

export default function NewsletterPopup({ show, onClose }: Props) {

  return (
    <div className={cn(s.newsletterPopup, show && s.show)} >
      <div className={s.popup}>
        <h2>Join our community. Sign up for our newsletter.</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <button className={s.submit} type="submit">Subscribe</button>
        </form>
        <button className={s.close} type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}