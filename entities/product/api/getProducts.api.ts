import { apiFetch } from '@/shared/api/fetcher';
import { ApiResponse } from '@/shared/api/types';
import { Product } from '../model';
import { API_CONSTANTS, productEndpoints } from '@/config/api';

export interface ProductsResponse {
	total_count: number;
	products: Product[];
}

export const getProductsApi = (params: {
	id: string;
	start?: number;
	length?: number;
}) =>
	apiFetch<ApiResponse<ProductsResponse>>(
		productEndpoints.products(params.id),
		{
			method: API_CONSTANTS.METHODS.POST,
			body: JSON.stringify({
				start: params.start,
				length: params.length,
			}),
		},
	);
