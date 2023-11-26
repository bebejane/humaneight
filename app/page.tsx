import { CountryParams } from './[country]/layout'
import { apiQuery, DraftMode, Block } from 'next-dato-utils';
import { StartDocument } from '@graphql';
import * as blocks from '../components/blocks';

export default async function Home(params: CountryParams) {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
    tags: ['start']
  });

  return (
    <>
      <div>
        {start?.sections.map((section, i) =>
          <Block key={i} data={section} components={blocks} />
        )}
      </div>
      <DraftMode url={draftUrl} tag={start?.id} />
    </>
  )
}