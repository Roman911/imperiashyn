import { Viewport } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StoreProvider from './StoreProvider';
import { fontMontserrat } from '@/config/fonts';
import '@/app/globals.css';
import '@/app/colors.css';

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default async function RootLayout(
	{ children, params }: { children: ReactNode; params: Promise<{ locale: string }>; }
) {
	const { locale } = await params;
	const messages = await getMessages();

	return (
		<html lang={ locale } suppressHydrationWarning>
		<body className={ fontMontserrat.variable }>
		<StoreProvider>
			<NextIntlClientProvider messages={ messages }>
				{ children }
			</NextIntlClientProvider>
		</StoreProvider>
		</body>
		</html>
	);
};
