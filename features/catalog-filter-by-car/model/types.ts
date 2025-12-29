export interface CarFilters {
	brand: number;
	model: number;
	year: number;
	modification: number;
}

export interface CarModelProps {
	label: string
	value: number
}

interface Kits {
	id: number
	model: number
	year: number
	name: string
	pcd: number
	bolt_count:number
	dia: number
	bolt_size: string
	car2_model: {
		id: number
		brand: number
		name: string
		car2_brand: {
			id: number
			name: string
		}
	}
}

export interface KitTyreSize {
	value: number
	kits: Kits
	width: number
	height: number
	diameter: number
	type: number
	axle: number
	axle_group: null
}

export interface KitDiskSize {
	value: number
	kits: Kits
	width: number
	et: number
	diameter: number
	type: number
	axle: number
	axle_group: null
}

export interface Options {
	label: number | string
	value: number | string
}
