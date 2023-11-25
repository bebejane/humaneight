import s from './page.module.scss'
import { CountryParams } from './[country]/layout'
import { apiQuery, DraftMode } from 'next-dato-utils';
import { StartDocument } from '@graphql';
import Block from '@components/blocks/Block';

export default async function Home(params: CountryParams) {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
    tags: ['start']
  });

  return (
    <>
      <div>
        {start?.sections.map((section, i) =>
          <Block key={i} data={section} />
        )}
      </div>
      <DraftMode url={draftUrl} tag={start?.id} />
    </>
  )
}