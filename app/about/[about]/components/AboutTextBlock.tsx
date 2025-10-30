'use client';

import s from './AboutTextBlock.module.scss';
import Content from '@/components/content/Content';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useEffect, useState } from 'react';

export type Props = {
	data: AboutTextBlockRecord;
};

export default function AboutTextBlock({ data: { id, text, layout } }: Props) {
	const { scrolledPosition } = useScrollInfo();
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [showScroll, setShowScroll] = useState<boolean>(false);

	const handleScroll = () => {
		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	};

	useEffect(() => {
		if (!isScrolled) setIsScrolled(scrolledPosition > 0);
	}, [scrolledPosition]);

	useEffect(() => {
		setTimeout(() => {
			setShowScroll(true);
		}, 3000);
	}, []);

	return (
		<section className={cn(s.section, layout && s[layout], 'structured grid')}>
			<div className={s.content}>
				<Content className='big' content={text} />
				{!isScrolled && (
					<div className={cn('mid', s.scroll, showScroll && !isScrolled && s.visible)} onClick={handleScroll}>
						Scroll down
					</div>
				)}
			</div>
		</section>
	);
}
