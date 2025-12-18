'use client';

import { NavbarMenu, NavbarMenuItem } from '@heroui/react';
// import { useTranslations } from 'next-intl';
// import { Link } from '@/shared/i18n/navigation';
// import { CarTireFilter } from '@/features/tires-filter';
// import { CarDiskFilter } from '@/features/disks-filter';

interface Props {
	activeFilter: false | 'tires' | 'disks';
	toggleFilter: (v: 'tires' | 'disks') => void;
	closeAll: () => void;
}

export function HeaderMobileMenu({
																	 activeFilter,
																	 toggleFilter,
																	 closeAll,
																 }: Props) {
	// const t = useTranslations('header');

	return (
		<NavbarMenu>
			<NavbarMenuItem>
				<button onClick={() => toggleFilter('tires')}>
					123
					{/*{t('cartires')}*/}
				</button>

				{/*{activeFilter === 'tires' && (*/}
				{/*	<CarTireFilter onClick={closeAll} />*/}
				{/*)}*/}
			</NavbarMenuItem>

			<NavbarMenuItem>
				<button onClick={() => toggleFilter('disks')}>
					123
					{/*{t('cardiscs')}*/}
				</button>

				{/*{activeFilter === 'disks' && (*/}
				{/*	<CarDiskFilter onClick={closeAll} />*/}
				{/*)}*/}
			</NavbarMenuItem>
		</NavbarMenu>
	);
}
