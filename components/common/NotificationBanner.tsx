import Link from '@/components/nav/Link';
import s from './NotificationBanner.module.scss';

export default function NotificationBanner({ general }: { general: GeneralQuery['general'] }) {
	if (!general?.notificationEnable) return null;
	return (
		<Link className={s.banner} href={general?.notificationLink}>
			{general?.notificationText}
		</Link>
	);
}
