
import s from './page.module.scss'
import { AllFaqSectionsDocument, AllFaqsDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import FaqItem from './components/FaqItem';
import Link from 'next/link';
import cn from 'classnames';

export type Props = {
  params?: { section: string }
}

export type FaqSectionWithFaqs = FaqSectionRecord & {
  faqs: FaqRecord[]
}

export const dynamic = 'force-static'

export default async function FaqPage({ params }: Props) {

  const { allFaqs, draftUrl } = await apiQuery<AllFaqsQuery, AllFaqsQueryVariables>(AllFaqsDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0,
    },
    tags: ['faq']
  })

  const { allFaqSections } = await apiQuery<AllFaqSectionsQuery, AllFaqSectionsQueryVariables>(AllFaqSectionsDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0,
    },
    tags: ['faq_section']
  })

  const faqSections = allFaqSections
    .filter(({ slug }) => !params?.section || params?.section === slug)
    .map(section => ({
      ...section, faqs: allFaqs.filter(faq => faq.section?.id === section.id)
    })).filter(({ faqs }) => faqs.length > 0) as FaqSectionWithFaqs[]

  return (
    <>
      <div className={cn("grid", s.container)}>
        <h1>FAQ</h1>
        <ul className={s.faqs}>
          {faqSections.map(section => (
            <li id={section.slug} key={section.id} className={s.section} >
              <h2 className="body">
                <Link href={`/faq#${section.slug}`}>{section.title}</Link>
              </h2>
              <ul className="structured">
                {section.faqs.map(faq =>
                  <FaqItem key={faq.id} faq={faq} />
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <DraftMode url={draftUrl} tag={['faq', 'faq_section']} />
    </>
  )
}