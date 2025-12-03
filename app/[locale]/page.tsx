import type { Metadata } from 'next';
import { Locale } from '@/shared/types/locale';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const locale = (await params).locale;

	return (
		<>
			<div>Home</div>
		</>
	);
};
