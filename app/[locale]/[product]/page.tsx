import { getProduct } from '@/entities/product/model/services';
import { ProductPage } from '@/pages/product/ui/ProductPage';
import { ProductPageParams } from '@/pages/product/model/types';

export default async function Page({ params }: { params: Promise<ProductPageParams> }) {
	const { product } = await params;

	const match = product.match(/(\d+)$/);
	const productId = match?.[1];

	if(!productId) {
		throw new Error('Invalid product id');
	}

	const productResponse = await getProduct(productId);

	return <ProductPage product={ productResponse }/>;
}
