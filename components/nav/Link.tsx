'use client';

import { defaultCountry } from '@lib/const';
import NextLink, { LinkProps } from 'next/link';
import useCountry from '@shopify/hooks/useCountry';
import { usePathname } from 'next/navigation';

export type Props = LinkProps & {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function Link<LinkProps>(props: Props) {

  const country = useCountry();
  const pathname = usePathname();
  const href = parseHref(props.href as string, pathname, country);
  return <NextLink {...{ ...props, href: undefined }} href={href}>{props.children}</NextLink>
}

const parseHref = (href: string, pathname: string, country: string) => {

  if (href.startsWith('http')) return href;
  if (href.startsWith('#'))
    return `${pathname}${href}`;
  else {
    const countrySegment = (country === defaultCountry ? '' : country).toLowerCase()
    return `/${countrySegment}${href.startsWith('/') ? href.slice(1) : href}`
  }

} 