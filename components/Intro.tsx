'use client'

import s from './Intro.module.scss'
import cn from 'classnames'
import { useState } from 'react'


export default function Intro() {

  const [visible, setVisible] = useState(true)

  return (
    <div className={cn(s.intro, !visible && s.hide)} onClick={() => setVisible(false)}>
      <img src="/images/logo.svg" />
      <h1>For a neurodiverse world.</h1>
    </div>
  )
}