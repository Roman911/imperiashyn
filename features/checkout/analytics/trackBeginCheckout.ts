import { Section } from '@/shared/types/section';
import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';


export const trackBeginCheckout = (
	data: ProductsProps | undefined,
	cartItems: { id: number; quantity: number; section: Section }[]
) => {
	if(!data) return;

	const items = data.data.products.map(product => {
		const cart = cartItems.find(
			item => item.id === product.best_offer.id
		);

		return buildGa4Item({
			id: product.group,
			name: product.full_name,
			brand: product.brand_name,
			price: product.min_price,
			section: cart?.section,
			model: product.model.name,
			quantity: cart?.quantity ?? 1,
		});
	});

	pushDataLayer({
		event: 'begin_checkout',
		ecommerce: { items },
	});
};
