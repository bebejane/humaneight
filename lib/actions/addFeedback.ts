'use server';

import { apiQuery } from 'next-dato-utils/api';
import { FeedbackDocument } from '@/graphql';
import { sendPostmarkEmail } from 'next-dato-utils/utils';

export default async function addFeedback(
	prevState: any,
	formData: FormData
): Promise<{ success: boolean; error?: string; answers?: any }> {
	const answers = {};
	for (const [id, value] of Array.from(formData.entries())) answers[id] = value as string;

	try {
		const { feedback } = await apiQuery(FeedbackDocument, { revalidate: 0 });
		const feedbackData: { [key: string]: string } = {};

		Object.keys(answers).forEach((id) => {
			feedbackData[id] = answers[id] as string;
		});

		feedback?.questions.forEach(({ id, headline }) => {
			if (!feedbackData[id]) throw new Error(`Please answer the question: ${headline}`);
		});

		const data = {
			questions: feedback?.questions.map(({ id, headline }) => ({ question: headline, answer: feedbackData[id] })),
		};

		const res = await sendPostmarkEmail({
			subject: 'New feedback received',
			template: 'feedback-form',
			templateData: data,
		});

		if (res.error) throw res.error;
		console.log('send feedback form', data);
		return { success: true, answers: {} };
	} catch (error) {
		console.log('answers', answers);
		return { success: false, error: error instanceof Error ? error.message : (error as string), answers };
	}
}
