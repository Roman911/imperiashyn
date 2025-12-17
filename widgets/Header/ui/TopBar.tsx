import { TopNavigation } from '@/features/navigation/';
import { Contacts } from '@/entities/contacts';
import { LanguageSwitcher } from '@/features/i18n';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';
import { useTranslations, Locale, useLocale } from 'next-intl';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
}

export default function TopBar({ alias, settingsData }: Props) {
	const t = useTranslations("common");

	const lang = useLocale();

	console.log(lang);

	return (
		<div className='bg-black text-white'>
			<div className='container mx-auto flex justify-between px-4'>
				<Contacts settingsData={ settingsData } />
				<TopNavigation alias={ alias } />
				<LanguageSwitcher />
				<h1>
					{t("send")}
				</h1>
			</div>
		</div>
	)
};
