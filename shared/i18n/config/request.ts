import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { Locale } from "@/shared/types/locale";

export default getRequestConfig(async({ requestLocale }) => {
	let locale = await requestLocale;

	if(!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	const messages = {
		common: locale === Locale.UK ? (await import("../locales/uk/common.json")).default : (await import(`../locales/${ locale }/common.json`)).default,
		phoneMask: locale === Locale.UK ? (await import("../locales/uk/phone-mask.json")).default : (await import(`../locales/${ locale }/phone-mask.json`)).default,
		select: locale === Locale.UK ? (await import("../locales/uk/select.json")).default : (await import(`../locales/${ locale }/select.json`)).default,
		filters: locale === Locale.UK ? (await import("@/entities/filters/locales/uk/filters.json")).default : (await import(`@/entities/filters/locales/${ locale }/filters.json`)).default,
		footer: locale === Locale.UK ? (await import("@/widgets/footer/locales/uk/footer.json")).default : (await import(`@/widgets/footer/locales/${ locale }/footer.json`)).default,
		bookmarks: locale === Locale.UK ? (await import("@/features/bookmarks/locales/uk/bookmarks.json")).default : (await import(`@/features/bookmarks/locales/${ locale }/bookmarks.json`)).default,
		comparison: locale === Locale.UK ? (await import("@/features/comparison/locales/uk/comparison.json")).default : (await import(`@/features/comparison/locales/${ locale }/comparison.json`)).default,
		cart: locale === Locale.UK ? (await import("@/entities/cart/locales/uk/cart.json")).default : (await import(`@/entities/cart/locales/${ locale }/cart.json`)).default,
		catalog: locale === Locale.UK ? (await import("@/entities/catalog/locales/uk/catalog.json")).default : (await import(`@/entities/catalog/locales/${ locale }/catalog.json`)).default,
	};

	return { locale, messages };
});
