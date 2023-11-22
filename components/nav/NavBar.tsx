'use client'

import Link from "next/link";
import s from './NavBar.module.scss'
import cn from "classnames";
import Cart from "@components/shopify/Cart";
import { useEffect, useState } from "react";
import type { Menu } from "@lib/menu";
import { usePathname } from "next/navigation";
import CurrencySelector from "@components/shopify/CurrencySelector";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
}

export default function NavBar({ menu, localization }: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <nav className={s.navbar}>
        <menu>
          <button
            className="nav nav-hover"
            onClick={() => setShowMenu(!showMenu)}
            onMouseEnter={() => setShowMenu(!showMenu)}
          >Menu</button>
          <h1 className="nav"><Link href="/">Humaneight</Link></h1>
          <Cart localization={localization} />
        </menu>
      </nav>
      <nav className={cn(s.desktop, showMenu && s.show)}>
        <button className={cn(s.close, "nav", "nav-hover")} onClick={() => setShowMenu(false)}>Close</button>
        <ul>
          {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug }) => (
                  <li key={id}>
                    <Link href={`${slug}`} className="nav nav-hover">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={s.footer}>
          <CurrencySelector localization={localization} label="Change location" />
          <div>
            Customize our website for your needs
          </div>
        </div>
      </nav>
    </>
  );
}