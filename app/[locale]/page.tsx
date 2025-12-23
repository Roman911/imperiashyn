import { Locale } from '@/shared/types/locale';
import { HomeFilters } from '@/widgets/home-filters';
import { Layout } from '@/shared/ui/layout/Layout';
import { Support } from '@/widgets/support';
import { Title } from '@/shared/ui/title';
import { NoResult } from '@/shared/ui/no-result';
import { getProducts } from '@/entities/product/api/getProducts';
import { ProductList } from '@/entities/product/ui';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const res = await getProducts({ id: '?order[value]=featured', start: 0, length: 10 });

	return (
		<>
			<HomeFilters />
			<Layout>
				<Title isMain title='top 10 popular tires' />
				{ res.result ?
					<ProductList products={ res.data.products } classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5' /> :
					<NoResult description='no result' />
				}
				<Support />
			</Layout>
		</>
	);
};
