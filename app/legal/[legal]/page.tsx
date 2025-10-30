import s from './page.module.scss';
import cn from 'classnames';
import { LegalDocument, AllLegalsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode, StructuredContent } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export default async function Legal({ params }) {
	const slug = (await params).legal;
	const { legal, draftUrl } = await apiQuery(LegalDocument, {
		variables: { slug },
		tags: ['legal'],
	});

	if (!legal) return notFound();

	return (
		<>
			<article className={cn(s.legal, 'grid legal structured')}>
				<div className={s.container}>
					<h3>{legal.title}</h3>
					<StructuredContent content={legal.text} />
				</div>
			</article>
			<DraftMode url={draftUrl} tag={legal.id} />
		</>
	);
}

export async function generateStaticParams() {
	const { allLegals } = await apiQuery(AllLegalsDocument, {
		all: true,
		tags: ['legal'],
	});
	return allLegals.map(({ slug: legal }) => ({ legal }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const slug = (await params).legal;
	const { legal } = await apiQuery(LegalDocument, {
		variables: { slug },
		tags: ['legal'],
	});

	return {
		title: legal?.title,
	};
}
