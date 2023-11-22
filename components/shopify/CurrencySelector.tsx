'use client';

import s from './CurrencySelector.module.scss'
import cn from 'classnames';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  currency?: boolean
}

export default function CurrencySelector({ className, label, localization, currency = false }: Props) {

  const { availableCountries, country } = localization
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    console.log('country', countryCode);
  }
  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currencyCode = e.target.value;
    console.log(currencyCode);
  }

  return (
    <form className={cn(s.form, className)}>
      {label &&
        <label>{label}</label>
      }
      {!currency ?
        <select defaultValue={country.isoCode} onChange={handleChangeCountry}>
          {availableCountries.map(({ isoCode }) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>
        :
        <select defaultValue={country.currency.isoCode} onChange={handleChangeCurrency}>
          {availableCurrencies.map((isoCode) => (
            <option key={isoCode} value={isoCode}>{isoCode}</option>
          ))}
        </select>
      }
    </form>
  );
}
