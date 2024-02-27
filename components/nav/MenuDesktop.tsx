'use client'

import Link from "@components//nav/Link";
import s from './MenuDesktop.module.scss'
import cn from "classnames";
import { useState } from "react";
import type { Menu } from "@lib/menu";
import CountrySelector from "@components/shopify/CountrySelector";
import { Image } from "react-datocms/image";
import { useKey } from "react-use";
import { usePathname } from "next/navigation";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
  tipProduct: AllProductsQuery['allProducts'][0]
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
}

export default function MenuDesktop({ menu, localization, tipProduct, showMenu, setShowMenu }: Props) {

  const [menuItemId, setMenuItemId] = useState<MenuItem['id'] | null>(null);
  const pathname = usePathname()

  const isSamePath = (slug: string | undefined): boolean => (!slug?.split('#')[0] || !pathname.endsWith(slug.split('#')[0])) ? false : true

  useKey('Escape', () => setShowMenu(false));

  return (
    <nav className={cn(s.menuDesktop, showMenu && s.show)}>
      <ul>
        {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
          <li key={id}>
            <h3 className="small">{title}</h3>
            <ul>
              {sub?.filter(({ footer }) => !footer).map(({ id, title, slug, localized }) => (
                <li key={id}>
                  <Link
                    href={`${slug}`}
                    localized={localized}
                    className="nav-small nav-hover"
                    onMouseEnter={() => setMenuItemId(id)}
                    onMouseLeave={() => setMenuItemId(null)}
                    onClick={() => isSamePath(slug) && setShowMenu(false)}
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
                  lazyLoad={false}
                  className={cn(s.image, item.id === menuItemId && s.show)}
                  pictureClassName={s.picture}
                />
              }
            </figure>
          ))}
          <figure key={`figure-${tipProduct?.id}`}>
            {tipProduct?.image?.responsiveImage &&
              <Link href={`/products/${tipProduct?.shopifyProduct.handle}`} className={s.link}>
                <Image
                  data={tipProduct.image.responsiveImage}
                  lazyLoad={false}
                  className={cn(s.image, !menuItemId && s.show)}
                  pictureClassName={s.picture}
                />
              </Link>
            }
            {tipProduct?.title && !menuItemId &&
              <figcaption><h3 className="nav">{tipProduct.title}</h3></figcaption>
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
  )
}