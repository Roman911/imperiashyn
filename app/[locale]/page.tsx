import { Locale } from '@/shared/types/locale';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	return (
		<>
			<div>Home</div>
		</>
	);
};
