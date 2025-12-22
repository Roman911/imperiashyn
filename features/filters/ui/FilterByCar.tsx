import { FiltersBaseData } from '@/entities/filters/model/filters.types';

interface Props {
	filters?: FiltersBaseData;
}

export function FilterByCar({ filters }: Props) {
	if (!filters) return null;
	return <div>{/* UI */}</div>;
}
