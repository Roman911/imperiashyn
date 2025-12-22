import { Locale } from '@/shared/types/locale';
import { HomeFilters } from '@/widgets/home-filters';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	return (
		<>
			<HomeFilters />
			<div>Home</div>
		</>
	);
};
