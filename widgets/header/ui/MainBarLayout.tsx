import { NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import styles from './index.module.scss';
import { LogoLink } from '@/features/navigation/ui/LogoLink';
import type { ConfigSettings } from '@/shared/types/settings';
import { HeaderSearch } from './HeaderSearch';

interface Props {
	settingsData: ConfigSettings;
}

export default function MainBarLayout({ settingsData }: Props) {
	return (
		<>
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
		</>
	)
}