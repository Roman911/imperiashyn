import { ReactNode, Suspense } from 'react';
// import { Footer } from '@/widgets/Footer';
import Header from '@/widgets/Header/ui/Header';

export default function LocaleLayout({ children, }: { children: ReactNode; }) {
	return (
		<>
			<Suspense fallback={null}>
				<Header />
			</Suspense>

			<main>{children}</main>

			{/*<Suspense fallback={null}>*/}
			{/*	<Footer />*/}
			{/*</Suspense>*/}
		</>
	);
};
