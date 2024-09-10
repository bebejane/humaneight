'use client'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import s from './CookieConsent.module.scss'
import React, { useEffect } from 'react'
import { Switch } from 'react-aria-components'

export type Scope = {
  id: string
  label: string
  selected?: boolean,
}

const allScopes: Scope[] = [{
  id: 'necessary',
  label: 'Necessary',
  selected: false
},
{
  id: 'functional',
  label: 'Functional',
  selected: false
},
{
  id: 'performance',
  label: 'Performance',
  selected: false,
},
{
  id: 'marketing',
  label: 'Marketing',
  selected: false
}]

export default function CookieConsent() {

  const [scopes, setScopes] = React.useState<Scope[]>(allScopes)
  const [show, setShow] = React.useState<boolean | null>(null)
  const allScopesSelected = scopes.every(scope => scope.selected)

  const updateScopes = (consent: string) => {
    const selectedScopes = consent.split(',')
    const scopes = allScopes.map(scope => ({ ...scope, selected: selectedScopes.includes(scope.id) }))
    setScopes(scopes)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const consent = e.currentTarget.dataset.allow
    if (!consent) return
    localStorage.setItem('cookie_consent', consent)
    updateScopes(consent)
    setShow(false)

  }

  useEffect(() => {
    if (typeof localStorage === 'undefined') return setShow(false)

    const consent = localStorage?.getItem('cookie_consent')
    if (!consent) {
      setScopes(allScopes.map(scope => ({ ...scope, selected: true })))
      setShow(true)
      return
    }
    updateScopes(consent)
    setShow(false)

  }, [show])

  if (show === false) {
    const allowGoogleAnalytics = scopes.find(s => s.id === 'performance' && s.selected) !== undefined && show === false;
    return (
      <>
        {allowGoogleAnalytics &&
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
          </>
        }
      </>
    )
  }
  else if (show === null) return null

  return (

    <div role="dialog" aria-labelledby="cookie-heading" className={s.cookieConsent}>
      <div className={s.box}>
        <header>
          <h2 id="cookie-heading">
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
            <button data-allow={allScopes.map(s => s.id).join(',')} type="button" disabled={!allScopesSelected} onClick={handleClick}>Allow all</button>
            <button data-allow={scopes.filter(s => s.selected).map(s => s.id).join(',')} autoFocus={true} type="button" onClick={handleClick}>Allow selection</button>
            <button data-allow="necessary" type="button" onClick={handleClick}>Deny</button>
          </div>
        </form>
      </div>
    </div>
  )
}
