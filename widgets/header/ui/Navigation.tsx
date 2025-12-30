'use client';

import { useTranslations } from 'next-intl';
import {
	NavbarContent,
	NavbarItem
} from '@heroui/react';

import { Link } from '@/shared/i18n/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import { MAIN_NAVIGATION } from '@/features/navigation/model/navigation.config';

export function Navigation() {
	const t = useTranslations('navigation');
	const { handleNavigation } = useNavigationProgress();

	return (
		<div className='relative bg-blue-500 hidden lg:block w-full'>
			<div className='container mx-auto max-w-7xl'>
				<NavbarContent className='text-white text-lg font-semibold'>
					<NavbarItem>
						{ t('cartires') }
					</NavbarItem>
					{ MAIN_NAVIGATION.map(item => {
						return (
							<NavbarItem
								key={ item.id }
								as={ Link }
								href={ item.href }
								onClick={ () => handleNavigation(item.href) }
								className='px-6 h-12 min-w-24 hover:bg-blue-600 cursor-pointer inline-flex items-center justify-center'
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
