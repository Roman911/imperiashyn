'use client';

import { useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { SelectHomeFiler } from '@/shared/ui/select';
import { Button } from '@/shared/ui/button';
import { getFilters } from '@/widgets/home-filters/lib/getFilters';

import { useFilters } from '../model/useFilters';
import { TiresFiltersProps } from '../model/types';

export function TiresFilters({ locale, filters }: TiresFiltersProps) {
	const t = useTranslations('filters');
	const { onChange, onSubmit, isLoading } = useFilters(Section.Tires);

	if(!filters) return null;

	const filtersTypes = getFilters({
		filters,
		locale,
		section: Section.Tires,
	});

	return (
		<div className="grid gap-2.5 md:mt-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
			{ filtersTypes.map(item => (
				<SelectHomeFiler
					key={ item.name }
					name={ item.name }
					label={ t(item.label) }
					options={ item.options }
					onChange={ onChange }
					section={ Section.Tires }
				/>
			)) }

			<Button
				color="secondary"
				isLoading={ isLoading }
				size="lg"
				radius="sm"
				onPress={ onSubmit }
				className="w-full font-semibold h-16"
			>
				{ t('choose') }
			</Button>
		</div>
	);
}
