
import s from './page.module.scss'
import { ContactDocument, FeedbackDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import Content from '@components/content/Content';
import ContactForm from './components/ContactForm';
import { Image } from 'react-datocms';
import Feedback from '@components/common/Feedback';

export default async function Contact() {

  const { contact, draftUrl } = await apiQuery<ContactQuery, ContactQueryVariables>(ContactDocument, { tags: ['contact'] })
  const { feedback } = await apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, { tags: ['feedback'] })

  if (!contact)
    return notFound();

  return (
    <>
      <div className="about">
        <div className={s.twoCols}>
          <div className={s.left}>
            <Content content={contact.content} />
            <ContactForm message={contact.contactFormMessage} />
          </div>
          <div className={s.right}>
            <figure>
              {contact.image &&
                <Image data={contact.image.responsiveImage} />
              }
            </figure>
          </div>
        </div>
        <Feedback feedback={feedback} />
      </div>
      <DraftMode url={draftUrl} tag={contact.id} />
    </>
  )
}