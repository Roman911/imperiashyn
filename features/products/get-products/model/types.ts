import { ProductApi } from '@/entities/products/api/types';

export type GroupedIds = Record<'tires' | 'cargo' | 'disks' | 'battery', number[]>;

export type GroupedItems = Record<
	'tires' | 'cargo' | 'disks' | 'battery',
	ProductApi[]
>;

export type ProductsReducer =
	| 'reducerCart'
	| 'reducerBookmarks'
	| 'reducerComparison'
	| 'recentlyViewed';
