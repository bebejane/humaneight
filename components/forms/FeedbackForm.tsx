'use client';

import s from './FeedbackForm.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';
import { Markdown } from 'next-dato-utils/components';
import Content from '../content/Content';
import React from 'react';
import useIsDesktop from '@/lib/hooks/useIsDesktop';
import addFeedback from '@/lib/actions/addFeedback';
import SubmitButton from './SubmitButton';

export type Props = {
	feedback: FeedbackQuery['feedback'];
};

export default function FeedbackForm({ feedback }: Props) {
	const initialState = {
		success: false,
		error: undefined,
		answers: {},
	};

	feedback?.questions.map(({ id }) => (initialState.answers[id] = ''));

	const [state, formAction, pending] = useActionState(addFeedback, initialState);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean | null>(null);

	const [showForm, setShowForm] = useState(false);
	const [maxHeight, setMaxHeight] = useState(0);
	const formRef = useRef<HTMLFormElement | null>(null);
	const firstInputRef = useRef<HTMLTextAreaElement | null>(null);
	const isDesktop = useIsDesktop();

	useEffect(() => {
		setMaxHeight(formRef.current?.scrollHeight ?? 0);
		if (showForm && isDesktop) setTimeout(() => firstInputRef.current?.focus(), 200);
	}, [isDesktop, showForm]);

	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
			setSuccess(true);
			setTimeout(() => setSuccess(false), 3000);
		}
		setError(state.error ?? null);
	}, [state]);

	if (!feedback) return null;

	return (
		<section id={feedback.id} className={cn(s.feedback, 'grid')} aria-labelledby={`${feedback.id}-heading`}>
			<h2 id={`${feedback.id}-heading`}>{feedback?.headline}</h2>
			<div className={s.wrapper}>
				<Content content={feedback?.intro} />
				<button className={cn(showForm && s.active)} type='button' onClick={() => setShowForm(!showForm)}>
					Submit your view
				</button>
			</div>

			<form action={formAction} className={s.form} ref={formRef} style={{ maxHeight: showForm ? maxHeight : 0 }}>
				{feedback?.questions.map(({ id, headline, text }, i) => (
					<React.Fragment key={i}>
						<div className={s.text}>
							<h3 className='small'>{headline}</h3>
							<Markdown className='light mid' content={text} />
						</div>
						<div className={s.textarea}>
							<textarea
								id={id}
								name={id}
								rows={3}
								required={true}
								aria-errormessage={`feedback-error`}
								defaultValue={state.answers[id]}
								ref={i === 0 ? firstInputRef : undefined}
							/>
						</div>
					</React.Fragment>
				))}
				<SubmitButton label='Send' loading='Sending...' pending={pending} />
			</form>
			{showForm && (
				<>
					{success && (
						<div className={cn(s.success, 'small')}>
							<p className={s.message}>Thank you for your message!</p>
						</div>
					)}
					{state.error && !pending && (
						<p id={`feedback-error`} className={cn(s.error, 'error small')}>
							{state.error}
						</p>
					)}
				</>
			)}
		</section>
	);
}
