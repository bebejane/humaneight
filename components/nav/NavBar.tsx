'use client'

import Link from "next/link";
import s from './NavBar.module.scss'
import cn from "classnames";
import { apiQuery, DraftMode } from "next-dato-utils";
import Cart from "@components/Cart";
import { useState } from "react";
import type { Menu } from "@lib/menu";

export type Props = {
  menu: Menu

}
export default function NavBar({ menu }: Props) {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={s.navbar}>
        <menu>
          <button className="nav" onClick={() => setShowMenu(true)}>Menu</button>
          <h1 className="nav"><Link href="/">Humaneight</Link></h1>
          <Cart />
        </menu>
      </nav>
      <nav className={cn(s.desktop, showMenu && s.show)}>
        <button className={s.close} onClick={() => setShowMenu(false)}>Close</button>
        <ul>
          {menu.slice(0, 3).map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3>{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug }) => (
                  <li key={id}>
                    <Link href={`${slug}`}>
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