import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { setQuantity } from '@/entities/cart/model/cart.slice';
import { addToStorage, getFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { Section } from '@/shared/types/section';

export function useSetQuantity(id: number, maxQuantity: number) {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector(state => state.cartReducer);

	// Always even, minimum 2
	const quantity = (() => {
		const value =
			cartItems.find(item => item.id === id)?.quantity ?? 2;

		return value % 2 === 0 ? value : value + 1;
	})();

	const updateQuantity = useCallback(
		(nextQuantity: number) => {
			// Quantity must always be even
			if (nextQuantity % 2 !== 0) return;

			if (nextQuantity < 2 || nextQuantity > maxQuantity) return;

			const storage = getFromStorage('reducerCart');

			const current = storage.find(
				(item: { id: number }) => item.id === id
			);

			addToStorage('reducerCart', [
				...storage.filter((item: { id: number }) => item.id !== id),
				{ ...current, quantity: nextQuantity },
			]);

			dispatch(
				setQuantity({
					id,
					quantity: nextQuantity,
					section: Section.Tires,
				})
			);
		},
		[id, maxQuantity, dispatch]
	);

	return {
		quantity,
		increment: () => updateQuantity(quantity + 2),
		decrement: () => updateQuantity(quantity - 2),
		set: (value: number) => {
			// Auto-convert odd numbers to even
			const evenValue = value % 2 === 0 ? value : value + 1;

			updateQuantity(evenValue);
		},
	};
}