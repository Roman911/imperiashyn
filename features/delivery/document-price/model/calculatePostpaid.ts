const POSTPAID = {
	fixed: 20,
	coef: 0.02,
};

export function calculatePostpaid(
	productPrice: number,
	quantity: number,
): number {
	const total = productPrice * quantity;
	return total * POSTPAID.coef + POSTPAID.fixed;
}

export function formatPrice(value: number): string {
	return Number.isInteger(value)
		? value.toFixed(0)
		: value.toFixed(2);
}
