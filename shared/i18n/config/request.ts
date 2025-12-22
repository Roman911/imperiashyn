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
		select: locale === Locale.UK ? (await import("../locales/uk/select.json")).default : (await import(`../locales/${ locale }/select.json`)).default,
		filters: locale === Locale.UK ? (await import("@/entities/filters/locales/uk/filters.json")).default : (await import(`@/entities/filters/locales/${ locale }/filters.json`)).default,
		footer: locale === Locale.UK ? (await import("@/widgets/footer/locales/uk/footer.json")).default : (await import(`@/widgets/footer/locales/${ locale }/footer.json`)).default,
	};

	return { locale, messages };
});
