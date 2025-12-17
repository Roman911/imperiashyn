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
			maxWidth="2xl"
			isMenuOpen={ menu.isMenuOpen }
			onMenuOpenChange={ menu.setIsMenuOpen }
			className={ twMerge(
				'bg-white border-b relative',
				styles.header
			) }
		>
			<MainBarLayout settingsData={ settingsData }/>
			<HeaderMobileMenu { ...menu } />
		</Navbar>
	);
}
