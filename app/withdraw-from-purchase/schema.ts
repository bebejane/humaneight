import z from 'zod';

export const WithdrawFromPurchaseFormSchema = z.object({
	order_number: z.string().min(1, { message: 'Order number is required' }),
	email: z.string().email({ message: 'E-mail address is invalid' }),
	confirm_email: z.string().optional(), // Honeypot
	message: z.string().optional(),
});
