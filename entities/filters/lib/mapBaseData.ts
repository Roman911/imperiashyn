import { BaseDataApi } from '../api/filters.api.types';
import { FiltersBaseData } from '../model/filters.types';

export function mapBaseData(api: BaseDataApi): FiltersBaseData {
	const tyreSeasonArray = Array.isArray(api.tyre_season)
		? api.tyre_season
		: Object.values(api.tyre_season ?? {});

	return {
		auto: api.auto,

		brand: api.brand.map(b => ({
			label: b.label,
			value: b.value,
			sortOrder: b.sort_order,
		})),

		cities: api.citys.map(c => ({
			label: c.label,
			value: c.value,
			labelRu: c.label_ru,
		})),

		tyreDiameter: api.tyre_diameter.map(d => ({
			number: d.numeric,
			value: d.value,
			p: d.p,
		})),

		tyreHeight: api.tyre_height.map(h => ({
			number: h.numeric,
			value: h.value,
			p: h.p,
		})),

		tyreWidth: api.tyre_width.map(w => ({
			number: w.numeric,
			value: w.value,
			p: w.p,
		})),

		tyreSeason: tyreSeasonArray.map(s => ({
			value: s.value,
			name: s.name,
			nameUa: s.name_ua,
			nameKey: s.name_key,
		})),
	};
}
