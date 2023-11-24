'use client';

import s from './CurrencySelector.module.scss'
import cn from 'classnames';
import { useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCountry from '@shopify/hooks/useCountry';
import { defaultCountry } from '@lib/const';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  currency?: boolean
}

export default function CurrencySelector({ className, label, localization, currency = false }: Props) {

  const pathname = usePathname()
  const router = useRouter()
  const country = useCountry();
  const { availableCountries } = localization
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formData = new FormData(e.currentTarget.parentNode as HTMLFormElement)
    const countryCode = ((formData.get('countryCode') as string) ?? defaultCountry)
    const path = pathname.replace(`/${country.toLowerCase()}`, `/${countryCode.toLowerCase()}`)
    const hash = window.location.hash ? '#' + window.location.hash : ''
    router.replace(`${path}${hash}`)
  }

  return (
    <form className={cn(s.form, className)} onSubmit={(e) => { e.preventDefault() }}>
      {label && <label>{label}</label>}
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
    </form>
  );
}
