import { useTranslations } from 'next-intl';

import { Link } from '@/features/header-menu-filter/ui/Link';
import { TYPE_CAR } from '../model/navigation.const';

interface Props {
	onClose: (href: string) => void;
}

export function TypeCarFilter({ onClose }: Props) {
	const t = useTranslations('carType');

	return (
		<section className="mt-6 mb-6 grid grid-cols-1 justify-items-start">
			{ TYPE_CAR.map(item => {
				return (
					<Link
						href={ item.href }
						onClose={ onClose }
						vehicleType={ item.icon }
					>
						{ t(item.label) }
					</Link>
				)
			}) }
		</section>
	)
}
