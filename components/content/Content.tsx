//import StructuredContent from './StructuredContent'
import { StructuredContent } from 'next-dato-utils'
import * as StartBlocks from './blocks/start'
import FullscreenBlock from './blocks/FullscreenBlock'

export type Props = {
  id?: string
  content: any
  styles?: any
  className?: string
  onClick?: (imageId: string) => void
}

export default function Content({ id, content, styles, className, onClick }: Props) {

  if (!content)
    return null

  return (
    <StructuredContent
      blocks={{ ...StartBlocks, FullscreenBlock }}
      className={className}
      styles={{
        'purple': 'purple',
        'small-text': 'small-text',
        'page-title': 'page-title',
        ...styles,
      }}
      content={content}
      onClick={onClick}
    />
  )
}