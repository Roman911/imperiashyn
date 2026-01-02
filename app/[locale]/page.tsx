import HomePage from '@/pages/home';
import { getProductsApi } from '@/entities/product/api/getProducts.api';
import { getBaseData } from '@/entities/base-data/api/baseData.api';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';

export default async function Home() {
	const res = await getProductsApi({ id: '?order[value]=featured', start: 0, length: 10 });
	const baseData = await getBaseData();
	const filters = baseData ? mapBaseData(baseData) : undefined;

	return <HomePage
		result={ res.result }
		products={ res.data.products }
		filters={ filters }
	/>
};
