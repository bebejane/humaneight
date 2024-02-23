'use client'

import s from './Help.module.scss'
import cn from 'classnames'
import Link from '@components/nav/Link'
import { useScrollInfo } from 'next-dato-utils';

export default function Help() {

  const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo()
  const footerTrigger = scrolledPosition > (documentHeight - (viewportHeight * 2))

  return (
    <div className={cn(s.help, footerTrigger && s.hide)}>
      <Link href={'/contact'}>
        <img src="/images/faq.png" />
        <span>Need help?<br />Contact us here!</span>
      </Link>
    </div>
  )
}