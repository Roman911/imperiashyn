import { addToStorage, getFromStorage } from '@/shared/lib/locale-storage/localeStorage';

export interface CartItem {
	id: number;
	quantity: number;
	section: string;
}

const STORAGE_KEY = 'reducerCart';

export function getCart(): CartItem[] {
	return getFromStorage(STORAGE_KEY) ?? [];
}

export function saveCart(cart: CartItem[]) {
	addToStorage(STORAGE_KEY, cart);
}
