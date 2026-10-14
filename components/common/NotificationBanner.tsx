import Link from '@/components/nav/Link';
import s from './NotificationBanner.module.scss';

export default function NotificationBanner() {
	return (
		<Link className={s.banner} href='/about/research'>
			91% of neurodivergent people experience discomfort from mainstream fashion. Read the full
			research here.
		</Link>
	);
}
