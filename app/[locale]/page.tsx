import { Layout } from '@/shared/ui/layout/Layout';
import { HomeFilters } from '@/widgets/home-filters';
import { HomeProducts } from '@/widgets/home-products';
import { AdditionalFilter } from '@/widgets/additional-home-filter';
import { TopBrands } from '@/widgets/top-brands';
import { Support } from '@/widgets/support';
import { Banner } from '@/entities/banner';

export default async function Home() {
	return (
		<>
			<HomeFilters />
			<Layout>
				<HomeProducts />
				<Banner />
				<AdditionalFilter />
				<Support />
				<TopBrands />
			</Layout>
		</>
	)
};
