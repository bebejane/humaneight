'use client';

import cn from 'classnames';
import { defaultCountry } from '@lib/const';
import NextLink, { LinkProps } from 'next/link';
import useCountry from '@shopify/hooks/useCountry';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';
import omit from 'object.omit';

export type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode | React.ReactNode[]
  localized?: boolean | undefined
  className?: string
  activeClassName?: string
}

export default function Link<LinkProps>(props: Props) {

  const isLocalized = true; //typeof props.localized === 'undefined' ? true : props.localized;
  const country = useCountry();
  const pathname = usePathname();
  const href = isLocalized ? parseHref(props.href as string, pathname, country) : props.href

  return <NextLink {
    ...{
      ...omit(props, ['localized', 'activeClassName', 'className', 'href']),
      href,
      className: cn(props.className, pathname === href && props.activeClassName),
    }}
  >{props.children}</NextLink>
}

const parseHref = (href: string, pathname: string, country: string) => {

  if (href.startsWith('http')) return href;
  if (href.startsWith('#'))
    return `${pathname}${href}`;
  else {
    const countrySegment = (country === defaultCountry ? '' : `/${country}`).toLowerCase()
    return `${countrySegment}/${href.slice(1)}`
  }
}