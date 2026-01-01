import type { Metadata } from 'next'

import { getAliasById } from '@/entities/alias/api/alias.api';
import { Locale, LocaleCode } from '@/shared/types/locale';
import StaticPage from '@/pages/static-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale, id: string }> }): Promise<Metadata> {
	const { locale, id } = await params;
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const alias = await getAliasById(id);

	return {
		title: alias[id].description[lang].meta_title,
		description: alias[id].description[lang].meta_description,
	}
}

export default async function Pages({ params }: { params: Promise<{ locale: Locale, id: string }> }) {
	const { locale, id } = await params;
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const alias = await getAliasById(id);

	return (
		<StaticPage
			href={ alias?.[id].alias || '/' }
			content={ alias[id].description?.[lang].content || '' }
			meta_h1={ alias[id].description[lang].meta_h1 || '' }
			title={ alias[id].description[lang].meta_title }
		/>
	)
};
