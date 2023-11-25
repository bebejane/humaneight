'use server'

import Link from '@components//nav/Link';
import s from './Footer.module.scss'
import cn from "classnames";
import type { Menu } from "@lib/menu";
import CountrySelector from "@components/shopify/CountrySelector";

export type Props = {
  menu: Menu,
  localization: LocalizationQuery['localization']

}
export default async function Footer({ menu, localization }: Props) {
  return (
    <footer className={s.footer}>
      <img src="/images/logo.svg"></img>
      <div className={s.subheader}>
        <h3 className="nav">Crafted for the mind. Tailored for comfort.</h3>
      </div>
      <nav>
        <ul className="grid">
          {menu.map(({ id, title, sub }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug, href, localized }) => (
                  <li key={id}>
                    <Link href={href ?? slug ?? ''} localized={localized}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <h3 className="small">Settings</h3>
            <ul>
              <li>
                <CountrySelector localization={localization} label="Change location" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer >
  );
}