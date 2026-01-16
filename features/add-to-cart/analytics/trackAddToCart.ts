import { Section } from '@/shared/types/section';
import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';

export const trackAddToCart = (
	id: number,
	name: string,
	brand: string,
	model: string,
	price: number,
	section: Section,
	quantity: number
) => {
	if(!id) return;

	pushDataLayer({
		event: 'add_to_cart',
		ecommerce: {
			items: [
				buildGa4Item({
					id,
					name,
					brand,
					price,
					model,
					section,
					quantity,
				}),
			],
		},
	});
};
