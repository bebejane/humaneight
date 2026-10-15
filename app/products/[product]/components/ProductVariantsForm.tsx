'use client';

import {
	FieldError,
	Label,
	Radio,
	RadioGroup,
	Button,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
	Key,
} from 'react-aria-components';
import s from './ProductVariantsForm.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import AddToCartButton from '@/components/shopify/AddToCartButton';
import { parseGid } from '@/shopify/utils';
import { useWindowSize } from 'react-use';
import { useScrollInfo } from 'next-dato-utils/hooks';
import useQueryString from '@/lib/hooks/useQueryString';
import useIsDesktop from '@/lib/hooks/useIsDesktop';
import useProduct from '@/shopify/hooks/useProduct';
import VariantUnavailableForm from '@/app/products/[product]/components/VariantUnavailableForm';

export type Props = {
	product: ProductByIdQuery['product'];
	shopifyProduct: ShopifyProductQuery['product'];
	className?: string;
	mobile?: boolean;
};

export default function ProductVariantsForm({
	product,
	shopifyProduct: _shopifyProduct,
	className,
	mobile,
}: Props) {
	const { product: shopifyProduct } = useProduct({
		handle: product?.shopifyProduct.handle,
		initialData: _shopifyProduct,
	});

	const { searchParams, setSearchParam } = useQueryString();
	const { width, height } = useWindowSize();
	const { scrolledPosition } = useScrollInfo();
	const [colorSelectWidth, setColorSelectWidth] = useState(0);
	const [colorsOpen, setColorsOpen] = useState(false);
	const selectButtonRef = React.useRef<HTMLButtonElement>(null);
	const isDesktop = useIsDesktop();
	const [formStyles, setFormStyles] = useState<React.CSSProperties>({});
	const formRef = useRef<HTMLFormElement>(null);

	const sizeGuideId = product?.metaSections.find(({ metaType }) => metaType?.title === 'Size Guide')
		?.metaType.id;

	const variantId = searchParams.get('variant') ?? null;
	const defaultVariant = getFirstAvailableVariant(shopifyProduct as ShopifyProductQuery['product']);
	const variant =
		(shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)
			?.node as ProductVariant) ?? defaultVariant;

	const haveSizes =
		shopifyProduct?.variants.edges.find(
			({ node }) => optionValue(node.selectedOptions, 'Size') !== null,
		) !== undefined;
	const haveColors =
		shopifyProduct?.variants.edges.find(
			({ node }) => optionValue(node.selectedOptions, 'Color') !== null,
		) !== undefined;
	const currentColor = optionValue(variant?.selectedOptions, 'Color');
	const currentSize = optionValue(variant?.selectedOptions, 'Size');
	const unavailableVariant =
		variant && !(variant.availableForSale && variant.quantityAvailable) ? variant : null;
	const sizeOptions = shopifyProduct?.variants.edges
		.map(({ node }) => optionValue(node.selectedOptions, 'Size'))
		.reduce<
			string[]
		>((acc, val) => (val === null ? acc : acc.includes(val) ? acc : [...acc, val]), []);
	const colorOptions = shopifyProduct?.variants.edges
		.map(({ node }) => optionValue(node.selectedOptions, 'Color'))
		.reduce<
			string[]
		>((acc, val) => (val === null ? acc : acc.includes(val) ? acc : [...acc, val]), []);

	const handleColorChange = (value: Key) => {
		handleVariantChange(value);
		setTimeout(() => window.scrollTo({ top: 0 }), 100);
	};

	const handleVariantChange = (value: Key) => {
		setSearchParam('variant', value.toString());
	};

	useEffect(() => {
		setColorSelectWidth(selectButtonRef.current?.offsetWidth ?? 0);
	}, [width, colorsOpen]);

	useEffect(() => {
		if (isDesktop) return;
		const form = formRef.current;
		if (!form) return;

		const bounds = document.getElementById('product')?.getBoundingClientRect();
		setFormStyles({ position: 'sticky', top: `${bounds?.top}px`, zIndex: 1 });
	}, [width, height, isDesktop]);

	useEffect(() => {
		if (!isDesktop) return;
		document.getElementById('accessiblyAppWidgetButton')?.classList.add('border');
		return () => document.getElementById('accessiblyAppWidgetButton')?.classList.remove('border');
	}, [isDesktop]);

	useEffect(() => {
		setTimeout(() => window.scrollTo({ top: 0 }), 100);
	}, []);

	const isHidden = (isDesktop && mobile) || (!isDesktop && !mobile);
	const isMobileHidden = !isDesktop && scrolledPosition < 100;

	if (isHidden) return null;

	return (
		<form
			id='product-variant-form'
			className={cn(s.form, className, isMobileHidden && s.hidden)}
			ref={formRef}
			style={formStyles}
			onSubmit={(e) => e.preventDefault()}
		>
			{haveColors && isDesktop && (
				<div>
					<RadioGroup
						aria-label='Colors'
						onChange={handleColorChange}
						className={s.colorsDesktop}
						key={variant.id}
					>
						{colorOptions?.map((c, idx) => {
							const target =
								findVariant(shopifyProduct, { color: c, size: currentSize }) ??
								findVariant(shopifyProduct, { color: c });
							if (!target) return null;
							const selected = currentColor === c;

							return (
								<React.Fragment key={idx}>
									<Radio
										id={parseGid(target.id)}
										value={parseGid(target.id)}
										className={cn(s.radio, selected && s.selected)}
										aria-label={c}
									>
										<div className={s.label}>
											<figure>
												<img role='icon' src={target.image?.url} alt={c} />
											</figure>
										</div>
									</Radio>
								</React.Fragment>
							);
						})}
						<FieldError />
					</RadioGroup>
				</div>
			)}
			{haveColors && !isDesktop && (
				<div>
					<Select
						key={variant.id}
						className={s.colors}
						onSelectionChange={handleColorChange}
						onOpenChange={(o) => setColorsOpen(o)}
						aria-label={'Colors'}
					>
						<Button className={s.button} ref={selectButtonRef}>
							<SelectValue className={s.value} key={variant.id}>
								<figure>
									<img role='icon' src={variant?.image?.url} alt={variant?.image?.altText} />
								</figure>
								{variant?.selectedOptions.find((opt) => opt.name === 'Color')?.value}
							</SelectValue>
							<span aria-hidden='true' className={cn(s.arrow, 'symbol')}>
								{!colorsOpen ? '▼' : '▲'}
							</span>
						</Button>
						<Popover placement='top left' className={s.colorsPopover}>
							<ListBox className={s.options} style={{ width: colorSelectWidth }}>
								{colorOptions?.map((c, idx) => {
									const target =
										findVariant(shopifyProduct, { color: c, size: currentSize }) ??
										findVariant(shopifyProduct, { color: c });
									if (!target) return null;
									return (
										<ListBoxItem
											id={parseGid(target.id)}
											key={idx}
											className={s.option}
											aria-label={c}
										>
											<figure>
												<img role='icon' src={target.image?.url} alt={target.image?.altText} />
												<Label>{c}</Label>
											</figure>
										</ListBoxItem>
									);
								})}
							</ListBox>
						</Popover>
					</Select>
				</div>
			)}

			{haveSizes && (
				<div>
					<RadioGroup
						onChange={handleVariantChange}
						className={s.sizes}
						key={variant.id}
						aria-label={'Sizes'}
					>
						{sizeOptions?.map((size, idx) => {
							const target = findVariant(shopifyProduct, { color: currentColor, size });
							if (!target) return null;
							const selected = currentSize === size;

							return (
								<React.Fragment key={idx}>
									<Radio
										id={parseGid(target.id)}
										value={parseGid(target.id)}
										className={cn(s.radio, selected && s.selected)}
										aria-label={size}
									>
										<Label className={s.label}>{size}</Label>
									</Radio>
								</React.Fragment>
							);
						})}
						<FieldError />
					</RadioGroup>
					<a
						href={`#${sizeGuideId}`}
						className={s.sizeguide}
						aria-disabled={sizeGuideId ? 'false' : 'true'}
					>
						?
					</a>
				</div>
			)}
			{unavailableVariant && (
				<VariantUnavailableForm
					key={unavailableVariant.id}
					variant={unavailableVariant}
					productTitle={product?.title}
					productHandle={product?.shopifyProduct.handle}
				/>
			)}

			<AddToCartButton
				label='Add to cart'
				merchandiseId={variant?.id}
				quantity={1}
				disabled={!(variant?.availableForSale && variant?.quantityAvailable)}
			/>
		</form>
	);
}

const getFirstAvailableVariant = (product: ShopifyProductQuery['product']): ProductVariant => {
	return (
		(product?.variants.edges.find(({ node }) => node.availableForSale && node.quantityAvailable)
			?.node as ProductVariant) ?? (product?.variants.edges[0]?.node as ProductVariant)
	);
};

const optionValue = (options: SelectedOption[], type: 'Color' | 'Size'): string | null => {
	return options.find((opt) => opt.name === type)?.value ?? null;
};

const findVariant = (
	product: ShopifyProductQuery['product'],
	{ color, size }: { color?: string | null; size?: string | null },
): ProductVariant | undefined => {
	return product?.variants.edges
		.map(({ node }) => node)
		.find(
			({ selectedOptions }) =>
				(color == null || optionValue(selectedOptions, 'Color') === color) &&
				(size == null || optionValue(selectedOptions, 'Size') === size),
		) as ProductVariant | undefined;
};
