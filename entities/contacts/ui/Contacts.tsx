import { useLanguage } from '@/shared/hooks/useLanguage';
import Dropdown from './Dropdown';
import type { ConfigSettings } from '@/shared/types/settings';

interface ContactsProps {
	settingsData: ConfigSettings
	isInfoBlock?: boolean
	className?: string
}

export default function Contacts({ settingsData }: ContactsProps) {
	const lang = useLanguage();
	const phones = settingsData.locales[lang].phones;

	return (
		<div className='relative mx-auto max-w-max'>
			<Dropdown phones={ phones }/>
		</div>
	);
};
