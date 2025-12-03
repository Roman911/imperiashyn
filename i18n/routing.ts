import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { Locale } from '@/shared/types/locale';

export const routing = defineRouting({
	locales: [ Locale.UK, Locale.RU ],
	defaultLocale: Locale.UK,
	localeDetection: false,
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createNavigation(routing);