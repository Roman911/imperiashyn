import { useTranslations } from 'next-intl';

import * as LINKS from '../model/constants';
import { Title } from './Title';
import { Link } from './Link';

export function TireFilter() {
	const t = useTranslations('headerMenuFilter');

	return (
		<>
			<div className='flex flex-col items-start'>
				<Title title={ t('by season') } />
				{ LINKS.SEASON.map((item, index) => {
					return <Link
						key={ index }
						href={ item.href }
						img={ item.img }
					>
						{ t(item.label) }
					</Link>
				}) }
			</div>
			<div>
				<Title title={ t('by car type') } />
			</div>
			<div>
				<Title title={ t('by brands') } />
			</div>
			<div>
				<Title title={ t('by diameter') } />
			</div>
		</>
	)
}
