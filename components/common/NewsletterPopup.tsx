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
        <h3>Join our community</h3>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
        <button className={s.close} type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}