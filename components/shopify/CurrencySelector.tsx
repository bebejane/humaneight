'use client';

import s from './CurrencySelector.module.scss'
import cn from 'classnames';
import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useCountry from '@lib/hooks/useCountry';

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
  const country = useCountry();
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formData = new FormData(e.currentTarget.parentNode as HTMLFormElement)
    const countryCode = (formData.get('countryCode') as string)?.toLowerCase()
    router.push(`/${countryCode === 'se' ? '' : countryCode}`)
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
