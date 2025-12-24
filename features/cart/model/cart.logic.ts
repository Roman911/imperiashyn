interface CartItem {
	id: number;
	quantity: number;
	section: string;
}

export interface ProductPrices {
	id: number;
	price: number;
}

export const getCartTotal = (cartItems: CartItem[], productPrices: ProductPrices[]) => productPrices.reduce(
	(sum, item) => sum + item.price * (cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 1),
	0,
);
