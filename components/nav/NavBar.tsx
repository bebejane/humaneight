'use client'

import Link from "next/link";
import s from './NavBar.module.scss'
import cn from "classnames";
import { apiQuery, DraftMode } from "next-dato-utils";
import Cart from "@components/Cart";
import { useState } from "react";

export type Props = {
  collections: AllShopifyCollectionsQuery['collections']

}
export default function NavBar({ collections }: Props) {

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
          <li>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
            </ul>
          </li>
          <li>
            <h3>Shop</h3>
            <ul>
              {collections.edges.map(({ node: { id, handle, title } }) =>
                <li key={id}>
                  <Link href={`/collections/${handle}`}>
                    {title}
                  </Link>
                </li>
              )}
            </ul>
          </li>
          <li>
            <h3>Help</h3>
            <ul>
              <li>About Us</li>
            </ul>
          </li>
          <li>
            <h3>
              Tip of the day
            </h3>
          </li>
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