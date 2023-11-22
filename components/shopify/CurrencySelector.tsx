'use client';

import s from './CurrencySelector.module.scss'
import cn from 'classnames';
import { changeCountry } from '@shopify/server-actions';
import { useRef } from 'react';
import { sleep } from 'next-dato-utils';
import { usePathname } from 'next/navigation';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  currency?: boolean
}

export default function CurrencySelector({ className, label, localization, currency = false }: Props) {

  const ref = useRef<HTMLFormElement>(null)
  const pathname = usePathname()
  const { availableCountries, country } = localization
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => ref.current?.submit()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submitting')
    e.preventDefault();
  }

  return (
    <form className={cn(s.form, className)} action={changeCountry} ref={ref} onSubmit={handleSubmit}>
      {label &&
        <label>{label}</label>
      }
      {!currency ?
        <select name="countryCode" defaultValue={country.isoCode} onChange={handleChange}>
          {availableCountries.map(({ isoCode }) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>
        :
        <select name="currencyCode" defaultValue={country.currency.isoCode} onChange={handleChange}>
          {availableCurrencies.map((isoCode) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>

      }
      <input type="hidden" name="pathname" value={pathname} />
    </form>
  );
}
