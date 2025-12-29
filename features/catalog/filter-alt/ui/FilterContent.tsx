import { useTranslations } from 'next-intl';

import { FilterAltProps } from '../model/types';
import { Section } from '@/shared/types/section';
import { SwitchTabs } from './SwitchTabs';
import { SectionTires } from './SectionTires';
import { SwitchTabsByParams } from './SwitchTabsByParams';
import { ByCar } from '@/features/catalog-filter-by-car';

export function FilterContent({ filterData, section, car, slug }: FilterAltProps) {
	const t = useTranslations('Filters');

	return (
		<div className="filter h-screen lg:h-auto w-[calc(100%-70px)] lg:w-64 mr-6 lg:pt-0 bg-white lg:bg-transparent">
			{ section !== Section.Battery && (
				<SwitchTabs section={ section } car={ car }/>
			) }
			<div className='relative h-[calc(100%-50px)] pb-32 lg:pb-4 px-4 pt-4 bg-white border border-gray-200 overflow-y-auto md:overflow-y-visible flex flex-col gap-3'>
				<SwitchTabsByParams section={ section } car={ car } />
				{ car && <ByCar car={ car } section={ Section.Tires } /> }
				{ section === Section.Tires && (
					<SectionTires
						car={ car }
						filterData={ filterData }
						slug={ slug }
					/>
				) }
			</div>

			{/*{ section === Section.Disks && (*/}
			{/*	<SectionDisks*/}
			{/*		filterData={ filterData }*/}
			{/*		onChange={ (id, _, value) =>*/}
			{/*			updateParamInUrl(id, value)*/}
			{/*		}*/}
			{/*	/>*/}
			{/*) }*/}

			{/*{ section === Section.Battery && (*/}
			{/*	<SectionBattery*/}
			{/*		onChange={ (id, _, value) =>*/}
			{/*			updateParamInUrl(id, value)*/}
			{/*		}*/}
			{/*	/>*/}
			{/*) }*/}

			{/*<SelectFromTo*/}
			{/*	name="price"*/}
			{/*	idMin="pfrom"*/}
			{/*	idMax="pto"*/}
			{/*	from={ 200 }*/}
			{/*	to={ 10000 }*/}
			{/*	title={ `${ t('price range') } (грн)` }*/}
			{/*	btnTitle={ t('to apply') }*/}
			{/*/>*/}
		</div>
	);
}
