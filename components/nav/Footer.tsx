'use client'

import s from './Footer.module.scss'
import type { Menu } from "@lib/menu";
import Link from '@components//nav/Link';
import CountrySelector from "@components/shopify/CountrySelector";
import NewsletterPopup from '../common/NewsletterPopup';
import { useEffect, useState } from 'react';

export type Props = {
  menu: Menu,
  localization: LocalizationQuery['localization']
  general: GeneralQuery['general']
  randomClaim: string | undefined


}

export default function Footer({ menu, localization, general, randomClaim }: Props) {

  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false)

  const handleNewsletterPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNewsletterPopup(!showNewsletterPopup)
  }

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
                    {id !== 'newsletter' ?
                      <Link
                        href={href ?? slug ?? ''}
                        className={slug}
                        activeClassName={s.active}
                        localized={localized}
                      >
                        {title}
                      </Link>
                      :
                      <a href="#newsletter" onClick={handleNewsletterPopup}>Newsletter</a>
                    }
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
          <h3 className="nav">{randomClaim}</h3>
        </div>
      </div>
      <NewsletterPopup show={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)} />
    </footer >
  );
}