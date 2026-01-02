import { HomeFilters } from '@/widgets/home-filters';
import { Layout } from '@/shared/ui/layout/Layout';
import { Title } from '@/shared/ui/title';
import { Support } from '@/widgets/support';
import { NoResult } from '@/shared/ui/no-result';
import { ProductList } from '@/entities/product';
import type { Product } from '@/entities/products/model';
import type { FiltersBaseData } from '@/entities/filters/model/filters.types';

interface Props {
	result: boolean;
	products: Product[];
	filters?: FiltersBaseData;
}

export default function HomePage({ filters, result, products }: Props) {
	return (
		<>
			<HomeFilters filters={ filters } />
			<Layout>
				<Title isMain title='top 10 popular tires' />
				{ result ?
					<ProductList products={ products } classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5' /> :
					<NoResult description='no result' />
				}
				<Support />
			</Layout>
		</>
	)
}
