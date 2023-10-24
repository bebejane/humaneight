import { withRevalidate } from 'dato-nextjs-utils/hoc'
import { buildRoute } from '/lib/routes';

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey } = record.model;
  const slug = record.slug || record.handle

  return revalidate([buildRoute(apiKey, slug)])
})