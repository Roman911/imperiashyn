'use client';

import { useState } from 'react';
import { Tab, Tabs } from '@heroui/tabs';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.scss';

import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { DisksFilter, FilterByCar, TiresFilter, } from '@/features/filters';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';
import { useTranslations } from 'next-intl';
import { Section } from '@/shared/types/section';

export function HomeFilters() {
	const t = useTranslations('filters');
	const [ selected, setSelected ] = useState<Section>(Section.Tires);
	const { data } = baseDataApi.useFetchBaseDataQuery();
	const filters = data ? mapBaseData(data) : undefined;

	return (
		<section
			className={ twMerge(
				'w-full md:p-0 h-[600] md:h-[500]',
				styles['home-filter'],
			) }
		>
			<div className="container mx-auto py-6 lg:py-16 xl:py-24 px-4">
				<Tabs
					aria-label="Filters tabs"
					selectedKey={ selected }
					size="lg"
					variant="underlined"
					color="secondary"
					onSelectionChange={ (key) => setSelected(key as Section) }
					className='mt-2 md:mt-11 mb-8 flex justify-center'
					classNames={{
						tabList: "gap-6 relative rounded-none p-0 border-b border-divider border-gray-200/20",
						tab: 'text-base xl:text-3xl uppercase font-bold px-6 py-4 w-full',
						cursor: "w-full",
						tabContent: 'text-gray-200/80'
				}}
				>
					<Tab key={ Section.Tires } title={ t(Section.Tires) }>
						<TiresFilter filters={ filters }/>
					</Tab>
					<Tab key={ Section.Disks } title={ t(Section.Disks) }>
						<DisksFilter filters={ filters }/>
					</Tab>
					<Tab key={ Section.Car } title={ t('by car') }>
						<FilterByCar filters={ filters }/>
					</Tab>
				</Tabs>
			</div>
		</section>
	);
}
