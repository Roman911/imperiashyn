'use client';

import { useTranslations } from 'next-intl';
import { NavbarContent } from '@heroui/react';

import { MAIN_NAVIGATION } from '@/features/navigation/model/navigation.config';
import { Section } from '@/shared/types/section';

import { SECTION_MENU } from '../model/navigation.const';
import { useSectionMenuReset } from '../lib/useSectionMenuReset';
import { SectionMenu } from './SectionMenu';
import { NavigationItem } from './NavigationItem';
import { TireFilter } from '@/features/header-menu-filter';

// import { CarTireFilter } from '@/features/car-filter/ui/CarTireFilter';
// import { CarDiskFilter } from '@/features/car-filter/ui/CarDiskFilter';

export function Navigation() {
	const t = useTranslations('navigation');
	const { triggerReset } = useSectionMenuReset();

	return (
		<div className="relative bg-blue-500 hidden lg:block w-full">
			<div className="container mx-auto max-w-7xl">
				<NavbarContent justify='center' className="text-white text-lg font-semibold">
					{ SECTION_MENU.map(item => (
						<SectionMenu
							key={ item.section }
							label={ t(item.labelKey) }
						>
							{ item.section === Section.Tires && <TireFilter /> }
							{ item.section === Section.Disks && (
								<div>324</div>
								// <CarDiskFilter onClick={ triggerReset }/>
							) }
						</SectionMenu>
					)) }

					{ MAIN_NAVIGATION.map(item => (
						<NavigationItem
							key={ item.id }
							href={ item.href }
							label={ t(item.label) }
						/>
					)) }
				</NavbarContent>
			</div>
		</div>
	);
}
