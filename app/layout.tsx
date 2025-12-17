import { Viewport } from 'next';
import { ReactNode } from 'react';
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

export default async function RootLayout({ children }: { children: ReactNode; }) {
	return (
		<html lang='uk' suppressHydrationWarning>
		<body className={ fontMontserrat.variable }>
		<StoreProvider>
			{ children }
		</StoreProvider>
		</body>
		</html>
	);
};
