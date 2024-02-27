'use client'

import { useEffect, useRef, useState } from 'react'
import { Markdown } from 'next-dato-utils/components'
import s from './Feedback.module.scss'
import cn from 'classnames'
import Content from '../content/Content'
import React from 'react'
import useIsDesktop from '@lib/hooks/useIsDesktop'

export type Props = {

}

export default function CookieConsent({ }: Props) {

  return (
    <section aria-labelledby="cookie_heading" className={cn(s.cookies, "grid")}>
      <h2 id="cookie_heading">
        WE CARE ABOUT YOUR PRIVACY
      </h2>
      <p>
        This website uses cookies to ensure you get the best experience on our website.
        To learn more about the cookies we use please read our Cookie Policy
      </p>
    </section>
  )
}
