import { sendPostmarkEmail } from 'next-dato-utils/utils';
import { WithdrawFromPurchaseFormSchema } from '@/app/withdraw-from-purchase/schema';
import { ZodError } from 'zod';
import { isbot } from 'isbot';
import { apiQuery } from 'next-dato-utils/api';
import { WithdrawFromPurchaseDocument } from '@/graphql';

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const { order_number, email, confirm_email, message } =
			WithdrawFromPurchaseFormSchema.parse(data);

		if (isbot(req.headers.get('User-Agent')) || (confirm_email && confirm_email?.length > 0)) {
			console.log('withdraw from purchase form', 'bot detected');
			return new Response(JSON.stringify({ success: false, error: 'Bots are not allowed.' }), {
				status: 403,
			});
		}
		const { withdrawFromPurchase } = await apiQuery(WithdrawFromPurchaseDocument);
		if (!withdrawFromPurchase)
			return new Response(
				JSON.stringify({ success: false, error: 'Withdraw from purchase form is not available.' }),
				{
					status: 403,
				},
			);
		console.log('cancel order', order_number);
		await sendPostmarkEmail({
			to: process.env.POSTMARK_FROM_EMAIL as string,
			subject: 'Order cancellation: #' + order_number,
			template: 'order-cancellation',
			templateData: {
				email,
				order_number,
				message: `Customer has requested to cancel an order.`,
			},
		});

		await sendPostmarkEmail({
			//to: email,
			to: process.env.POSTMARK_FROM_EMAIL as string,
			subject: 'Order cancellation: #' + order_number,
			template: 'order-cancellation-reply',
			templateData: {
				order_number,
				message: `Order cancellation: #${order_number}<br/>
				${withdrawFromPurchase.eMailText}
				`,
			},
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (e) {
		console.log(e);
		if (e instanceof ZodError) {
			return new Response(JSON.stringify({ invalid: e, success: false }), { status: 200 });
		} else
			return new Response(
				JSON.stringify({ success: false, error: typeof e === 'string' ? e : (e as Error).message }),
				{
					status: 500,
				},
			);
	}
}
