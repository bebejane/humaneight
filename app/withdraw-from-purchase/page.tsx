import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';

import WithdrawFromPurchaseForm from './WithdrawFromPurchaseForm';
import { WithdrawFromPurchaseDocument } from '@/graphql';
import Content from '@/components/content/Content';

export default async function WithdrawFromPurchase({
	params,
}: PageProps<'/withdraw-from-purchase'>) {
	const { withdrawFromPurchase, draftUrl } = await apiQuery(WithdrawFromPurchaseDocument);
	if (!withdrawFromPurchase) notFound();

	return (
		<>
			<article className={s.withdraw}>
				<h1 className='topMargin'>{withdrawFromPurchase.title}</h1>
				<Content content={withdrawFromPurchase.intro} />
				<WithdrawFromPurchaseForm eMailText={withdrawFromPurchase.eMailText} />
			</article>
			<DraftMode url={draftUrl} path='/withdraw-from-purchase' />
		</>
	);
}
