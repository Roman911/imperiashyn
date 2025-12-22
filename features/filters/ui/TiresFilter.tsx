import { FiltersBaseData } from '@/entities/filters/model/filters.types';
import { getFilters } from '@/widgets/home-filters/lib/getFilters';
import { Section } from '@/shared/types/section';
import { SelectHomeFiler } from '@/shared/ui/select';
import { useTranslations } from 'next-intl';

interface Props {
	filters?: FiltersBaseData;
}

export function TiresFilter({ filters }: Props) {
	const t = useTranslations('filters');
	const filtersTypes = getFilters({ filters, locale: 'ua', section: Section.Tires });

	const onChange = (name: string, value: number | string | null, section: Section) => {
		console.log(name, value)
	}

	if (!filters) return null;

	return (
		<div>
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
		</div>
	);
}
