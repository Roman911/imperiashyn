import { FC } from 'react';
// import TopLine from './ui/HeadeTopLine';
// import HeaderProgress from './ui/HeaderProgress';
import TopBar from '@/widgets/Header/ui/TopBar';
import HeaderMain from '@/widgets/Header/ui/HeaderMain';
import HeaderMenu from '@/widgets/Header/ui/HeaderMenu';
import type { ConfigSettingsData } from '@/shared/types/settings';
import type { AliasAll } from '@/shared/types/alias';

interface HeaderProps {
	alias: AliasAll
	settingsData: ConfigSettingsData
}

const Header: FC<HeaderProps> = ({ alias, settingsData }) => (
	<header>
		{/*<HeaderProgress />*/}
		{/*<TopLine alias={ alias } settingsData={ settingsData }/>*/}
		<TopBar />
		<HeaderMain settingsData={ settingsData } />
		<HeaderMenu />
	</header>
);

export default Header;
