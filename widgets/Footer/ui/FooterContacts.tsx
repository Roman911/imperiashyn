import { FC } from 'react';
import Image from 'next/image';
import { phonesTransform } from '@/widgets/Contacts/model/phonesTransform';
import type { ConfigSettingsData } from '@/shared/types/settings';
import type { Locale, LocaleCode } from '@/shared/types/locale';

interface FooterContactsProps {
	lang: LocaleCode.UA | Locale.RU;
	settingsData: ConfigSettingsData;
}

const FooterContacts: FC<FooterContactsProps> = ({ lang, settingsData }) => {
	const phones = phonesTransform(settingsData[lang]);

	return (
		<div>
			{phones.map((item, index) => {
				if(item.phone) {
					return <div key={index} className='flex items-center mt-5'>
						<Image width={ 20 } height={ 20 } src={ `/icons/${ item.logo }-logo.svg` } alt=''/>
						<a href={`tel:${item.url}`} className='ml-2.5 text-sm text-white'>
							{ item.phone }
						</a>
					</div>
				}
			})}
			<div className='flex items-center mt-5'>
				{/*<EmailIcon className='fill-white'/>*/}
				{/*<a href={ `mailto:${settings[lang].config_email}` } className='ml-2.5 text-sm text-white'>*/}
				{/*	{ settings[lang].config_email }*/}
				{/*</a>*/}
			</div>
			<div className='text-white mt-5'>
				{/*{settings[lang].config_address && <HtmlContent htmlString={settings[lang].config_address}/>}*/}
				{/*{settings[lang].config_open && <HtmlContent htmlString={settings[lang].config_open}/>}*/}
			</div>
		</div>
	)
};

export default FooterContacts;
