'use client'

import Link from "next/link";
import s from './Footer.module.scss'
import cn from "classnames";
import { apiQuery, DraftMode } from "next-dato-utils";
import Cart from "@components/Cart";
import { useState } from "react";
import type { Menu } from "@lib/menu";

export type Props = {
  menu: Menu

}
export default function Footer({ menu }: Props) {
  return (
    <footer className={s.footer}>
      <h2>HUMANEIGHT</h2>
      <div className={s.subheader}>
        <h3 className="nav">Crafted for the mind.</h3>
        <h3 className="nav">Tailored for comfort.</h3>
      </div>
      <nav>
        <ul className="grid">
          {menu.map(({ id, title, sub, slug }) => (
            <li key={id}>
              <h3 className="small">{title}</h3>
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
      </nav>
    </footer>
  );
}