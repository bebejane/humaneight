'use client';

import s from './ContactForm.module.scss';
import sendPostmarkEmail from 'next-dato-utils/server-actions/sendPostmarkEmail';
import SubmitButton from './SubmitButton';
import { useEffect, useRef, useState, useActionState } from 'react';

type Props = {
	message: string;
};

const initialState = {
	email: '',
	message: '',
	success: false,
	error: undefined,
};

export default function ContactForm({ message }: Props) {
	const [state, formAction, pending] = useActionState(sendPostmarkEmail, initialState);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
			setSuccess(true);
			setTimeout(() => setSuccess(false), 3000);
		}
		setError(state.error ?? null);
	}, [state]);

	return (
		<section className={s.contactForm}>
			<form action={formAction} ref={formRef}>
				<label>Email</label>
				<input id='template' name='template' type='hidden' value='contact-form' />
				<input id='email' name='email' type='text' required={true} defaultValue={state.email} />
				<label>Message</label>
				<textarea id='message' name='message' required={true} defaultValue={state.message} />
				<SubmitButton label='Send' loading='Sending...' pending={pending} />
			</form>
			{success && <p className={s.success}>Thanks for your message!</p>}
			{state.error && <p className={s.error}>{state.error}</p>}
		</section>
	);
}
