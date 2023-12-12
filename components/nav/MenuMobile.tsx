'use client'

import Link from "@components//nav/Link";
import s from './MenuMobile.module.scss'
import cn from "classnames";
import { useState } from "react";
import type { Menu } from "@lib/menu";
import CountrySelector from "@components/shopify/CountrySelector";
import { usePathname } from "next/navigation";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
  showMenu: boolean
}

export default function MenuMobile({ menu, localization, showMenu }: Props) {

  const pathname = usePathname();
  const [menuItemId, setMenuItemId] = useState<MenuItem['id'] | null>(null);
  const [toggles, setToggles] = useState<{ [key: MenuItem['id']]: boolean }>({})

  return (
    <nav className={cn(s.menuMobile, showMenu && s.show)}>
      <ul>
        {menu.map(({ id, title, sub }) => (
          <li key={id}>
            <header onClick={() => setMenuItemId(menuItemId === id ? null : id)}>
              <h3 className={cn("big", menuItemId === id && s.active)}>{title}</h3>
              {sub &&
                <button className={cn("big", "symbol", menuItemId === id && s.active)}>
                  {menuItemId === id ? '–' : '+'}
                </button>
              }
            </header>
            <ul className={cn(menuItemId === id && s.show)}>
              {sub?.map(({ id, title, localized, slug }) => (
                <li key={id} className={cn('nav', pathname.endsWith(slug as string) && s.selected)}>
                  <Link
                    href={`${slug}`}
                    localized={localized}
                    className="big nav-hover"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className={s.country}>
          {showMenu && <CountrySelector localization={localization} label="Location" modal={true} />}
        </li>
      </ul>
    </nav>
  )

}