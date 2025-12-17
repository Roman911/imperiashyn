import { TopNavigation } from '@/features/navigation/';
import { Contacts } from '@/entities/contacts';
import { LanguageSwitcher } from '@/features/i18n';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
}

export default function TopBar({ alias, settingsData }: Props) {
	return (
		<div className='bg-black text-white'>
			<div className='container mx-auto flex justify-between py-1 px-4'>
				<Contacts settingsData={ settingsData } />
				<TopNavigation alias={ alias } />
				<LanguageSwitcher />
			</div>
		</div>
	)
};
