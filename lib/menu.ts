'use server'

import { apiQuery } from 'next-dato-utils';
import { MenuDocument } from '@graphql';

export type MenuItem = {
  id: string,
  title: string,
  slug?: string,
  href?: string,
  sub?: MenuItem[],
  auth?: boolean,
  position?: 'left' | 'right'
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
    sub: allAbouts.map(({ id, slug, title }) => ({ id, title, slug: `/about/${slug}` })),
  }, {
    id: 'shop',
    title: 'Shop',
    sub: allCollections.map(({ id, slug, title }) => ({ id, title, slug: `/shop/${slug}` })),
  }, {
    id: 'help',
    title: 'Help',
    sub: [
      { id: 'faq', title: 'Faq', slug: '/faq' },
      ...allFaqSections.map(({ id, title, slug }) => ({ id, title, slug: `/faq/${slug}` }))
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
      { id: 'instagram', title: 'Instagram', href: general?.instagram },
      { id: 'facebook', title: 'Facebook', href: general?.facebook },
      { id: 'twitter', title: 'Twitter', href: general?.twitter },
    ]
  }, {
    id: 'settings',
    title: 'Settings',
    sub: []
  }]
  return menu
}
