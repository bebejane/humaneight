import NewsletterForm from '@/components/forms/NewsletterForm';
import s from './NewsletterSection.module.scss';
import cn from 'classnames';

export type Props = {
	className?: string;
};

export default function NewsletterSection({ className }: Props) {
	return (
		<section className={cn(s.newsletterSection, className)} aria-labelledby='newsletter-section-header'>
			<h2 id='newsletter-section-header'>Join our community. Sign up for our newsletter.</h2>
			<NewsletterForm className={s.form} />
		</section>
	);
}
