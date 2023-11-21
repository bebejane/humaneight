'use client'

import Link from "next/link";
import s from './Footer.module.scss'
import cn from "classnames";
import type { Menu } from "@lib/menu";

export type Props = {
  menu: Menu

}
export default function Footer({ menu }: Props) {
  return (
    <footer className={s.footer}>
      <h2>Humaneight</h2>
      <div className={s.subheader}>
        <h3>Crafterd for the mind</h3>
        <h3>Tailored for comfort</h3>
      </div>
      <nav>
        <ul>
          {menu.map(({ id, title, sub }) => (
            <li key={id}>
              <h3>{title}</h3>
              <ul>
                {sub?.map(({ id, title, slug, href }) => (
                  <li key={id}>
                    <Link href={href ?? slug ?? ''}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}