'use client'

import s from './Hamburger.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
//import useStore from '/lib/store'

export type Props = {
  showMenu: boolean
  setShowMenu?: (showMenu: boolean) => void
}

export default function Hamburger({ showMenu, setShowMenu }: Props) {

  const [key, setKey] = useState(Math.random())
  const [init, setInit] = useState(false)

  const handleClick = () => {
    setInit(true)
    setShowMenu?.(!showMenu)
    setKey(Math.random())
  }

  return (
    <div role="button" aria-expanded={showMenu} className={s.hamburger} onClick={handleClick}>
      <div className={s.wrap}>
        {new Array(3).fill(0).map((_, i) =>
          <div
            id={`l${i + 1}`}
            key={`${key}-${i + 1}`}
            className={cn(init && s.init, !showMenu ? s.opened : s.closed)}
          ></div>
        )}
      </div>
    </div>
  )
}