
import Link from '@components//nav/Link';
import s from './Footer.module.scss'
import cn from "classnames";
import type { Menu } from "@lib/menu";
import CountrySelector from "@components/shopify/CountrySelector";
import { apiQuery } from 'next-dato-utils';
import { GeneralDocument } from '@graphql';

export type Props = {
  menu: Menu,
  localization: LocalizationQuery['localization']


}
export default async function Footer({ menu, localization }: Props) {

  const { general } = await apiQuery<GeneralQuery, GeneralQueryVariables>(GeneralDocument)
  const randomClaim = general?.claims.sort((a, b) => Math.random() > 0.5 ? 1 : -1)[0].text

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
                      className={slug}
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
          <h3 className="nav">{randomClaim}</h3>
        </div>
      </div>
    </footer >
  );
}