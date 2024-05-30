'use server'

import { apiQuery } from 'next-dato-utils/api'
import { FeedbackDocument } from '@graphql'
import { ZodError, z } from 'zod'

export default async function addFeedback(prevState: any, formData: FormData): Promise<{ success: boolean, error?: string }> {

  try {

    const { feedback } = await apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, { revalidate: 0 })

    const feedbackData: { [key: string]: string } = {}

    for (const [id, value] of formData.entries())
      feedbackData[id] = value as string

    feedback?.questions.forEach(({ id, headline }) => {
      if (!feedbackData[id])
        throw new Error(`Please answer the question: ${headline}`)
      else
        console.log(`Question ${headline} answered: ${feedbackData[id]}`)
    })

    return { success: true }

  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : error as string }
  }
}