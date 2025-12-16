'use client';

import { FC } from 'react';
import { Link } from '@/i18n/routing';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import type { AliasAll } from '@/shared/types/alias';

interface TopNavigationProps {
	alias: AliasAll;
}

const TopNavigation: FC<TopNavigationProps> = ({ alias }) => {
	const lang = useLanguage();
	const { handleNavigation } = useNavigationProgress();

	return (
		<nav className="gap-2 lg:gap-x-7 items-center hidden lg:flex">
			{ alias.header.map((item, index) => (
				<Link
					key={ index }
					href={ `/page/${ item.slug }` }
					onClick={ () => handleNavigation(`/page/${ item.slug }`) }
					className="text-xs 2xl:text-sm font-medium uppercase"
				>
					{ item.descriptions[lang].title }
				</Link>
			)) }
		</nav>
	);
};

export default TopNavigation;