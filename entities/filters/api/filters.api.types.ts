export interface ItemApi {
	numeric: number;
	value: string;
	p?: string;
}

export interface SeasonApi {
	name: string;
	name_key: string;
	name_ua: string;
	value: number;
}

export interface CityApi {
	label: string;
	label_ru: string;
	value: string;
}

export interface BaseDataApi {
	auto: { label: string; value: number }[];
	brand: { label: string; sort_order: string; value: number }[];
	citys: CityApi[];
	tyre_diameter: ItemApi[];
	tyre_height: ItemApi[];
	tyre_width: ItemApi[];
	tyre_season: Record<string, SeasonApi>
}
