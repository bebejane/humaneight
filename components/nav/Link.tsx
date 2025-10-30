'use client';

import cn from 'classnames';
import { defaultCountry } from '@/lib/constants';
import NextLink, { LinkProps } from 'next/link';
import useCountry from '@/shopify/hooks/useCountry';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';
import omit from 'object.omit';
import { forwardRef } from 'react';

export type Props = LinkProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		children: React.ReactNode | React.ReactNode[];
		localized?: boolean | undefined;
		className?: string;
		activeClassName?: string;
	};

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(props: Props, ref) {
	const isLocalized = true; //typeof props.localized === 'undefined' ? true : props.localized;
	const country = useCountry();
	const pathname = usePathname();
	const href = isLocalized ? parseHref(props.href as string, pathname, country) : props.href;

	const mergedProps = {
		...omit(props, ['localized', 'activeClassName', 'className', 'href']),
		href,
		className: cn(props.className, pathname && pathname === href && props.activeClassName),
	};

	return (
		<NextLink {...mergedProps} passHref={true} ref={ref}>
			{props.children}
		</NextLink>
	);
});

export default Link;

const parseHref = (href: string, pathname: string, country: string) => {
	if (!href) return '';
	if (href.startsWith('http')) return href;
	if (href.startsWith('#')) return `${pathname}${href}`;
	else {
		const countrySegment = (country === defaultCountry ? '' : `/${country}`).toLowerCase();
		return `${countrySegment}/${href.slice(1)}`;
	}
};
