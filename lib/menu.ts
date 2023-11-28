'use server'

import { apiQuery } from 'next-dato-utils';
import { MenuDocument } from '@graphql';

export type MenuItem = {
  id: string,
  title: string,
  slug?: string,
  href?: string,
  localized?: boolean,
  image?: FileFieldInterface
  sub?: MenuItem[],
}

export type Menu = MenuItem[]

export const buildMenu = async (): Promise<Menu> => {
  const { allCollections, allFaqSections, allAbouts, general } = await apiQuery<MenuQuery, MenuQueryVariables>(MenuDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0
    },
    tags: ['collection', 'faq_section', 'general']
  })

  const menu: Menu = [{
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
    id: 'shop',
    title: 'Shop',
    sub: [{
      id: 'all',
      title: 'All',
      slug: '/shop'
    },
    ...allCollections.map(({ id, slug, title, image }) => ({
      id,
      title: `${title}s`,
      image: image as FileFieldInterface,
      slug: `/shop/${slug}`
    }))],
  }, {
    id: 'help',
    title: 'Help',
    sub: [
      { id: 'faq', title: 'FAQ', slug: '/faq', localized: false },
      ...allFaqSections.map(({ id, title, image, slug }) => ({
        id,
        title,
        image: image as FileFieldInterface,
        slug: `/faq#${slug}`,
        localized: false
      }))
    ],
  }, {
    id: 'legal',
    title: 'Legal',
    sub: [{
      id: 'cookes-gdpr',
      title: 'Cookies & GDPR',
    }, {
      id: 'terms-and-conditions',
      title: 'Terms & Conditions'
    }]
  }, {
    id: 'social',
    title: 'Social',
    sub: [
      { id: 'instagram', title: 'Instagram', href: general?.instagram, localized: false },
      { id: 'facebook', title: 'Facebook', href: general?.facebook, localized: false },
      { id: 'twitter', title: 'Twitter', href: general?.twitter, localized: false },
    ]
  }]
  return menu
}
