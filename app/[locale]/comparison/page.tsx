'use client';

import { useTranslations } from 'next-intl';
import { useAppSelector } from '@/shared/hooks/redux';
import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { NoResult } from '@/shared/ui/no-result';
import { Spinner } from '@heroui/react';
import { useProducts } from '@/features/products/get-products';
import { Tab, Tabs } from '@heroui/tabs';
import { Section } from '@/shared/types/section';

export default function Page() {
	const t = useTranslations('filters');
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);
	const { tires, cargo, disks, battery, isLoading } = useProducts(
		comparisonItems,
		'reducerComparison',
		true
	);

	const path = [
		{
			title: t('comparison'),
			href: '/comparison',
			translations: false
		}
	];

	if(isLoading) return <Spinner />;

	return (
		<Layout size='lg'>
			<Breadcrumbs path={ path } />
			<Title title={ t('comparison') } />
			{comparisonItems.length > 0 ? <section className='comparison mt-4 md:mt-8'>
				<Tabs aria-label="Options" variant='underlined' size='lg'>
					<Tab key={Section.Tires} title={ `${Section.Tires} (${ tires.length })` }>

					</Tab>
					<Tab key={Section.Cargo} title={ `${Section.Cargo} (${ cargo.length })` }>

					</Tab>
					<Tab key={Section.Disks} title={ `${Section.Disks} (${ disks.length })` }>

					</Tab>
					<Tab key={Section.Battery} title={ `${Section.Battery} (${ battery.length })` }>

					</Tab>
				</Tabs>
			</section> : <NoResult description='any products to comparison yet' /> }
		</Layout>
	)
};
