'use client';

import NextLink, { LinkProps } from 'next/link';
import useCountry from '@shopify/hooks/useCountry';

export type Props = LinkProps & {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function Link<LinkProps>(props: Props) {

  const country = useCountry();
  const href = country ? `/${country.toLowerCase()}${props.href}` : props.href;
  return <NextLink {...{ ...props, href: undefined }} href={href} >{props.children}</NextLink>

}
