'use client';

import s from './CurrencySelector.module.scss'
import cn from 'classnames';
import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  currency?: boolean
}

export default function CurrencySelector({ className, label, localization, currency = false }: Props) {

  const ref = useRef<HTMLFormElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { availableCountries } = localization
  const country = localization.availableCountries.find(({ isoCode }) => isoCode.toLowerCase() === pathname.toLowerCase().split('/')[1])?.isoCode.toLowerCase()
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const p = (country ? pathname.toLowerCase().replace(`/${country}`, '') : pathname).split('/').slice(1).join('/')
    console.log(p, pathname, country)
    router.push(`/${e.currentTarget.value.toLowerCase()}/${p}`)
    //    console.log('formData', e.currentTarget.pathname)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //console.log('formData', formData.get('countryCode'))
    router.push(`/${formData.get('countryCode')}`)
    console.log('formData', e.currentTarget.pathname)
  }


  return (
    <div className={cn(s.form, className)}>
      {label &&
        <label>{label}</label>
      }
      {!currency ?
        <select name="countryCode" defaultValue={country} onChange={handleChange}>
          {availableCountries.map(({ isoCode }) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>
        :
        <select name="currencyCode" defaultValue={country} onChange={handleChange}>
          {availableCurrencies.map((isoCode) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>

      }
    </div>
  );
}
