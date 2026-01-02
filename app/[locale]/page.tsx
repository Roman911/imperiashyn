import { getProductsApi } from '@/entities/product/api/getProducts.api';
import { getBaseData } from '@/entities/base-data/api/baseData.api';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';
import { HomeFilters } from '@/widgets/home-filters';
import { Layout } from '@/shared/ui/layout/Layout';
import { Title } from '@/shared/ui/title';
import { ProductList } from '@/entities/product';
import { NoResult } from '@/shared/ui/no-result';
import { Support } from '@/widgets/support';

export default async function Home() {
	const res = await getProductsApi({ id: '?order[value]=featured', start: 0, length: 10 });
	const baseData = await getBaseData();
	const filters = baseData ? mapBaseData(baseData) : undefined;

	return (
		<>
			<HomeFilters filters={ filters } />
			<Layout>
				<Title isMain title='top 10 popular tires' />
				{ res.result ?
					<ProductList products={ res.data.products } classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5' /> :
					<NoResult description='no result' />
				}
				<Support />
			</Layout>
		</>
	)
};
