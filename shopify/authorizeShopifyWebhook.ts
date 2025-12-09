import * as crypto from 'crypto';

export default async function authorizeShopifyWebhook(
	req: Request,
	callback?: (body: any) => Promise<Response>
): Promise<Response> {
	console.log('test auth webhook');
	const body = await req.text();
	const event = (req.headers.get('x-shopify-topic') as string)?.split('/')?.[1];
	if (!event) {
		console.log('no event');
		return Response.json(
			{ success: false, error: 'event type not found in headers' },
			{ status: 401 }
		);
	}

	const hmacHeader = req.headers.get('X-Shopify-Hmac-Sha256');
	const digest = crypto
		.createHmac('sha256', process.env.SHOPIFY_WEBHOOK_VERIFY_INTEGRITY)
		.update(JSON.stringify(body), 'utf8')
		.digest('base64');

	console.log(digest, 'digest');
	console.log(hmacHeader, 'hmac');
	const verified = crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmacHeader));
	console.log('verified', verified);
	console.log('body', body);
	if (verified) {
		return await callback(JSON.parse(body));
	} else {
		return new Response('Unauthorized Request', {
			status: 401,
		});
	}
}
