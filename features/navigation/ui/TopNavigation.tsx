'use client';

import { useLanguage } from '@/shared/hooks/useLanguage';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import { Link } from "@/shared/i18n/navigation";
import type { AliasItem } from '@/entities/alias/model/alias.types';

export default function TopNavigation({ alias }: { alias: AliasItem[] }) {
	const lang = useLanguage();
	const { handleNavigation } = useNavigationProgress();

	return (
		<nav className="gap-2 lg:gap-x-7 items-center hidden lg:flex">
			{ alias.map((item, index) => (
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
