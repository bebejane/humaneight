import { CountryParams } from './[country]/layout'
import { apiQuery, DraftMode, Block } from 'next-dato-utils';
import { StartDocument } from '@graphql';
import { StartEditorialBlock, StartProductBlock, StartProductShortcutBlock } from './components';
import FullscreenBlock from '@components/blocks/FullscreenBlock';
import Newsletter from '@components/common/Newsletter';
import s from './page.module.scss'

const blocks = [StartEditorialBlock, StartProductBlock, StartProductShortcutBlock, FullscreenBlock]

export default async function Home(params: CountryParams) {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
    tags: ['start']
  });

  return (
    <>
      <div className={s.container}>
        {start?.sections.map((section, i) =>
          <Block key={i} data={section} components={blocks} />
        )}
        <Newsletter />
      </div>
      <DraftMode url={draftUrl} tag={start?.id} />
    </>
  )
}