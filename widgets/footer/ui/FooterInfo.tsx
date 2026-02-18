import { useTranslations } from 'next-intl';

import { Link as LinkI18n } from '@/shared/i18n/navigation';
import { Link } from '@/shared/ui/link';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import { useLanguage } from '@/shared/hooks/useLanguage';

interface Props {
	alias: AliasItem[];
}

export function FooterInfo({ alias }: Props) {
	const lang = useLanguage();
	const t = useTranslations('navigation');

	return (
		<div className="flex flex-col gap-5 mt-4">
			<Link
				as={ LinkI18n }
				href={ `/page/contacts` }
				className="text-white hover:text-primary"
			>
				{ t('contacts') }
			</Link>
			{ alias.map((item) => (
				<Link
					key={ item.slug }
					as={ LinkI18n }
					href={ `/page/${ item.slug }` }
					className="text-white hover:text-primary"
				>
					{ item.descriptions[lang].title }
				</Link>
			)) }
		</div>
	);
}
