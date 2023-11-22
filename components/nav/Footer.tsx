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
      <img src="/images/logo.svg"></img>
      <div className={s.subheader}>
        <h3 className="nav">Crafted for the mind. Tailored for comfort.</h3>
      </div>
      <nav>
        <ul className="grid">
          {menu.map(({ id, title, sub }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
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
    </footer >
  );
}