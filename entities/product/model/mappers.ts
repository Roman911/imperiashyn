import { ProductApi } from '../api/types';
import { Product } from './types';

export function mapSeason(season: string): 'summer' | 'winter' | 'all' {
	switch(season) {
		case '1':
			return 'summer';
		case '2':
			return 'winter';
		default:
			return 'all';
	}
}

export function mapProductFromApi(api: ProductApi): Product {
	const offer = api.offers[0];

	return {
		id: api.id,
		sku: api.offer_group.sku,
		name: api.full_name,
		slug: api.page_url,
		imageSmall: api.photo.url_part,
		imageBig: api.photo.url_part2,
		images: api.photos.urls,
		brandImage: api.model.brand_image,
		brandName: api.brand.name,

		price: Number(offer?.price ?? api.min_price),
		maxPrice: api.max_price,
		availableQuantity: offer?.quantity ?? 0,

		season: mapSeason(api.model.season),
		width: api.offer_group.width,
		height: api.offer_group.height,
		diameter: api.offer_group.diameter,
		vehicleType: api.offer_group.vehicle_type,

		disabled: api.disabled,

		review: api.review,
	};
}

export function mapProductsFromApi(products: ProductApi[]): Product[] {
	return products.map(mapProductFromApi);
}
