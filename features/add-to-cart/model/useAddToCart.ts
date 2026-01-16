'use client';

import { useAppDispatch } from '@/shared/hooks/redux';
import { getCart, saveCart } from '@/entities/cart/lib/cartStorage';
import { addItem } from '@/entities/cart/model/cart.slice';
import { Section } from '@/shared/types/section';
import { trackAddToCart } from '@/features/add-to-cart/analytics/trackAddToCart';
import { ProductOffer } from '@/entities/product/api/types';

interface Props {
	id: number;
	quantity: number;
	section: Section;
	offerItem?: ProductOffer;
}

export function useAddToCart({ id, quantity, section, offerItem }: Props) {
	const dispatch = useAppDispatch();
	const cart = getCart();

	const addToCart = () => {
		const updatedCart = [
			...cart,
			{ id, quantity, section },
		];

		trackAddToCart(id, );
		dispatch(addItem({ id, quantity, section }));
		saveCart(updatedCart);
	};

	return { addToCart };
}
