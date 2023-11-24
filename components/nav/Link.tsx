'use client';

import { usePathname, useRouter } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import useCountry from '@lib/hooks/useCountry';

export type Props = LinkProps & {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function Link<LinkProps>(props: Props) {

  const country = useCountry();
  const href = country ? `/${country}${props.href}` : props.href;
  return <NextLink {...{ ...props, href: undefined }} href={href} >{props.children}</NextLink>

}
