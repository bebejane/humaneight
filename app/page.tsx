import { CountryParams } from './[country]/layout'
import { DraftMode, Block } from 'next-dato-utils/components';
import { apiQuery } from 'next-dato-utils/api';
import { StartDocument } from '@graphql';
import { StartEditorialBlock, StartProductBlock, StartProductShortcutBlock } from '@components/content/blocks/start';
import FullscreenBlock from '@components/content/blocks/FullscreenBlock';
import NewsletterSection from '@components/common/NewsletterSection';
import s from './page.module.scss'

export default async function Home(params: CountryParams) {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
    tags: ['start', 'product', 'product_category', 'about'],
    generateTags: false
  });

  return (
    <>
      <div className={s.container}>
        {start?.sections.map((section, i) =>
          <Block
            key={i}
            data={section}
            className={section.__typename === 'FullscreenBlockRecord' ? s.fullscreenBlock : undefined}
            components={{
              StartEditorialBlock,
              StartProductBlock,
              StartProductShortcutBlock,
              FullscreenBlock
            }}
          />
        )}
        <NewsletterSection />
      </div>
      <DraftMode url={draftUrl} tag={start?.id} />
    </>
  )
}