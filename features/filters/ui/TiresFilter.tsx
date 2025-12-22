import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiltersBaseData } from '@/entities/filters/model/filters.types';
import { getFilters } from '@/widgets/home-filters/lib/getFilters';
import { Section } from '@/shared/types/section';
import { SelectHomeFiler } from '@/shared/ui/select';
import { Button } from '@/shared/ui/button';

interface Props {
	filters?: FiltersBaseData;
}

export function TiresFilter({ filters }: Props) {
	const t = useTranslations('filters');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const filtersTypes = getFilters({ filters, locale: 'ua', section: Section.Tires });

	const onChange = (name: string, value: number | string | null, section: Section) => {
		console.log(name, value)
	}

	if (!filters) return null;

	return (
		<div className='grid gap-2.5 md:mt-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
			{ filtersTypes.map(item => {
				return <SelectHomeFiler
					key={ item.name }
					name={ item.name }
					label={ t(item.label) }
					options={ item.options }
					onChange={ onChange }
					section={ Section.Tires }
				/>
			}) }
			<Button
				color='secondary'
				isLoading={ isLoading }
				size='lg'
				radius='sm'
				onPress={ () => setIsLoading(true) }
				className='w-full font-semibold h-16'
			>
				{ t('choose') }
			</Button>
		</div>
	);
}
