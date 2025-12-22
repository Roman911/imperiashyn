import { ReactNode } from 'react';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from '@/widgets/header';
import { getAliasAll } from "@/entities/alias/api/alias.api";
import { getSettings } from '@/entities/settings/api/settings.api';
import { mapSettings } from '@/entities/settings/model/mapper';
import { ProgressBar } from '@/widgets/progress';
import { Footer } from '@/widgets/footer';

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	const messages = await getMessages();
	const settings = await getSettings();
	const alias = await getAliasAll();
	const settingsData = mapSettings(settings);
	const year = new Date().getFullYear();

	return (
		<NextIntlClientProvider messages={ messages }>
			<ProgressBar />
			<Header alias={ alias.header } settingsData={ settingsData } />
			<main>
				{ children }
			</main>
			<Footer
				alias={ alias.header }
				settingsData={ settingsData }
				year={ year }
			/>
		</NextIntlClientProvider>
	);
};
