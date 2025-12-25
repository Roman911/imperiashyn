import { ProductItem } from '@/entities/product/model/types';

export interface AddToCartDrawerProps {
	isOpen: boolean;
	cartItems: ProductItem[];
	onClose: () => void;
}
