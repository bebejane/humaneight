import { CountryParams } from './[country]/layout'
import { apiQuery, DraftMode, Block } from 'next-dato-utils';
import { StartDocument } from '@graphql';
import { StartEditorialBlock, StartFullscreenBlock, StartProductBlock, StartProductShortcutBlock } from '../components/blocks/start';
import Newsletter from '@components/common/Newsletter';
import s from './page.module.scss'

const blocks = [StartEditorialBlock, StartFullscreenBlock, StartProductBlock, StartProductShortcutBlock]

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