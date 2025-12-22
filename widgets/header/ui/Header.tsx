'use client'

import TopBar from '@/widgets/header/ui/TopBar';
import MainBar from '@/widgets/header/ui/MainBar';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';
import { useHeaderMenu } from '@/widgets/header/model/useHeaderMenu';
import { Navbar } from '@heroui/react';
import { twMerge } from 'tailwind-merge';
import styles from '@/widgets/header/ui/index.module.scss';
import MainBarLayout from '@/widgets/header/ui/MainBarLayout';
import { HeaderMobileMenu } from '@/widgets/header/ui/HeaderMobileMenu';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
}

export function Header({ alias, settingsData }: Props) {
	const menu = useHeaderMenu();

	return (
		<Navbar
			maxWidth='full'
			shouldHideOnScroll
			isMenuOpen={ menu.isMenuOpen }
			onMenuOpenChange={ menu.setIsMenuOpen }
			classNames={{ wrapper: 'p-0 flex-col gap-0 h-32' }}
		>
			<TopBar alias={ alias } settingsData={ settingsData } />
			<MainBarLayout settingsData={ settingsData } />
			{/*<HeaderMobileMenu { ...menu } />*/}
			<HeaderMobileMenu { ...menu } />
		</Navbar>
	);

	// return (
	// 	<header>
	// 		<TopBar alias={ alias } settingsData={ settingsData } />
	// 		<MainBar settingsData={ settingsData } />
	// 		{/*<HeaderMenu />*/}
	// 	</header>
	// );
}
