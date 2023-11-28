'use client'

import Link from "@components//nav/Link";
import s from './NavBar.module.scss'
import cn from "classnames";
import Cart from "@components/shopify/Cart";
import { useEffect, useState } from "react";
import type { Menu } from "@lib/menu";
import { usePathname } from "next/navigation";
import { useKey } from 'rooks'
import CountrySelector from "@components/shopify/CountrySelector";
import { Image } from "react-datocms/image";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
}

export default function NavBar({ menu, localization }: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const [menuItemId, setMenuItemId] = useState<MenuItem['id'] | null>(null);
  const pathname = usePathname();

  useKey('Escape', () => setShowMenu(false));

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);


  return (
    <>
      <nav className={s.navbar}>
        <menu>
          <button className="nav nav-hover" onClick={() => setShowMenu(!showMenu)}>Menu</button>
          <h1 className="nav"><Link href="/">Humaneight</Link></h1>
          <Cart localization={localization} />
        </menu>
      </nav>
      <nav className={cn(s.desktop, showMenu && s.show)}>
        <button className={cn(s.menu, 'nav', 'nav-hover')} onClick={() => setShowMenu(!showMenu)}>
          Menu
        </button>
        <button className={cn(s.close, "nav", "nav-hover")} onClick={() => setShowMenu(false)}>Close</button>
        <ul>
          {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug, localized }, idx) => (
                  <li
                    key={id}
                    onMouseEnter={() => setMenuItemId(id)}
                    onMouseLeave={() => setMenuItemId(null)}
                  >
                    <Link
                      href={`${slug}`}
                      localized={localized}
                      className="nav-small nav-hover"
                      onClick={() => setShowMenu(false)}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className={s.thumbnail}>
            <h3 className="small">Tip!</h3>
            {menu.slice(0, 3).map(({ sub }) => sub).filter(sub => sub).flat().map(item => (
              <figure key={`figure-${item?.id}`}>
                {item?.image?.responsiveImage &&
                  <Image
                    data={item.image.responsiveImage}
                    className={cn(s.image, item.id === menuItemId && s.show)}
                    pictureClassName={s.picture}
                  />
                }
              </figure>
            ))}
          </li>
        </ul>

        <div className={s.footer}>
          <CountrySelector localization={localization} label="Change location" />
          <div className="body">
            Customize our website for your needs
          </div>
        </div>
      </nav>
    </>
  );
}