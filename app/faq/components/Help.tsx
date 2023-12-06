'use client'

import s from './Help.module.scss'
import cn from 'classnames'
import { useScrollInfo } from 'next-dato-utils';

export default function Help() {

  const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo()
  const footerTrigger = (documentHeight - viewportHeight - 200) <= scrolledPosition

  return (
    <div className={cn(s.help, footerTrigger && s.show)}>
      <img src="/images/faq.png" />
      <span>Need help?<br />Contact us here!</span>
    </div>
  )
}