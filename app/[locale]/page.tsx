import { Layout } from '@/shared/ui/layout/Layout';
import { HomeFilters } from '@/widgets/home-filters';
import { HomeProducts } from '@/widgets/home-products';
import { Support } from '@/widgets/support';
import { Banner } from '@/entities/banner';
import { AdditionalFilter } from '@/widgets/additional-home-filter/ui/AdditionalFilter';

export default async function Home() {
	return (
		<>
			<HomeFilters />
			<Layout>
				<HomeProducts />
				<Banner />
				<AdditionalFilter />
				<Support />
			</Layout>
		</>
	)
};
