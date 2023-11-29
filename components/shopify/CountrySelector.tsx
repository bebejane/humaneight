'use client';

import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './CountrySelector.module.scss'
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import useCountry from '@shopify/hooks/useCountry';
import { defaultCountry } from '@lib/const';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  currency?: boolean
}

export default function CountrySelector({ className, label, localization: { availableCountries } }: Props) {

  const pathname = usePathname()
  const router = useRouter()
  const country = useCountry();

  const [selectOpen, setSelectOpen] = useState(false)
  const { innerWidth } = useWindowSize()
  const [selectWidth, setSelectWidth] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSelectWidth(buttonRef.current?.offsetWidth ?? 0)
  }, [innerWidth])

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formData = new FormData(e.currentTarget.parentNode as HTMLFormElement)
    const countryCode = ((formData.get('countryCode') as string) ?? defaultCountry)
    const path = `${countryCode !== defaultCountry ? `/${countryCode}` : ''}${pathname.replace(`/${country.toLowerCase()}`, ``)}`
    const hash = window.location.hash ? '#' + window.location.hash : ''
    router.replace(`${path}${hash}`.toLowerCase())
  }

  const handleChange = (val: Key) => {
    const countryCode = val.toString()
    const path = `${countryCode !== defaultCountry ? `/${countryCode}` : ''}${pathname.replace(`/${country.toLowerCase()}`, ``)}`
    const hash = window.location.hash ? '#' + window.location.hash : ''
    router.replace(`${path}${hash}`.toLowerCase())
  }
  return (
    <form className={cn(s.form, className)} onSubmit={(e) => { e.preventDefault() }}>
      <Select
        className={s.select}
        onSelectionChange={handleChange}
        onOpenChange={(o) => setSelectOpen(o)}

      >
        <Button className={s.button} ref={buttonRef}>
          <SelectValue className={s.value} key={country}>
            {label} {country}
          </SelectValue>
          <span aria-hidden="true" className={s.arrow}>{!selectOpen ? '▼' : '▲'}</span>
        </Button>
        <Popover placement="top left" className={s.popover} maxHeight={100} isNonModal={true}>
          <ListBox
            className={s.options}
            style={{ width: selectWidth }}
            items={availableCountries.map(({ isoCode, currency }, idx) => ({
              id: isoCode,
              name: `${isoCode} ${currency.isoCode}`
            }))}
          >
            {availableCountries.map(({ isoCode, currency }, idx) => {
              return (
                <ListBoxItem
                  id={isoCode}
                  key={idx}
                  className={cn(s.option)}
                >{isoCode} ({currency.isoCode})</ListBoxItem>
              )
            })}
          </ListBox>
        </Popover>
      </Select>
    </form>
  );
}
