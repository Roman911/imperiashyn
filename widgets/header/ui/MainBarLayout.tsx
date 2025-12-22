import { twMerge } from 'tailwind-merge';
import { NavbarBrand, NavbarContent } from '@heroui/react';
import styles from './index.module.scss';
import { LogoLink } from '@/features/navigation/ui/LogoLink';
import type { ConfigSettings } from '@/shared/types/settings';
import { HeaderSearch } from './HeaderSearch';

interface Props {
	settingsData: ConfigSettings;
}

export default function MainBarLayout({ settingsData }: Props) {
	return (
		<div className={twMerge('container grid h-40 md:h-16 items-center justify-normal py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_150px]', styles['container']) }>
			<NavbarContent className={ styles.logo }>
				<NavbarBrand>
					<LogoLink />
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className={ styles.search }>
				<HeaderSearch />
			</NavbarContent>
			<NavbarContent className={ styles.search }>
				123
			</NavbarContent>
		</div>
	)
}