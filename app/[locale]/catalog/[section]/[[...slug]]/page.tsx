import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { Layout } from '@/shared/ui/layout/Layout';
import { FilterAlt } from '@/features/catalog/filter-alt';
import { getFilterData } from '@/features/catalog/filter-alt/api/filter.api';

export default async function Page({ params }: { params: Promise<{ locale: Locale, section: Section, slug: string[] }> }) {
	const { locale, section, slug } = await params;
	const filterData = await getFilterData(`?typeproduct=${section === Section.Disks ? 3 : section === Section.Battery ? 4 : section === Section.Cargo ? 2 : 1}`);
	const value = slug?.find(item => item.startsWith('p-'));
	const car = slug?.find(segment => segment.startsWith('car-')) || null;

	return (
		<Layout>
			<div className='py-5 lg:flex lg:gap-10'>
				<FilterAlt filterData={ filterData } section={ section } car={ car } slug={ slug } />
			</div>
		</Layout>
	)
}
