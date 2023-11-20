import Link from "next/link";
import s from './NavBar.module.scss'
import { apiQuery, DraftMode } from "next-dato-utils";
import Cart from "@components/Cart";
//import { AllMenusDocument } from "@graphql";

export default async function NavBar({ }: {}) {
  /*
  const { allMenus, draftUrl } = await apiQuery<AllMenusQuery, AllMenusQueryVariables>(AllMenusDocument, {
    tags: ['menu']
  });
  */

  return (
    <>
      <nav className={s.navbar}>
        <menu>
          <Link href="/">Home</Link>
        </menu>
      </nav>
      <Cart />
    </>
  );
}