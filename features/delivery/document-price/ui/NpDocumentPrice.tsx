'use client';

import { Spinner } from '@heroui/react';
import { useNpDocumentPrice } from '../model/useNpDocumentPrice';

interface Props {
	offer_id?: number;
	quantity: number;
	price: number;
}

export function NpDocumentPrice({ offer_id, quantity, price }: Props) {
	const {
		t,
		isLoading,
		hasData,
		deliveryCost,
		totalWithPostpaid,
	} = useNpDocumentPrice({
		offerId: offer_id,
		quantity,
		price,
	});

	if(isLoading || !hasData) {
		return <Spinner/>;
	}

	return (
		<>
			<p className="mt-4">
				{ t('estimated shipping') } { quantity } шт.
			</p>

			<h3 className="text-base font-semibold mt-4">
				{ t('product cost') }: { price * quantity } грн
			</h3>

			<h3 className="text-base font-semibold mt-1">
				{ t('cost') }: { deliveryCost } грн
			</h3>

			<h3 className="text-base font-semibold mt-1">
				{ t('with cash') }: { totalWithPostpaid } грн
			</h3>

			<h3 className="text-base font-semibold mt-1">
				{ t('total') }: { price * quantity + deliveryCost + Number(totalWithPostpaid) } грн
			</h3>

			<p className='mt-2text-sm'>{ t('cash on delivery cost') }</p>
		</>
	);
}
