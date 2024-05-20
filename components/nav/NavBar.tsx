'use client'

import Link from "@components//nav/Link";
import s from './NavBar.module.scss'
import cn from "classnames";
import Cart from "@components/shopify/Cart";
import { useEffect, useState } from "react";
import type { Menu } from "@lib/menu";
import { usePathname } from "next/navigation";
import Logo from "@components/nav/Logo";
import Hamburger from "./Hamburger";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { useMedia } from "react-use";
import useIsDesktop from "@lib/hooks/useIsDesktop";

export type Props = {
  menu: Menu
  localization: LocalizationQuery['localization']
  tipProduct: AllProductsForMenuQuery['allProducts'][0]
}

export default function NavBar({ menu, localization, tipProduct }: Props) {

  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isShopPage, setIsShopPage] = useState(pathname.toLowerCase().startsWith('/shop'));
  const isDesktop = useIsDesktop(false)

  useEffect(() => {
    setShowMenu(false)
    setIsShopPage(pathname.toLowerCase().startsWith('/shop'))
  }, [pathname]);

  return (
    <>
      <Logo key={pathname} showMenu={showMenu} localization={localization} />
      <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
      <nav className={s.navbar}>
        <button
          className={cn(s.item, s.menu, showMenu && s.active, 'nav', 'nav-hover')}
          onClick={() => setShowMenu(!showMenu)}
        >Menu</button>

        {showMenu ?
          <button className={cn(s.item, s.close, "nav", "nav-hover")} onClick={() => setShowMenu(false)}>Close</button>
          :
          <Link href="/shop" className={cn(s.item, 'nav', 'nav-hover', s.shop, isShopPage && s.active)}>Shop</Link>
        }
      </nav>
      {(!showMenu || !isDesktop) &&
        <Cart localization={localization} />
      }
      <MenuDesktop
        menu={menu}
        localization={localization}
        tipProduct={tipProduct}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <MenuMobile
        menu={menu}
        localization={localization}
        showMenu={showMenu}
      />
    </>
  );
}