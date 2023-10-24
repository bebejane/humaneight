import { apiQuery, SEOQuery } from "dato-nextjs-utils/api";
import { GetStaticProps, GetServerSideProps } from 'next'
import { GlobalDocument, } from "/graphql";
import type { TypedDocumentNode } from "@apollo/client/core/types.js";

export default function withGlobalProps(opt: any, callback?: Function): GetStaticProps | GetServerSideProps {

  const revalidate: number = parseInt(process.env.REVALIDATE_TIME as string)
  const queries: TypedDocumentNode[] = [GlobalDocument]

  if (opt.query)
    queries.push(opt.query)
  if (opt.queries)
    queries.push.apply(queries, opt.queries)
  if (opt.seo)
    queries.push(SEOQuery(opt.seo))

  return async (context: any) => {

    const props = await apiQuery(queries, { preview: context.preview });
    props.preview = context.preview || false

    if (callback)
      return await callback({ context, props: { ...props }, revalidate });
    else
      return { props: { ...props }, revalidate };
  }
}