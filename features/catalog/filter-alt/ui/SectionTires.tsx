import { SectionTiresProps } from '../model/types';
import { Section } from '@/shared/types/section';
import { useTranslations } from 'next-intl';
import { Autocomplete } from '@/features/catalog-filter-autocomplete/ui/Autocomplete';

const section = Section.Tires;

export function SectionTires({ filterData, car, onChange, slug }: SectionTiresProps) {
	const t = useTranslations('filters');

	return (
		<>
			{ car && <>

			</> }
			<Autocomplete
				name='width'
				label={ t('width') }
				checkboxKey='w-'
				slug={ slug }
				section={ section }
				options={ filterData?.tyre_width.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<Autocomplete
				name='height'
				label={ t('height') }
				checkboxKey='h-'
				slug={ slug }
				section={ section }
				options={ filterData?.tyre_height.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<Autocomplete
				name='radius'
				label={ t('diameter') }
				checkboxKey='d-'
				slug={ slug }
				section={ section }
				options={ filterData?.tyre_diameter?.map(item => ({
					value: item.value,
					label: `R${ item.value }`,
					p: item.p
				})) || [] }
			/>
		</>
	);
}
