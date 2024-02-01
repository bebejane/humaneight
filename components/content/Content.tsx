//import StructuredContent from './StructuredContent'
import { StructuredContent } from 'next-dato-utils'
import * as StartBlocks from './blocks/start'
import FullscreenBlock from './blocks/FullscreenBlock'

export type Props = {
  id?: string
  content: any
  className?: string
  onClick?: (imageId: string) => void
}

export default function Content({ id, content, className, onClick }: Props) {

  if (!content)
    return null

  return (
    <StructuredContent
      blocks={{ ...StartBlocks, FullscreenBlock }}
      className={className}
      content={content}
      onClick={onClick}
    />
  )
}