import { AddToCart } from '@/features/add-to-cart';
import { Section } from '@/shared/types/section';

interface Props {
	id: number;
	quantity: number;
	section: Section;
}

export function BuyActions({ id, quantity, section }: Props) {
	return (
		<div className='relative buttons-buy flex flex-col items-end gap-2'>
			<AddToCart
				isProductPage
				id={ id || 0 }
				quantity={ quantity }
				section={ section }
			/>
		</div>
	)
}