'use client'

import s from './Intro.module.scss'
import cn from 'classnames'
import { useScrollInfo } from 'next-dato-utils'
import { useEffect, useState } from 'react'


export default function Intro() {

  const [visible, setVisible] = useState(true)
  const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo()
  const ratio = Math.min((scrolledPosition ?? 0 / viewportHeight) * 2, 1)

  useEffect(() => {

  }, [scrolledPosition])

  return (
    <div
      className={cn(s.intro, !visible && s.hide)}
      onClick={() => setVisible(false)}
      style={{ opacity: 1 - ratio }}
    >
      <div className="grid">
        <h2><span>For</span> <span>a</span> <span>neurodiverse</span> <span>world.</span></h2>
      </div>
    </div>
  )
}