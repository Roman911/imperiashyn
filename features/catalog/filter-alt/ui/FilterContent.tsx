import { useTranslations } from 'next-intl';

import { ByCar } from '@/features/catalog-filter-by-car';
import { Section } from '@/shared/types/section';

import { FilterAltProps } from '../model/types';
import { SwitchTabs } from './SwitchTabs';
import { SwitchTabsByParams } from './SwitchTabsByParams';
import { SelectFromTo } from './SelectFromTo';
import { SectionTires } from './SectionTires';
import { SectionDisks } from './SectionDisks';
import { SectionBattery } from './SectionBattery';

export function FilterContent({ filterData, section, car, slug }: FilterAltProps) {
	const t = useTranslations('filters');

	return (
		<div className="filter h-screen lg:h-auto w-[calc(100%-70px)] lg:w-64 mr-6 lg:pt-0 bg-white lg:bg-transparent">
			{ section !== Section.Battery && (
				<SwitchTabs section={ section } car={ car }/>
			) }
			<div className='relative h-[calc(100%-50px)] pb-32 lg:pb-4 px-4 pt-4 bg-white border border-gray-200 overflow-y-auto md:overflow-y-visible flex flex-col gap-3'>
				{ section !== Section.Battery && <SwitchTabsByParams section={ section } car={ car }/> }
				{ car && <ByCar car={ car } section={ Section.Tires } /> }
				{ section === Section.Tires && (
					<SectionTires
						car={ car }
						filterData={ filterData }
						slug={ slug }
					/>
				) }

				{ section === Section.Disks && (
					<SectionDisks
						car={ car }
						filterData={ filterData }
						slug={ slug }
					/>
				) }

				{ section === Section.Battery && (
					<SectionBattery
						slug={ slug }
					/>
				) }

				<SelectFromTo
					name="price"
					idMin="pfrom"
					idMax="pto"
					from={ 200 }
					to={ 10000 }
					title={ `${ t('price range') } (грн)` }
					btnTitle={ t('to apply') }
				/>
			</div>
		</div>
	);
}
