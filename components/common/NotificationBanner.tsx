import Link from '@/components/nav/Link';
import s from './NotificationBanner.module.scss';

export default function NotificationBanner() {
	return (
		<Link className={s.banner} href='/about/research'>
			NEW RESEARCH: 91% of neurodivergent people experience discomfort from mainstream fashion. See report here.
		</Link>
	);
}
