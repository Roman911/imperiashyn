import { Language } from '@/models/language';

export const mapLocalizedOptions = (
	items: { value: string; name: string; name_ua: string }[],
	locale: Language
) =>
	items.map(item => ({
		value: item.value,
		label: locale === Language.UK ? item.name_ua : item.name,
	}));
