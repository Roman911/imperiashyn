'use client';

import { useMemo } from 'react';
import { useRouter } from '@/shared/i18n/navigation';
import { useAppDispatch } from '@/shared/hooks/redux';
import { getCart, saveCart } from '@/entities/cart/lib/cartStorage';
import { addCart } from '@/entities/cart/model/cart.slice';
import type { Product } from '@/entities/product/model';

export function useAddToCart(product: Product) {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const cart = useMemo(() => getCart(), []);

	const addToCart = () => {
		const offerId = product.best_offer.id;

		if (!cart.some(item => item.id === offerId)) {
			const updatedCart = [
				...cart,
				{
					id: offerId,
					quantity: 1,
					section: product.section,
				},
			];

			dispatch(addCart({ id: offerId, quantity: 1, section: product.section }));
			saveCart(updatedCart);
		}

		router.push('/cart');
	};

	return { addToCart };
}
