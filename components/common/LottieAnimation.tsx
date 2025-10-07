'use client';

import { lazy } from 'react';
import { useAsync } from 'react-use';

const Lottie = lazy(() => import('lottie-react'));

export type Props = {
	url: string;
	className?: string;
};

export default function LottieAnimation({ url, className }: Props) {
	const { value, error } = useAsync(async () => {
		const data = await fetch(url).then((res) => res.json());
		return data;
	}, [url]);

	error && console.error(error);

	if (!value) return null;

	return <Lottie animationData={value} className={className} />;
}
