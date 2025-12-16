import TopNavigation from '@/features/navigation/ui/TopNavigation';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettingsApi } from '@/entities/settings/api/types';
import Contacts from '@/entities/contacts';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettingsApi;
}

export default function TopBar({ alias, settingsData }: Props) {
	return (
		<div className='bg-black text-white'>
			<Contacts />
			<TopNavigation alias={ alias } />
		</div>
	)
};
