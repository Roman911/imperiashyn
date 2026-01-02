import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { getSeo } from '@/entities/tyre-disk-size-calc/model/seo';

export async function generateMetadata({ params, }: { params: { locale: Locale, section: string, slug: string[] } }): Promise<Metadata> {
	const seo = await getSeo(params.locale);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${params.locale}/opengraph-image`,
		canonical: '/tyre-disk-size-calc',
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
