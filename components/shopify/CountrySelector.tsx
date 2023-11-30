'use client';

import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './CountrySelector.module.scss'
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import useCountry from '@shopify/hooks/useCountry';
import { defaultCountry } from '@lib/const';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';
import { sortSwedish } from 'next-dato-utils';

export type Props = {
  className?: string
  localization: LocalizationQuery['localization']
  label?: string
  modal?: boolean
  currency?: boolean
}

export default function CountrySelector({ className, label, modal = false, localization: { availableCountries } }: Props) {

  const pathname = usePathname()
  const router = useRouter()
  const country = useCountry();

  const [selectOpen, setSelectOpen] = useState(false)
  const { innerWidth, innerHeight } = useWindowSize()
  const [selectWidth, setSelectWidth] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSelectWidth(buttonRef.current?.scrollWidth ?? 0)
  }, [innerWidth, innerHeight])

  useEffect(() => {
    setTimeout(() => {
      setSelectWidth(buttonRef.current?.scrollWidth ?? 0)
    }, 100)
  }, [])

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
            {label}: {country}
          </SelectValue>
          <span aria-hidden="true" className={cn(s.arrow, "symbol")}>
            {!selectOpen ? '▼' : '▲'}
          </span>
        </Button>
        <Popover placement="top left" className={s.popover} maxHeight={100} isNonModal={!modal}>
          <ListBox
            className={s.options}
            style={{ width: selectWidth }}
            items={sortSwedish(availableCountries, 'name').map(({ isoCode, name, currency }) => ({
              id: isoCode,
              name: `${name} ${currency.isoCode}`
            }))}
          >
            {availableCountries.map(({ isoCode, name, currency }, idx) =>
              <ListBoxItem id={isoCode} key={idx} className={cn(s.option)}>
                {name} ({currency.isoCode})
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </Select>
    </form>
  );
}
