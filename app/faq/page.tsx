import type { CountryParams } from '@app/[country]/layout'
import s from './page.module.scss'
import cn from 'classnames';
import { AllFaqsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import Link from '@components//nav/Link';
import FaqItem from './components/FaqItem';
import Help from './components/Help';

export type FaqSectionWithFaqs = FaqSectionRecord & {
  faqs: FaqRecord[]
}

export default async function FaqPage(params: CountryParams) {

  const { allFaqs, allFaqSections, draftUrl } = await apiQuery<AllFaqsQuery, AllFaqsQueryVariables>(AllFaqsDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0,
    },
    tags: ['faq', 'faq_section']
  })

  const faqSections = allFaqSections.map(section => ({
    ...section, faqs: allFaqs.filter(faq => faq.section?.id === section.id)
  })).filter(({ faqs }) => faqs.length > 0) as FaqSectionWithFaqs[]

  return (
    <>
      <div className={cn("grid", s.container)}>
        <h1>FAQ</h1>
        <ul className={s.faqs}>
          {faqSections.map(section => (
            <li id={section.slug} key={section.id} className={s.section} >
              <h3 >
                <Link href={`/faq#${section.slug}`}>{section.title}</Link>
              </h3>
              <ul className="structured">
                {section.faqs.map(faq =>
                  <FaqItem key={faq.id} faq={faq} />
                )}
              </ul>
            </li>
          ))}
        </ul>
        <Help />
      </div>
      <DraftMode url={draftUrl} tag={['faq', 'faq_section']} />
    </>
  )
}