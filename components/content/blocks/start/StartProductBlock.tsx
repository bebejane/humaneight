import s from './StartProductBlock.module.scss';
import cn from 'classnames';
import ThumbnailContainer from '@/components/layout/ThumbnailContainer';
import ProductThumbnail from '@/components/layout/ProductThumbnail';
import Link from '@/components//nav/Link';
import React from 'react';

type Props = {
	data: StartProductBlockRecord;
};

export default async function StartProductBlock({
	data: { id, headline, selectedProducts, collection, columns },
}: Props) {
	return (
		<section id={id} className={cn(s.container)} aria-labelledby={`${id}-heading`}>
			<header>
				<h3 id={`${id}-heading`}>{headline}</h3>
				{collection && (
					<Link href={`/shop/${collection?.slug}`}>
						<h3>
							<span>View all</span>
						</h3>
					</Link>
				)}
			</header>
			<ThumbnailContainer>
				{selectedProducts.map(({ product, image, imageSecondary, color }, i) => (
					<ProductThumbnail
						key={i}
						product={product}
						image={image}
						imageSecondary={imageSecondary}
						color={color?.title}
						index={i}
						columns={columns}
					/>
				))}
			</ThumbnailContainer>
		</section>
	);
}
