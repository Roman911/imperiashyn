import { VehicleType } from '@/entities/products/model';

export interface Images {
	small: string;
	big: string;
}

export interface Product {
	id: number;
	sku: string;
	name: string;
	slug: string;
	imageSmall: string;
	imageBig: string;
	images: Images[];
	brandImage: string;
	brandName: string;

	price: number;
	maxPrice: number;
	availableQuantity: number;

	season: 'summer' | 'winter' | 'all';
	width: string;
	height: string;
	diameter: string;
	vehicleType: VehicleType;

	disabled: boolean;

	review: unknown[];
}

export interface ProductPageParams {
	locale: string;
	product: string;
}
