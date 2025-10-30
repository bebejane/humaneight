import s from './StartProductShortcutBlock.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from '@/components//nav/Link';

type Props = {
	data: StartProductShortcutBlockRecord;
};

export default function StartProductShortcutBlock({ data: { id, product } }: Props) {
	return (
		<section className={cn(s.container)} aria-labelledby={`${id}-heading`}>
			<Link href={`/products/${product.shopifyProduct?.handle}`}>
				<p id={`${id}-heading`}>{product.title} Shortcut</p>
				{product.image && (
					<figure>
						<Image data={product.image.responsiveImage} intersectionMargin={`0px 0px 100% 0px`} />
					</figure>
				)}
			</Link>
		</section>
	);
}
