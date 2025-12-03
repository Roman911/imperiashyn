import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { Locale } from '@/shared/types/locale';

export default getRequestConfig(async({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that the incoming `locale` is valid
	if(!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (
			await (locale === Locale.UK
				? // When using Turbopack, this will enable HMR for `en`
				import('../locales/uk.json')
				: import(`../locales/${ locale }.json`))
		).default
	};
});