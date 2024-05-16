'use client'

import s from './CookieConsent.module.scss'
import cn from 'classnames'
import React from 'react'
import { Switch } from 'react-aria-components'

export type Scope = {
  id: string
  label: string
  selected?: boolean
}

const allScopes: Scope[] = [{
  id: 'necessary',
  label: 'Necessary',
  selected: true
},
{
  id: 'functional',
  label: 'Functional',
  selected: true
},
{
  id: 'performance',
  label: 'Performance',
  selected: true
},
{
  id: 'marketing',
  label: 'Marketing',
  selected: true
}]

export default function CookieConsent() {

  const [scopes, setScopes] = React.useState<Scope[]>(allScopes)
  const [show, setShow] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.dataset.allow)
    console.log('submit')
    setShow(false)
  }

  if (!show) return null

  return (
    <section aria-labelledby="cookie_heading" className={s.cookieConsent}>
      <div className={s.box}>
        <header>
          <h2 id="cookie_heading">
            We care about your privacy.
          </h2>
        </header>
        <div>
          <p className="default-small">
            This website uses cookies to ensure you get the best experience on our website.
            To learn more about the cookies we use please read our Cookie Policy.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className={s.scopes}>
            {scopes.map(({ id, label, selected }) =>
              <Switch
                id={id}
                key={id}
                className={s.switch}
                aria-label={label}
                isDisabled={id === 'necessary'}
                isSelected={selected ? true : false}
                onChange={(val) => setScopes((s) => s.map(scope => scope.id === id ? { ...scope, selected: val } : scope))}
              >
                <div className={s.indicator} />
                {label}
              </Switch>
            )}
          </fieldset>
          <div className={s.buttons}>
            <button data-allow="all" type="button" onClick={handleClick}>Allow all</button>
            <button data-allow="selection" type="button" onClick={handleClick}>Allow selection</button>
            <button data-allow="deny" type="button" onClick={handleClick}>Deny</button>
          </div>
        </form>
      </div>
    </section>
  )
}
