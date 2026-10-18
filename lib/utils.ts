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

// A variant is considered in stock when it can be ordered. `inventory_policy: 'continue'`
// allows selling below zero, and a missing `inventory_quantity` means inventory isn't tracked.
export function isVariantInStock(variant: any): boolean {
	if (!variant) return false;
	if (variant.inventory_policy === 'continue') return true;
	if (variant.inventory_quantity === null || variant.inventory_quantity === undefined) return true;
	return variant.inventory_quantity > 0;
}

const variantHasColor = (variant: any, color?: string | null): boolean => {
	if (!color) return false;
	for (let i = 1; typeof variant[`option${i}`] !== 'undefined'; i++) {
		if (variant[`option${i}`] === color) return true;
	}
	return false;
};

export function getDefaultProductColorVariant(product: ProductRecord) {
	const variants: any[] = product.shopifyProduct?.variants ?? [];
	const defaultVariants = variants.filter((variant: any) =>
		variantHasColor(variant, product.defaultColor?.title),
	);
	return (
		defaultVariants.find(isVariantInStock) ??
		defaultVariants[0] ??
		variants.find(isVariantInStock) ??
		variants[0]
	);
}

export function getProductColorVariant(product: ProductRecord, color?: string) {
	if (!color) return getDefaultProductColorVariant(product);

	const variants: any[] = product.shopifyProduct?.variants ?? [];
	const colorVariants = variants.filter((variant: any) => variantHasColor(variant, color));

	return (
		colorVariants.find(isVariantInStock) ??
		colorVariants[0] ??
		getDefaultProductColorVariant(product)
	);
}

export function getProductColorVariants(product: ProductRecord) {
	return product.shopifyProduct?.variants?.reduce((acc: any, variant: any) => {
		for (let i = 1; typeof variant[`option${i}`] !== 'undefined'; i++) {
			const color = variant[`option${i}`];
			const existing = acc.find((v: any) => v.color === color);
			if (!existing) acc.push({ color, variant });
			// Prefer an in-stock variant for the link target, keeping the first-seen as fallback.
			else if (!isVariantInStock(existing.variant) && isVariantInStock(variant)) existing.variant = variant;
			break;
		}
		return acc;
	}, []) as { color: string; variant: any }[];
}

export const formatPrice = (amount: number) => {
	return !amount ? '' : (Math.round(amount * 100) / 100).toFixed(0);
};
