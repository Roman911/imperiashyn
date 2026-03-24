'use client';

import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';

import { FooterTitle } from './FooterTitle';
import { FooterContacts } from './FooterContacts';
import { FooterCatalog } from './FooterCatalog';
import { FooterInfo } from './FooterInfo';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { LanguageSwitcher } from '@/features/i18n';
import * as Icons from '@/shared/ui/icons';

type IconType = 'facebook' | 'instagram';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
	year: number;
}

const social = {
	links: [
		{ link: 'https://www.facebook.com/imperia.tyre.disk.ua/', logo: 'facebook' },
		{ link: 'https://www.instagram.com/imperia_tyre_disk_ua/', logo: 'instagram' },
	],
}

export function Footer({ alias, settingsData, year }: Props) {
	const t = useTranslations('footer');
	const lang = useLanguage();

	const icons: Record<IconType, JSX.Element> = {
		facebook: <Icons.FacebookIcon className='fill-black group-hover:fill-white'/>,
		instagram: <Icons.InstagramIcon className='fill-black group-hover:fill-white'/>,
	};

	return (
		<footer className="bg-black">
			<div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div>
					<p className="text-gray-500 leading-6 text-sm mb-8">
						© {year} {settingsData.locales[lang].owner}
						<br/>
						{ t('all rights reserved') }
					</p>
					<div className='flex gap-x-5 my-6'>
						{ social.links.map((item, index) => {
							return <a
								key={ index }
								target='_blank'
								href={ item.link }
								className='w-9 h-9 rounded-full cursor-pointer bg-white flex items-center justify-center transition group hover:bg-primary'
							>
								{ icons[item.logo as IconType] }
							</a>
						}) }
					</div>
					<LanguageSwitcher />
				</div>

				<div>
					<FooterTitle title={ t('contacts') }/>
					<FooterContacts settings={ settingsData } />
				</div>

				<div>
					<FooterTitle title="Каталог"/>
					<FooterCatalog/>
				</div>

				<div>
					<FooterTitle title={ t('information') }/>
					<FooterInfo alias={ alias }/>
				</div>
			</div>
		</footer>
	);
}
