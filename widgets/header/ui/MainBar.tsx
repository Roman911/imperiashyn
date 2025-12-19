'use client';

import { Navbar } from '@heroui/react';
import MainBarLayout from './MainBarLayout';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { useHeaderMenu } from '../model/useHeaderMenu';
import styles from './index.module.scss';
import { twMerge } from 'tailwind-merge';
import type { ConfigSettings } from '@/shared/types/settings';

interface Props {
	settingsData: ConfigSettings;
}

export default function MainBar({ settingsData }: Props) {
	const menu = useHeaderMenu();

	return (
		<Navbar
			shouldHideOnScroll
			maxWidth="2xl"
			isMenuOpen={ menu.isMenuOpen }
			onMenuOpenChange={ menu.setIsMenuOpen }
			className='bg-white border-b relative'
			classNames={ { wrapper: twMerge('grid h-40 md:h-16 items-center justify-normal py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_150px]', styles['container']) } }
		>
			<MainBarLayout settingsData={ settingsData }/>
			<HeaderMobileMenu { ...menu } />
		</Navbar>
	);
}
