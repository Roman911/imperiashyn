import { FC } from 'react';
import Contacts from '@/widgets/Contacts';
import type { ConfigSettingsData } from '@/shared/types/settings';
import type { AliasAll } from '@/shared/types/alias';
import HeaderTopLineMenu from '@/widgets/Header/ui/HeaderTopLineMenu';
import LanguageChanger from '@/widgets/Header/ui/HeaderLanguageChanger';

interface TopLineProps {
	alias: AliasAll;
	settingsData: ConfigSettingsData;
}

const TopLine: FC<TopLineProps> = ({ alias, settingsData }) => (
	<div className='bg-black text-white'>
		<div className='container mx-auto flex justify-between px-4'>
			<Contacts settingsData={ settingsData } />
			<HeaderTopLineMenu alias={ alias } />
			<LanguageChanger />
		</div>
	</div>
);

export default TopLine;
