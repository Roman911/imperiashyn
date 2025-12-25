export interface Images {
	small: string;
	big: string;
}

export interface Product {
	id: number;
	name: string;
	slug: string;
	imageSmall: string;
	imageBig: string;
	images: Images[];

	price: number;
	maxPrice: number;
	availableQuantity: number;

	season: 'summer' | 'winter' | 'all';
	width: string;
	height: string;
	diameter: string;

	disabled: boolean;
}
