import '@styles/index.scss'
import Script from 'next/script';
import NavBar from '@components/nav/NavBar';
import Footer from '@components/nav/Footer';
import CookieConsent from '@components/layout/CookieConsent';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, GlobalDocument, GeneralDocument } from '@graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { buildMenu } from '@lib/menu';
import shopifyQuery from '@shopify/shopify-query';
import { LocalizationDocument } from '@shopify/graphql';

export type LayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {

  const [menu, { localization }, { allProducts }, { general }] = await Promise.all([
    buildMenu(),
    shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
      variables: { language: 'EN' as LanguageCode },
      country: 'US'
    }),
    apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, { variables: { first: 100, skip: 0 }, all: true }),
    apiQuery<GeneralQuery, GeneralQueryVariables>(GeneralDocument)
  ])

  const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)]
  const randomClaim = general?.claims.sort((a, b) => Math.random() > 0.5 ? 1 : -1)[0].text

  return (
    <>
      <html lang="en">
        <body id="root" >
          <NavBar
            menu={menu}
            localization={localization}
            tipProduct={randomProduct}
          />
          <main>
            {children}
          </main>
          <Footer
            menu={menu}
            localization={localization}
            general={general}
            randomClaim={randomClaim}
          />
          <CookieConsent />
          <Script src="https://ac.onthemapmarketing.com/widget/3b24ef8d-6704-4361-886d-da817089839e/autoload.js" />
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

