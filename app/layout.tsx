import '@styles/index.scss'
import NavBar from '@components/nav/NavBar';
import { apiQuery } from 'next-dato-utils';
import { GlobalDocument, MenuDocument } from '@graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import shopifyQuery from '@shopify/shopify-query';
import { AllShopifyCollectionsDocument } from '@shopify/graphql';

export type LayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {

  const { allProductTypes, draftUrl } = await apiQuery<MenuQuery, MenuQueryVariables>(MenuDocument, {
    tags: ['menu']
  });
  const { collections } = await shopifyQuery<AllShopifyCollectionsQuery, AllProductColorsQueryVariables>(AllShopifyCollectionsDocument, {

  })

  return (
    <>
      <html lang="en">
        <body id="root" >
          <NavBar collections={collections} />
          <main>
            {children}
          </main>
        </body>
      </html >

    </>
  );
}

export async function generateMetadata() {
  const { site: { globalSeo, favicon } } = await apiQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, { generateTags: false });
  return {
    title: globalSeo?.siteName,
    description: globalSeo?.fallbackSeo?.description,
    image: globalSeo?.fallbackSeo?.image?.url,
    icons: favicon.map(({ attributes: { rel, sizes, type, href: url } }) => ({ rel, url, sizes, type })) as Icon[],
  } as Metadata
}
