import { ReactNode } from 'react';
// import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { getAliasAll } from "@/entities/alias/api/alias.api";
import { getSettings } from '@/entities/settings/api/settings.api';
import { mapSettings } from '@/entities/settings/model/mapper';

export default async function LocaleLayout(
	{ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }
) {
	const settings = await getSettings();
	const alias = await getAliasAll();
	const settingsData = mapSettings(settings);

	return (
		<>
			<Header alias={ alias.header } settingsData={ settingsData } />
			<main>{ children }</main>

			{/*<Suspense fallback={null}>*/ }
			{/*	<Footer />*/ }
			{/*</Suspense>*/ }
		</>
	);
};
