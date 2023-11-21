import s from './page.module.scss'
import Link from "next/link"
import { format } from 'date-fns';
import { apiQuery, Markdown, DraftMode } from 'next-dato-utils';
import { Image } from 'react-datocms';

export default async function Home() {

  /*
  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
    tags: ['start'],
    logs: true,
    generateTags: true
  });
  */
  return (
    <>
      <h1>Start</h1>

      <Link href="/products">All Products</Link>
    </>
  )
}