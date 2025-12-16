import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, deliveryEndpoints } from '@/config/api';

export const deliveryApi = createApi({
	reducerPath: 'deliveryApi',
	baseQuery,
	endpoints: build => ({
		fetchNpAllCity: build.query<any, string>({
			query: name => ({
				url: deliveryEndpoints.novaPoshta.allCity,
				method: API_CONSTANTS.METHODS.POST,
				body: { name },
			}),
		}),

		fetchNpWarehouses: build.query<any, string>({
			query: ref => deliveryEndpoints.novaPoshta.warehouses(ref),
		}),
	}),
});

export const {
	useFetchNpAllCityQuery,
	useFetchNpWarehousesQuery,
} = deliveryApi;
