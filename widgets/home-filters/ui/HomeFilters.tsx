'use client';

import { useState } from 'react';
import { Tab, Tabs } from '@heroui/tabs';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.scss';

import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { DisksFilter, FilterByCar, TiresFilter, } from '@/features/filters';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';

type FilterTab = 'tire' | 'disk' | 'car';

export function HomeFilters() {
	const [ selected, setSelected ] = useState<FilterTab>('tire');
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
					fullWidth
					aria-label="Filters tabs"
					selectedKey={ selected }
					size="lg"
					variant="underlined"
					onSelectionChange={ (key) => setSelected(key as FilterTab) }
				>
					<Tab key="tire" title="tire">
						<TiresFilter filters={ filters }/>
					</Tab>
					<Tab key="disk" title="disk">
						<DisksFilter filters={ filters }/>
					</Tab>
					<Tab key="car" title="car">
						<FilterByCar filters={ filters }/>
					</Tab>
				</Tabs>
			</div>
		</section>
	);
}
