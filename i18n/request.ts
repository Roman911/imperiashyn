import { getRequestConfig } from 'next-intl/server';
import { Locale } from '@/shared/types/locale';
import { routing } from './routing';

export default getRequestConfig(async({ requestLocale }) => {
	let locale = await requestLocale;

	if(!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	const messages =
		locale === Locale.UK
			? (await import('../locales/uk.json')).default
			: (await import(`../locales/${ locale }.json`)).default;

	return { locale, messages };
});