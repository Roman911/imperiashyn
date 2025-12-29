import { useTranslations } from 'next-intl';
import { NavbarContent, NavbarItem } from '@heroui/react';

import { Link } from '@/shared/i18n/navigation';
import { MAIN_NAVIGATION } from '@/features/navigation/model/navigation.config';

export function Navigation() {
	const t = useTranslations('navigation');

	return (
		<div className='relative bg-blue-500 hidden lg:block w-full'>
			<div className='container mx-auto max-w-7xl'>
				<NavbarContent className='text-white text-lg font-semibold'>
					{ MAIN_NAVIGATION.map(item => {
						return (
							<NavbarItem
								key={ item.id }
								as={ Link }
								href={ item.href }
								className='py-4 px-8 hover:bg-blue-600 cursor-pointer'
							>
								{ t(item.label) }
							</NavbarItem>
						)
					}) }
				</NavbarContent>
			</div>
		</div>
	)
}
