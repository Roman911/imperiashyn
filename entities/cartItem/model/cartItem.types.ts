import { Product } from '@/entities/product/model';

export interface CartItemTypes {
	product: Product;
	quantity: number;
}
