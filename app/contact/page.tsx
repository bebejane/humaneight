
import { ContactDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import { notFound } from 'next/navigation';
import Content from '@components/content/Content';
import ContactForm from './components/ContactForm';
import { Image } from 'react-datocms';
import FeedbackForm from '@components/common/FeedbackForm';
import s from './page.module.scss'


export default async function Contact() {

  const { contact, draftUrl } = await apiQuery<ContactQuery, ContactQueryVariables>(ContactDocument)

  if (!contact) return notFound();

  return (
    <>
      <div className="about">
        <div className={s.twoCols}>
          <div className={s.left}>          <Content content={contact.content} />
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
        <FeedbackForm show={true} />
      </div>
      <DraftMode url={draftUrl} tag={contact.id} />
    </>
  )
}