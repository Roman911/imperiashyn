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
		// banner: (await import("@/widgets/banner/locales/uk.json")).default,
		// callback: (await import("@/features/callback/locales/uk.json")).default,
		// car: (await import("@/entities/car/locales/uk.json")).default,
	};

	// const messages =
	// 	locale === Locale.UK
	// 		? (await import("../../../locales/uk.json")).default
	// 		: (await import(`../../../locales/${ locale }.json`)).default;

	return { locale, messages };
});
