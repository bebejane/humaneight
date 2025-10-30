'use client';

import s from './ProductMeta.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Content from '@/components/content/Content';
import { useWindowSize } from 'react-use';

export type Props = {
	product: ProductByIdQuery['product'];
};

export default function ProductMeta({ product }: Props) {
	const metaSections = metaSectionsByType(product);
	const defaultMetaSectionToggles = Object.keys(metaSections).reduce(
		(acc, k) => ({ ...acc, [k]: { show: false, height: 0 } }),
		{}
	);
	const [metaSectionToggles, setMetaSectionToggles] = useState<{ [key: string]: { show: boolean; height?: number } }>(
		defaultMetaSectionToggles
	);
	const metaSectionRef = useRef<HTMLUListElement>(null);
	const { width, height } = useWindowSize();

	useEffect(() => {
		const hashChange = () => {
			const hash = window.location.hash.split('#')?.[1];
			hash && setMetaSectionToggles((m) => ({ ...m, [hash]: { ...m[hash], show: true } }));
		};
		hashChange();
		window.addEventListener('hashchange', hashChange);
		return () => window.removeEventListener('hashchange', hashChange);
	}, []);

	useEffect(() => {
		const toggles = { ...metaSectionToggles };
		Object.keys(toggles).forEach((k) => (toggles[k].height = document.getElementById(`list-${k}`)?.scrollHeight ?? 0));
		setMetaSectionToggles(toggles);
	}, [width, height]);

	if (!metaSections) return null;

	return (
		<>
			<div className={cn(s.meta)}>
				<div className={s.wrapper} aria-label='Product specifications'>
					{Object.keys(metaSections).map((k, idx) => {
						const metaType = metaSections[k][0].metaType;
						return (
							<React.Fragment key={idx}>
								{metaType?.title && (
									<a
										id={metaType.id}
										key={metaType.id}
										className={s.metaType}
										role='button'
										aria-controls={`list-${metaType.id}`}
										aria-expanded={metaSectionToggles[k]?.show ? true : false}
										onClick={() =>
											setMetaSectionToggles((prev) => ({
												...prev,
												[k]: { ...prev[k], show: !prev[k]?.show ? true : false },
											}))
										}
									>
										<h3 className={s.type}>{metaType.title}</h3>
										<button
											aria-controls={`list-${metaType.id}`}
											aria-expanded={metaSectionToggles[k]?.show ? true : false}
											className='symbol big'
										>
											{!metaSectionToggles[k]?.show ? '+' : '-'}
										</button>
									</a>
								)}
								<ul
									id={`list-${metaType.id}`}
									key={`list-${metaType.id}`}
									className={cn(metaSectionToggles[k]?.show ? s.show : s.hide)}
									style={{ maxHeight: metaSectionToggles[k]?.show ? `${metaSectionToggles[k].height}px` : '0px' }}
									ref={metaSectionToggles[k]?.show ? metaSectionRef : undefined}
									aria-label={metaType.title}
								>
									{metaSections[k].map(({ id, text }) => (
										<li key={id} className='structured mid light'>
											<Content content={text} />
										</li>
									))}
								</ul>
							</React.Fragment>
						);
					})}
				</div>
				<section className={s.inc}>
					<p className='light mid'>Always: Free returns — Free shipping over 1000 SEK – Taxes and duties included</p>
				</section>
			</div>
		</>
	);
}

const metaSectionsByType = (product: ProductByIdQuery['product']): { [key: string]: ProductMetaInfoRecord[] } => {
	return (
		product?.metaSections
			?.sort((a, b) => (a.metaType.position > b.metaType.position ? 1 : -1))
			.reduce((acc: any, metaSection) => {
				const id = metaSection.metaType?.id;
				const sections = acc[id] ?? [];
				return { ...acc, [id]: [...sections, metaSection] };
			}, {}) ?? null
	);
};
