'use client'

import { FC } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setProgress } from '@/widgets/header/store/progressSlice';
import { AliasAll } from '@/entities/alias/model/alias.types';
// import type { AliasAll } from '@/shared/types/alias';

interface HeaderTopLineMenuProps {
	alias: AliasAll;
}

const HeaderTopLineMenu: FC<HeaderTopLineMenuProps> = ({ alias }) => {
	const lang = useLanguage();
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const handleClick = (href: string) => {
		if(pathname !== href) dispatch(setProgress(true));
	}

	return (
		<nav className='gap-2 lg:gap-x-7 items-center hidden lg:flex'>
			{ alias.header.map((item, index) => {
				return <Link
					key={ index }
					href={ `/app/%5Blocale%5D/test/page.tsx/${ item.slug }` }
					onClick={ () => handleClick(`/page/${item.slug}`) }
					className='text-xs 2xl:text-sm font-medium uppercase'>
					{ item.descriptions[lang].title }
				</Link>
			}) }
		</nav>
	)
};

export default HeaderTopLineMenu;
