'use client';

import s from './ContactFormBlock.module.scss';
import addContact from '@/lib/actions/addContact';
import { useActionState } from 'react';
import SubmitButton from '@/components/forms/SubmitButton';

type Props = {
	data: ContactFormBlockRecord;
	className?: string;
};

const initialState = {
	success: false,
	error: undefined,
	email: '',
	message: '',
};

export default function ContactFormBlock({ data: { id, message }, className }: Props) {
	const [state, formAction, pending] = useActionState(addContact, initialState);

	return (
		<section className={s.contactForm}>
			{state.success ? (
				<p>{message}</p>
			) : (
				<form action={formAction}>
					<input id='email' name='email' type='email' placeholder='Your e-mail...' defaultValue={state.ameil} />
					<textarea id='message' name='message' placeholder='Message...' defaultValue={state.message} />
					<SubmitButton label='Send' loading='Sending...' pending={pending} />
				</form>
			)}
			{state.error && !pending && <p className={s.error}>{state.error}</p>}
		</section>
	);
}
