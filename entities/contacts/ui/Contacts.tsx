import Dropdown from './Dropdown';
import { useLanguage } from '@/shared/hooks/useLanguage';
import type { ConfigSettings } from '@/shared/types/settings';
import { CallbackModal } from '@/features/callback';

interface ContactsProps {
	settingsData: ConfigSettings
	isInfoBlock?: boolean
	className?: string
}

export function Contacts({ settingsData }: ContactsProps) {
	const lang = useLanguage();
	const phones = settingsData.locales[lang].phones;

	return (
		<div className='relative flex items-center gap-2'>
			<Dropdown phones={ phones }/>
			<CallbackModal quantity={ 1 } />
		</div>
	);
}
