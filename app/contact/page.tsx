import s from './page.module.scss';
import { CountryContactParams } from '../[country]/contact/page';
import { ContactDocument, FeedbackDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import Content from '@components/content/Content';
import ContactForm from '@components/forms/ContactForm';
import { Image } from 'react-datocms';
import FeedbackForm from '@components/forms/FeedbackForm';

export default async function Contact(params: CountryContactParams) {
	const { contact, draftUrl } = await apiQuery<ContactQuery, ContactQueryVariables>(
		ContactDocument,
		{ tags: ['contact'] }
	);
	const { feedback } = await apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, {
		tags: ['feedback'],
	});

	if (!contact) return notFound();

	return (
		<>
			<article className='about'>
				<div className={s.twoCols}>
					<div className={s.left}>
						<Content content={contact.content} />
						<ContactForm message={contact.contactFormMessage} />
					</div>
					<div className={s.right}>
						<figure>{contact.image && <Image data={contact.image.responsiveImage} />}</figure>
					</div>
				</div>
				{/* <FeedbackForm feedback={feedback} /> */}
			</article>
			<DraftMode url={draftUrl} tag={contact.id} />
		</>
	);
}

export async function generateMetadata() {
	return {
		title: 'Contact',
	};
}
