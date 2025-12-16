import TopBar from '@/widgets/Header/ui/TopBar';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettingsApi } from '@/entities/settings/api/types';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettingsApi;
}

export default function Header({ alias, settingsData }: Props) {
	return (
		<header>
			{/*<HeaderProgress />*/}
			<TopBar alias={ alias } settingsData={ settingsData } />
			{/*<HeaderMain settingsData={ settingsData } />*/}
			{/*<HeaderMenu />*/}
		</header>
	);
};
