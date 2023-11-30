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
import Logo from "@components/nav/Logo";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
  tipProduct: AllProductsQuery['allProducts'][0]
}

export default function NavBar({ menu, localization, tipProduct }: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const [menuItemId, setMenuItemId] = useState<MenuItem['id'] | null>(null);
  const pathname = usePathname();

  useKey('Escape', () => setShowMenu(false));

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);


  return (
    <>
      <Logo />
      <nav className={s.navbar}>
        <menu>
          <button
            className={cn(s.menu, showMenu && s.active, 'nav', 'nav-hover')}
            onClick={() => setShowMenu(!showMenu)}
          >Menu</button>

          {showMenu ?
            <button className={cn(s.close, "nav", "nav-hover")} onClick={() => setShowMenu(false)}>
              Close
            </button>
            :
            <Cart localization={localization} />
          }
        </menu>
      </nav>
      <nav className={cn(s.desktop, showMenu && s.show)}>
        <ul>
          {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug, localized }) => (
                  <li key={id}>
                    <Link
                      href={`${slug}`}
                      localized={localized}
                      className="nav-small nav-hover"
                      onMouseEnter={() => setMenuItemId(id)}
                      onMouseLeave={() => setMenuItemId(null)}
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
            {!menuItemId && <h3 className="small">Tip!</h3>}
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
            <figure key={`figure-${tipProduct?.id}`}>
              {tipProduct?.image?.responsiveImage &&
                <Link href={`/products/${tipProduct?.slug}`} className={s.link}>
                  <Image
                    data={tipProduct.image.responsiveImage}
                    className={cn(s.image, !menuItemId && s.show)}
                    pictureClassName={s.picture}
                  />
                </Link>
              }
            </figure>
          </li>
        </ul>

        <div className={s.footer}>
          <div className={s.locale}>
            {showMenu && <CountrySelector localization={localization} label="Location" modal={true} />}
          </div>
          <div className={cn(s.accessability, 'body')}>
            Customize our website for your needs <span className="symbol">→</span>
          </div>
        </div>
      </nav>
    </>
  );
}