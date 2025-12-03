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
import { Header } from '@/widgets';
import { getSettings } from '@/app/api/api';

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
	const settings = await getSettings();
	// const alias = await getAliasAll();

	console.log(settings)

	return (<html suppressHydrationWarning lang={ locale }>
	<head />
	<body className={ twMerge(fontMontserrat.variable) }>
	<StoreProvider>
		<NextIntlClientProvider messages={ messages }>
			<Header />
			<main>
				{ children }
			</main>
		</NextIntlClientProvider>
	</StoreProvider>
	</body>
	</html>);
};
