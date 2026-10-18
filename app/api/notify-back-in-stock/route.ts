import { sendPostmarkEmail, signupCampaignMonitorNewsletter } from 'next-dato-utils/utils';
import { z } from 'zod';
import { isbot } from 'isbot';
import { parseGid } from '@/shopify/utils';

const NotifyBackInStockSchema = z.object({
	email: z.string().email({ message: 'E-mail address is invalid' }),
	newsletter: z.string().max(1).optional(),
	variantId: z.string().min(1, { message: 'Variant is required' }),
	variantTitle: z.string().optional(),
	productTitle: z.string().optional(),
	productHandle: z.string().optional(),
	color: z.string().optional(),
	size: z.string().optional(),
	confirm_email: z.string().optional(), // Honeypot
});

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const {
			email,
			newsletter,
			variantId,
			variantTitle,
			productTitle,
			productHandle,
			color,
			size,
			confirm_email,
		} = NotifyBackInStockSchema.parse(data);

		if (isbot(req.headers.get('User-Agent')) || (confirm_email?.length ?? 0) > 0) {
			return new Response(JSON.stringify({ success: false, error: 'Bots are not allowed.' }), {
				status: 403,
			});
		}

		const url = productHandle
			? `${process.env.NEXT_PUBLIC_SITE_URL}/products/${productHandle}?variant=${parseGid(variantId)}`
			: null;

		const text = [
			'Back in stock request',
			'',
			`Product: ${productTitle ?? '-'}`,
			`Variant: ${variantTitle ?? '-'}`,
			color ? `Color: ${color}` : null,
			size ? `Size: ${size}` : null,
			`Variant id: ${variantId}`,
			url ? `URL: ${url}` : null,
			'',
			`Notify: ${email}`,
		]
			.filter(Boolean)
			.join('\n');

		const res = await sendPostmarkEmail({
			to: process.env.POSTMARK_FROM_EMAIL as string,
			subject: `Notify me: ${productTitle ?? 'Product'} – ${variantTitle ?? ''}`.trim(),
			text,
		});

		if (newsletter === '1') {
			await signupCampaignMonitorNewsletter(email);
		}

		if (res.error) throw new Error(res.error);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (e) {
		console.log(e);
		if (e instanceof z.ZodError) {
			return new Response(
				JSON.stringify({ success: false, error: e.issues[0]?.message ?? 'Invalid input' }),
				{ status: 200 },
			);
		}
		return new Response(
			JSON.stringify({ success: false, error: typeof e === 'string' ? e : (e as Error).message }),
			{ status: 500 },
		);
	}
}
