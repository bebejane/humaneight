'use client'

import Link from "next/link";
import s from './NavBar.module.scss'
import cn from "classnames";
import Cart from "@components/shopify/Cart";
import { use, useEffect, useState } from "react";
import type { Menu } from "@lib/menu";
import { usePathname } from "next/navigation";

export type Props = {
  menu: Menu

}
export default function NavBar({ menu }: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <nav className={s.navbar}>
        <menu>
          <button className="nav nav-hover" onClick={() => setShowMenu(!showMenu)}>Menu</button>
          <h1 className="nav"><Link href="/">Humaneight</Link></h1>
          <Cart />
        </menu>
      </nav>
      <nav className={cn(s.desktop, showMenu && s.show)}>
        <button className={s.close} onClick={() => setShowMenu(false)}>Close</button>
        <ul>
          {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug }) => (
                  <li key={id}>
                    <Link href={`${slug}`} className="nav">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={s.footer}>
          <form>
            <label>
              Change location
            </label>
            <select>
              <option>SE</option>
            </select>
          </form>
          <div>
            Customize our website for your needs
          </div>
        </div>
      </nav>
    </>
  );
}