
import { apiQuery } from 'next-dato-utils/api'
import { FeedbackDocument } from '@graphql'
import FeedbackForm from '@components/forms/FeedbackForm'

type Props = {
  data: AboutFeedbackFormBlockRecord
}

export default async function AboutFeedbackFormBlock({ data: { id } }: Props) {
  const { feedback } = await apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, { tags: ['feedback'] })
  return (
    <FeedbackForm feedback={feedback} />
  )
}