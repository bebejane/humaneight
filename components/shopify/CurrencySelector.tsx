

'use client';
import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './CurrencySelector.module.scss'
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import useCountry from '@shopify/hooks/useCountry';
import { defaultCountry } from '@lib/const';
import { useState } from 'react';

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

  const [selectOpen, setSelectOpen] = useState(false)

  const { availableCountries } = localization
  const availableCurrencies = Array.from(new Set(availableCountries.map(({ currency: { isoCode } }) => isoCode)))

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formData = new FormData(e.currentTarget.parentNode as HTMLFormElement)
    const countryCode = ((formData.get('countryCode') as string) ?? defaultCountry)
    const path = `/${countryCode}/${pathname.replace(`/${country.toLowerCase()}`, ``)}`
    const hash = window.location.hash ? '#' + window.location.hash : ''
    router.replace(`${path}${hash}`.toLowerCase())
  }

  const handleChange = (countryCode: Key) => {
    const path = pathname.replace(`/${country.toLowerCase()}`, `/${countryCode.toString().toLowerCase()}`)
    const hash = window.location.hash ? '#' + window.location.hash : ''
    console.log(countryCode)
    //router.replace(`${path}${hash}`)
  }
  const options = currency ? availableCurrencies.map(isoCode => isoCode) : availableCountries.map(({ isoCode }) => isoCode)

  return (
    <form className={cn(s.form, className)} onSubmit={(e) => { e.preventDefault() }}>
      {label && <label>{label}</label>}
      <select
        name={currency ? 'currencyCode' : 'countryCode'}
        defaultValue={country}
        onChange={handleChangeSelect}
      >
        {options.map((isoCode) => (
          <option key={isoCode} value={isoCode}>{isoCode}</option>
        ))}
      </select>
      {/* 
      <Select
        className={s.select}
        onSelectionChange={handleChange}
        onOpenChange={(o) => setSelectOpen(o)}
      >
        <Button className={s.button}>
          <SelectValue className={s.value} key={country}>
            {label}
          </SelectValue>
          <span aria-hidden="true" className={s.arrow}>{!selectOpen ? '▼' : '▲'}</span>
        </Button>
        <Popover placement="top left" className={s.popover} maxHeight={100}>
          <ListBox
            className={s.options}
            items={options.map((isoCode, idx) => ({
              id: isoCode,
              name: isoCode
            }))}
          >
            {options.map((isoCode, idx) => {
              return (
                <ListBoxItem
                  id={isoCode}
                  key={idx}
                  className={cn(s.option)}
                >{isoCode}</ListBoxItem>
              )
            })}
          </ListBox>
        </Popover>
      </Select>
          */}
    </form>
  );
}
