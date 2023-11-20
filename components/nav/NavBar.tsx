import Link from "next/link";
import s from './NavBar.module.scss'
import { apiQuery, DraftMode } from "next-dato-utils";
//import { AllMenusDocument } from "@graphql";

export default async function NavBar({ }: {}) {
  /*
  const { allMenus, draftUrl } = await apiQuery<AllMenusQuery, AllMenusQueryVariables>(AllMenusDocument, {
    tags: ['menu']
  });
  */

  return (
    <>
      <ul className={s.navbar}>
        NAvbar
      </ul>

    </>
  );
}