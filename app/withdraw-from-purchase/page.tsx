import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { DraftMode, Markdown } from 'next-dato-utils/components';

import WithdrawFromPurchaseForm from './WithdrawFromPurchaseForm';
import { WithdrawFromPurchaseDocument } from '@/graphql';

export default async function WithdrawFromPurchase({
	params,
}: PageProps<'/withdraw-from-purchase'>) {
	const { withdrawFromPurchase, draftUrl } = await apiQuery(WithdrawFromPurchaseDocument);
	if (!withdrawFromPurchase) notFound();

	return (
		<>
			<article>
				<h1 className='topMargin'>{withdrawFromPurchase.title}</h1>
				<Markdown content={withdrawFromPurchase.intro} />
				<WithdrawFromPurchaseForm eMailText={withdrawFromPurchase.eMailText} />
			</article>
			<DraftMode url={draftUrl} path='/support/withdraw-from-purchase' />
		</>
	);
}
