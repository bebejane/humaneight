'use client';

import s from './VariantUnavailableForm.module.scss';
import { useState } from 'react';

export type Props = {
	variant: ProductVariant;
	productTitle?: string;
	productHandle?: string;
};

export default function VariantUnavailableForm({ variant, productTitle, productHandle }: Props) {
	const [email, setEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');
	const [placeholder, setPlaceholder] = useState(`Sold out. Email me when it's back.`);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const color = variant?.selectedOptions.find((opt) => opt.name === 'Color')?.value ?? '';
	const size = variant?.selectedOptions.find((opt) => opt.name === 'Size')?.value ?? '';

	const handleSubmit = async () => {
		if (!email) return setPlaceholder('Your email');
		if (loading) return;

		setLoading(true);
		setSuccess(false);
		setError(null);

		try {
			const res = await fetch('/api/notify-back-in-stock', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					confirm_email: confirmEmail,
					variantId: variant?.id,
					variantTitle: variant?.title,
					productTitle,
					productHandle,
					color,
					size,
				}),
			});

			const json = await res.json();

			if (res.ok && json.success) {
				setSuccess(true);
			} else {
				setError(json.error ?? 'Something went wrong');
			}
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	if (success) {
		return <p className={s.success}>Thanks! We&apos;ll e-mail you when it&apos;s back in stock.</p>;
	}

	return (
		<>
			<div className={s.form}>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder={placeholder}
					aria-label='E-mail address'
					autoComplete='email'
					required={true}
				/>
				<input
					type='text'
					value={confirmEmail}
					onChange={(e) => setConfirmEmail(e.target.value)}
					tabIndex={-1}
					autoComplete='off'
					aria-hidden='true'
					style={{ display: 'none' }}
				/>
				<button type='button' onClick={handleSubmit} disabled={loading}>
					{loading ? 'Sending...' : 'Notify me'}
				</button>
			</div>
			{error && <span className={s.error}>{error}</span>}
		</>
	);
}
