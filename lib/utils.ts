import client from '@/lib/client';
import type { ApiError } from '@datocms/cma-client';

export const parseDatoError = (err: any): string => {
	const errors = (err as ApiError).errors.map(({ attributes: { code, details } }) => ({
		code,
		field: details?.field,
		message: details?.message,
		detailsCode: details?.code,
		errors: Array.isArray(details?.errors) ? details?.errors.join('. ') : undefined,
	}));
	return errors
		.map(
			({ code, field, message, detailsCode, errors }) =>
				`${code} ${field ? `(${field})` : ''} ${message || ''} ${detailsCode || ''} ${errors ? `(${errors})` : ''}`
		)
		.join('\n');
};

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

export const isServer = typeof window === 'undefined';

export function getDefaultProductColorVariant(product: ProductRecord) {
	const v = product.shopifyProduct?.variants?.find((variant: any) => {
		for (let i = 1; typeof variant[`option${i}`] !== 'undefined'; i++) {
			if (variant[`option${i}`] === product.defaultColor?.title) return true;
		}
		return false;
	});
	return v ?? product.shopifyProduct?.variants?.[0];
}

export function getProductColorVariant(product: ProductRecord, color?: string) {
	if (!color) return getDefaultProductColorVariant(product);

	const v = product.shopifyProduct?.variants?.find((variant: any) => {
		for (let i = 1; typeof variant[`option${i}`] !== 'undefined'; i++) {
			if (variant[`option${i}`] === color) return true;
		}
		return false;
	});
	return v ?? getDefaultProductColorVariant(product);
}

export function getProductColorVariants(product: ProductRecord) {
	return product.shopifyProduct?.variants?.reduce((acc: any, variant: any) => {
		for (let i = 1; typeof variant[`option${i}`] !== 'undefined'; i++) {
			const color = variant[`option${i}`];
			if (!acc.find((v: any) => v.color === color)) acc.push({ color, variant });
			break;
		}
		return acc;
	}, []) as { color: string; variant: any }[];
}

export const formatPrice = (amount: number) => {
	return !amount ? '' : (Math.round(amount * 100) / 100).toFixed(0);
};
