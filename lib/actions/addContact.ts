'use server';

import { sleep } from 'next-dato-utils/utils';
import { z } from 'zod';

export default async function addContact(
	prevState: any,
	formData: FormData
): Promise<{ success: boolean; error?: string; email?: string; message?: string }> {
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;

	try {
		try {
			z.string()
				.email({ message: 'Invalid e-mail address' })
				.parse(email as string);
		} catch (e) {
			return { success: false, error: 'Invalid e-mail address' };
		}

		try {
			z.string()
				.min(1, { message: 'Message is required' })
				.parse(message as string);
		} catch (e) {
			return { success: false, error: 'Message is required' };
		}

		console.log('addContact', email, message);
		await sleep(1000);
		return { success: true };
	} catch (error) {
		return { success: false, error: error instanceof Error ? error.message : (error as string), email, message };
	}
}
