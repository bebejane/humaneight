'use server'

import { apiQuery } from 'next-dato-utils/api';
import { MenuDocument } from '@graphql';

export type MenuItem = {
  id: string,
  title: string,
  slug?: string,
  href?: string,
  localized?: boolean,
  image?: FileFieldInterface
  sub?: MenuItem[],
  footer?: boolean
}

export type Menu = MenuItem[]

export const buildMenu = async (): Promise<Menu> => {
  const { allCollections, allFaqSections, allAbouts, allLegals, general, contact } = await apiQuery<MenuQuery, MenuQueryVariables>(MenuDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0
    },
    tags: ['collection', 'faq_section', 'general']
  })

  const menu: Menu = [{
    id: 'shop',
    title: 'Shop',
    sub: allCollections.map(({ id, slug, titlePlural, image }) => ({
      id,
      title: titlePlural,
      image: image as FileFieldInterface,
      slug: `/shop/${slug}`
    })),
  }, {
    id: 'about',
    title: 'About',
    sub: allAbouts.map(({ id, slug, title, image }) => ({
      id,
      title,
      slug: `/about/${slug}`,
      image: image as FileFieldInterface,
      localized: false
    })),
  }, {
    id: 'help',
    title: 'Help',
    sub: [
      { id: 'faq', title: 'FAQ', slug: '/faq', localized: false },
      ...allFaqSections.filter(({ inMenu }) => inMenu).map(({ id, title, image, slug, inMenu }) => ({
        id,
        title,
        image: image as FileFieldInterface,
        slug: `/faq#${slug}`,
        localized: false,
        footer: !inMenu
      }))
    ],
  }, {
    id: 'legal',
    title: 'Legal',
    sub: allLegals.map(({ id, title, slug }) => ({
      id,
      title,
      slug: `/legal/${slug}`,
      localized: false
    }))
  }, {
    id: 'social',
    title: 'Social',
    sub: [
      { id: 'instagram', title: 'Instagram', href: general?.instagram, localized: false },
      { id: 'facebook', title: 'Facebook', href: general?.facebook, localized: false },
      { id: 'twitter', title: 'Twitter', href: general?.twitter, localized: false },
      { id: 'newsletter', title: 'Newsletter', href: '#newsletter', localized: false, footer: true },
      { id: 'contact', title: 'Contact', slug: '/contact', image: contact?.image as FileFieldInterface ?? null, localized: false, footer: true }
    ]
  }]
  return menu
}
