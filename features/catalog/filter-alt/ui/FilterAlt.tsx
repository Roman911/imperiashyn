import { useTranslations } from 'next-intl';
import { FilterAltProps } from '../model/types';
// import { useFilterMenu } from '../model/use-filter-menu';
import { FilterAltDesktop } from './FilterAltDesktop';
// import { FilterAltMobile } from './FilterAltMobile';
// import { baseDataApi } from '@/entities/base-data/api/baseData.api';
// import { mapBaseData } from '@/entities/filters/lib/mapBaseData';

export function FilterAlt(props: FilterAltProps) {
	const t = useTranslations('Filters');
	// const { isOpen, setOpen } = useFilterMenu();

	return (
		<div className="w-72">
			{/*<FilterBtn*/}
			{/*	title={ t('filters') }*/}
			{/*	openFilter={ setOpen }*/}
			{/*/>*/}

			<div className="hidden lg:block">
				<FilterAltDesktop { ...props } />
			</div>

			{/*<FilterAltMobile*/}
			{/*	isOpen={ isOpen }*/}
			{/*	onClose={ () => setOpen(false) }*/}
			{/*	{ ...props }*/}
			{/*/>*/}
		</div>
	);
}
