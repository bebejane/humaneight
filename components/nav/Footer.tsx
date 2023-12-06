'use client'

import Link from '@components//nav/Link';
import s from './Footer.module.scss'
import cn from "classnames";
import type { Menu } from "@lib/menu";
import CountrySelector from "@components/shopify/CountrySelector";
import { usePathname } from 'next/navigation';

export type Props = {
  menu: Menu,
  localization: LocalizationQuery['localization']

}
export default function Footer({ menu, localization }: Props) {
  const pathname = usePathname();

  return (
    <footer className={s.footer}>
      <nav>
        <ul className="grid">
          {menu.map(({ id, title, sub }) => (
            <li key={id}>
              <h3 className="small light">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug, href, localized }) => (
                  <li key={id}>
                    <Link
                      href={href ?? slug ?? ''}
                      className={cn(slug && pathname.endsWith(slug) && s.active)}
                      localized={localized}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <h3 className="small light">Settings</h3>
            <ul>
              <li>
                <CountrySelector localization={localization} label="Location" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className={s.logo}>
        <img src="/images/logo.svg"></img>
        <div className={s.subheader}>
          <h3 className="nav">Crafted for the mind. Tailored for comfort.</h3>
        </div>
      </div>

    </footer >
  );
}