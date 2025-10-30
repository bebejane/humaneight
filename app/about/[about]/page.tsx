import { AboutDocument, AllAboutsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Block, DraftMode } from 'next-dato-utils/components';

import AboutFeedbackFormBlock from './components/AboutFeedbackFormBlock';
import AboutTwoColumnBlock from './components/AboutTwoColumnBlock';
import AboutThreeColumnBlock from './components/AboutThreeColumnBlock';
import AboutTextBlock from './components/AboutTextBlock';
import FullscreenBlock from '@/components/content/blocks/FullscreenBlock';
import RelatedAbouts from '@/app/about/[about]/components/RelatedAbouts';
import RevealText from './components/RevealText';
import { Metadata } from 'next';

export default async function About({ params }) {
	const slug = (await params).about;
	const { about, draftUrl } = await apiQuery(AboutDocument, {
		variables: { slug },
		tags: ['about'],
	});

	if (!about) return notFound();

	return (
		<>
			<RevealText key={about.id} />
			<article className='about'>
				{about.sections.map((section, i) => (
					<Block
						key={i}
						data={section}
						components={{
							AboutFeedbackFormBlock,
							AboutTwoColumnBlock,
							AboutThreeColumnBlock,
							AboutTextBlock,
							FullscreenBlock,
						}}
					/>
				))}
			</article>
			<RelatedAbouts about={about} />
			<DraftMode url={draftUrl} tag={about.id} />
		</>
	);
}

export async function generateStaticParams() {
	const { allAbouts } = await apiQuery(AllAboutsDocument, {
		all: true,
		tags: ['about'],
	});
	return allAbouts.map(({ slug: about }) => ({ about }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const slug = (await params).about;
	const { about } = await apiQuery(AboutDocument, {
		variables: { slug },
		tags: ['about'],
	});

	return {
		title: about?.metaTitle || about?.title,
		description: about?.metaDescription || undefined,
	};
}
