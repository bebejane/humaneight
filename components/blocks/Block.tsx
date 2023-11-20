import * as Components from './'

type BlockProps = { data: any, onClick?: (ids: string) => void }

export default function Block({ data, onClick }: BlockProps) {
  const type = data.__typename.replace('Record', '');
  const BlockComponent = (Components as any)[type];

  if (!BlockComponent)
    return <div>No block match {data.__typename}</div>

  return <BlockComponent data={data} onClick={onClick} />
}