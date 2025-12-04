import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Dropdown from './ui/ContactsDropdown';
import { ConfigSettingsData } from '@/shared/types/settings';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { phonesTransform } from '@/widgets/Contacts/model/phonesTransform';

interface ContactsProps {
	settingsData: ConfigSettingsData
	isInfoBlock?: boolean
	className?: string
}

const Contacts: FC<ContactsProps> = ({ settingsData, isInfoBlock, className }) => {
	const lang = useLanguage();
	const phones = phonesTransform(settingsData[lang]);

	return <div className={ className }>
		<div className={ twMerge('relative', isInfoBlock ? 'mt-6 w-full' : 'mx-auto max-w-max') }>
			<Dropdown phones={ phones } />
		</div>
	</div>
};

export default Contacts;
