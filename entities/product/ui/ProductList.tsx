import { twMerge } from 'tailwind-merge';
import { Product } from '@/entities/product/model';
import { ProductCard } from '@/entities/product/ui/ProductCard';

interface Props {
	products: Product[];
	classnames?: string;
}

export function ProductList({ products, classnames }: Props) {
	return (
		<div className={ twMerge('grid gap-1.5', classnames) }>
			{ products.map(product => (
				<ProductCard key={ product.sku } item={ product } />
			)) }
		</div>
	)
}
