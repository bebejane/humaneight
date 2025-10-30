'use client';

import s from './FaqItem.module.scss';
import cn from 'classnames';
import Content from '@/components/content/Content';
import { useEffect, useRef, useState } from 'react';
import useSmoothScroll from '@/lib/hooks/useSmoothScroll';

export type Props = {
	faq: FaqRecord;
};

export default function FaqItem({ faq }: Props) {
	useSmoothScroll();

	const ref = useRef<HTMLDivElement>(null);
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		const hash = window.location.hash;
		setSelected(hash === `#${faq.id}`);
	}, [faq.id]);

	return (
		<li id={faq.id} key={faq.id} className={s.faq} aria-labelledby={`${faq.id}-header`}>
			<a
				className={cn('body', s.question)}
				href={`#${faq.id}`}
				role='button'
				aria-controls={`${faq.id}-answer`}
				aria-expanded={selected}
				onClick={(e) => {
					setSelected(!selected);
					e.preventDefault();
				}}
			>
				<h3 id={`${faq.id}-header`}>{faq.question}</h3>
				<h3 className='symbol'>{selected ? '-' : '+'}</h3>
			</a>
			<div
				id={`${faq.id}-answer`}
				role='region'
				aria-hidden={!selected}
				className={cn(s.answer, selected && s.show, 'light')}
				style={{ maxHeight: selected ? `${ref.current?.scrollHeight}px` : '0px' }}
				ref={ref}
			>
				<Content content={faq.answer} />
			</div>
		</li>
	);
}
