'use server'



export type Props = {
  url?: string | undefined | null,
  tag?: string | string[] | undefined | null
  path?: string | string[] | undefined | null
}

export default async function DraftMode({ url, tag, path }: Props) {

  if (!url || (!tag && !path)) return null
  return null

}