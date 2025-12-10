import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import type { ConfigSettingsData } from '@/shared/types/settings';
import { useLanguage } from '@/shared/hooks/useLanguage';
import FooterTitle from '@/widgets/Footer/ui/FooterTitle';
import FooterContacts from '@/widgets/Footer/ui/FooterContacts';

interface FooterProps {
	settingsData: ConfigSettingsData
}

const Footer: FC<FooterProps> = ({ settingsData }) => {
	const t = useTranslations('Footer');
	const lang = useLanguage();

	return (
		<footer className='bg-black'>
			<div className='container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				<div className='md:w-1/4'>
					<p className='text-gray-500 leading-6 text-sm'>
						© { new Date().getFullYear() + ' ' + settingsData[lang].config_owner }.<br/>
						{ t('all rights reserved') }
					</p>
				</div>
				<div className='md:w-1/4 mt-6 md:mt-0 md:pl-12 font-medium'>
					<FooterTitle title={ t('contacts') } />
					<FooterContacts lang={ lang } settingsData={ settingsData } />
				</div>
			</div>
		</footer>
	)
};

export default Footer;
