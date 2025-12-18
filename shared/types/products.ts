export interface ProductModelImage {
	small: string;
	big: string;
}

export interface ProductModel {
	name: string;
	images: ProductModelImage[];
}

export interface Offer {
	id: number;
	price: number;
	city: string;
	country: string;
	quantity: number;
	year: number;
}

export interface Product {
	id: number;
	sku: number;
	name: string;
	brandName: string;
	image: string;

	price: {
		min: number;
		max: number;
		best: number;
	};

	season: string;
	vehicleType: string;
	popularity: number;

	dimensions?: {
		width?: string;
		height?: string;
		diameter?: string;
	};

	indices?: {
		load?: string;
		speed?: string;
	};

	runFlat: boolean;
	url: string;

	model: ProductModel;
	offers: Offer[];
	bestOffer: Offer;
}
