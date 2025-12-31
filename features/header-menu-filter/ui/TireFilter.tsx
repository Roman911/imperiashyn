import { useTranslations } from 'next-intl';

import { Title } from './Title';
import { Link } from './Link';
import * as LINKS from '../model/constants';

interface Props {
	onClose: (href: string) => void;
}

export function TireFilter({ onClose }: Props) {
	const t = useTranslations('headerMenuFilter');

	return (
		<>
			<div>
				<Title title={ t('by season') } />
				<div className='mt-6 mb-6 grid grid-cols-1 justify-items-start'>
					{ LINKS.SEASON.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
							img={ item.img }
							className={ item.className }
						>
							{ t(item.label) }
						</Link>
					}) }
				</div>
			</div>
			<div>
				<Title title={ t('by car type') } />

			</div>
			<div>
				<Title title={ t('by brands') } />
				<div className='mt-6 mb-6 grid grid-cols-2 gap-x-2 justify-items-start'>
					{ LINKS.BRANDS.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
						>
							{ item.label }
						</Link>
					}) }
				</div>

			</div>
			<div>
				<Title title={ t('by diameter') } />
				<div className='mt-6 mb-6 grid grid-cols-4 gap-2 justify-items-start'>
					{ LINKS.DIAMETER.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
							variant='bordered'
						>
							{ item.label }
						</Link>
					}) }
				</div>
			</div>
		</>
	)
}
