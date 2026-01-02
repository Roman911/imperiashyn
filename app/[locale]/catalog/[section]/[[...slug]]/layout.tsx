import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { getHomeSeo } from '@/entities/home/model/seo';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';

export async function generateMetadata({ params, }: { params: { locale: Locale, section: string, slug: string[] } }): Promise<Metadata> {
	const seo = await getHomeSeo(params.locale);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${params.locale}/opengraph-image`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
