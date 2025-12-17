import TopBar from '@/widgets/header/ui/TopBar';
import MainBar from '@/widgets/header/ui/MainBar';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
}

export default function Header({ alias, settingsData }: Props) {
	return (
		<header>
			<TopBar alias={ alias } settingsData={ settingsData } />
			<MainBar settingsData={ settingsData } />
			{/*<HeaderMain settingsData={ settingsData } />*/}
			{/*<HeaderMenu />*/}
		</header>
	);
};
