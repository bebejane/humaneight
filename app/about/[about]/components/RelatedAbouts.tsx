import s from './RelatedAbouts.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllAboutsDocument } from '@/graphql';
import Link from 'next/link';
import ThumbnailContainer from '@/components/layout/ThumbnailContainer';
import AboutThumbnail from './AboutThumbnail';

export type Props = {
	about: AboutQuery['about'];
};

export default async function RelatedAbouts({ about }: Props) {
	if (!about) return null;

	const { allAbouts } = await apiQuery(AllAboutsDocument, {
		all: true,
		tags: ['about'],
	});

	const randomAllAbouts = allAbouts
		.filter((a) => a.id !== about?.id)
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	return (
		<section className={s.related} aria-labelledby={`${about.id}-header`}>
			<div className={s.header}>
				<h3 id={`${about.id}-header`}>More about Humaneight</h3>
			</div>
			<ThumbnailContainer className={s.thumbs}>
				{randomAllAbouts.map((a) => (
					<AboutThumbnail key={a.id} about={a as AboutRecord} />
				))}
			</ThumbnailContainer>
		</section>
	);
}
