import '@styles/index.scss'
import NavBar from '@components/nav/NavBar';
import Footer from '@components/nav/Footer';
import { apiQuery } from 'next-dato-utils';
import { GlobalDocument } from '@graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { buildMenu } from '@lib/menu';
import shopifyQuery from '@lib/shopify/shopify-query';
import { LocalizationDocument } from '@lib/shopify/graphql';
import StoreProvider from '@lib/shopify/context/StoreProvider';
import ServerTest from '@components/nav/ServerTest';

export type LayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {

  const menu = await buildMenu();
  const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument)

  return (
    <html lang="en">
      <body id="root" >
        <StoreProvider>
          <NavBar menu={menu} localization={localization} />
          <main>
            {children}
          </main>
          <Footer menu={menu} localization={localization} />
        </StoreProvider>
      </body>
    </html >

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

