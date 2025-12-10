import { Viewport } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { twMerge } from 'tailwind-merge';
import StoreProvider from '@/app/StoreProvider';
import '../colors.css';
import '../globals.css';
import { fontMontserrat } from "@/config/fonts";
import { Locale } from "@/shared/types/locale";
import { Footer, Header } from '@/widgets';
import { getAliasAll, getSettings } from '@/app/api/api';

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default async function RootLayout({
																					 children, params,
																				 }: Readonly<{
	children: ReactNode; params: Promise<{ locale: Locale }>;
}>) {
	const { locale } = await params;
	const messages = await getMessages();
	const settingsData = await getSettings();
	const alias = await getAliasAll();

	return (<html suppressHydrationWarning lang={ locale }>
	<head />
	<body className={ twMerge(fontMontserrat.variable) }>
	<StoreProvider>
		<NextIntlClientProvider messages={ messages }>
			<Header settingsData={ settingsData } alias={ alias } />
			<main>
				{ children }
			</main>
			<Footer settingsData={ settingsData } />
		</NextIntlClientProvider>
	</StoreProvider>
	</body>
	</html>);
};
