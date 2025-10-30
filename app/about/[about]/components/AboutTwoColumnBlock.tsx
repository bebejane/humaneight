import s from './AboutTwoColumnBlock.module.scss';
import Content from '@/components/content/Content';
import { Image } from 'react-datocms';
import { VideoPlayer } from 'next-dato-utils/components';
import cn from 'classnames';

export type Props = {
	data: AboutTwoColumnBlockRecord;
};

export default function AboutTwoColumnBlock({ data: { id, media, text } }: Props) {
	return (
		<section className={s.section}>
			<figure>
				{media.responsiveImage ? (
					<Image data={media.responsiveImage} className={s.image} imgClassName={s.picture} />
				) : media.video ? (
					<VideoPlayer data={media} className={s.video} />
				) : null}
			</figure>
			<div className={cn(s.content, 'structured')}>
				<Content content={text} />
			</div>
		</section>
	);
}
