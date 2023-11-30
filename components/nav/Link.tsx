'use client';

import { defaultCountry } from '@lib/const';
import NextLink, { LinkProps } from 'next/link';
import useCountry from '@shopify/hooks/useCountry';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

export type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode | React.ReactNode[]
  localized?: boolean | undefined
  className?: string
}

export default function Link<LinkProps>(props: Props) {

  const isLocalized = true//typeof props.localized === 'undefined' ? true : props.localized;
  const country = useCountry();
  const pathname = usePathname();
  const href = isLocalized ? parseHref(props.href as string, pathname, country) : props.href
  return <NextLink {...{ ...props, href: undefined, localized: undefined }} href={href}>{props.children}</NextLink>
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