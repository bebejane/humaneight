import s from './AboutThreeColumnBlock.module.scss';
import Content from '@/components/content/Content';
import { Image } from 'react-datocms';
import cn from 'classnames';

export type Props = {
	data: AboutThreeColumnBlockRecord;
};

export default function AbouThreeColumnBlock({ data: { c1Media, c1Text, c2Media, c2Text, c3Media, c3Text } }: Props) {
	const columns = [
		{ media: c1Media, text: c1Text },
		{ media: c2Media, text: c2Text },
		{ media: c3Media, text: c3Text },
	];

	return (
		<section className={s.threeColumn}>
			{columns.map(({ media, text }, i) => (
				<figure key={i}>
					{media.responsiveImage ? (
						<Image data={media.responsiveImage} className={s.image} imgClassName={s.picture} />
					) : media.video ? (
						<video src={media.video.mp4Url} autoPlay loop muted playsInline className={s.video} />
					) : null}
					<div className={cn(s.content, 'structured')}>
						<Content content={text} />
					</div>
				</figure>
			))}
		</section>
	);
}
