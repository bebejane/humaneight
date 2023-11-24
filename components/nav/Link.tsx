'use client';

import { usePathname, useRouter } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';

export type Props = LinkProps & {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function Link<LinkProps>(props: Props) {

  const pathname = usePathname()
  const country = getCountyFromPathname(pathname)
  const href = country ? `/${country}${props.href}` : props.href;
  return <NextLink {...{ ...props, href: undefined }} href={href} >{props.children}</NextLink>

}

const getCountyFromPathname = (pathname: string) => {
  const [path, hash] = pathname.split('#')
  return path.toLowerCase().split('/')[1].length === 2 ? path.toLowerCase().split('/')[1] : undefined
}