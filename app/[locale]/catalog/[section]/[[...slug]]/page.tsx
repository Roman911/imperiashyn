import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { getProductsApi } from '@/entities/product/api/getProducts.api';

export default async function Page({ params }: { params: Promise<{ locale: Locale, section: Section, slug: string[] }> }) {
	const { locale, section, slug } = await params;
	const value = slug?.find(item => item.startsWith('p-'));
	const page = value ? parseInt(value.split('-')[1], 10) : null;
	// const filterData = await getFilterData(
	// 	`?typeproduct=${section === Section.Disks ? 3 : section === Section.Battery ? 4 : 1}`,
	// );
	const res = await getProductsApi({ id: '?order[value]=featured', start: 0, length: 10 });

	return (
		<div>
			123
		</div>
	)
}
