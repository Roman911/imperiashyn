import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { baseEndpoints } from '@/config/api';
import { BaseDataProps, ManufModels } from '@/models/baseData';

export const baseDataApi = createApi({
	reducerPath: 'baseDataApi',
	baseQuery,
	endpoints: build => ({
		fetchBaseData: build.query<BaseDataProps, void>({
			query: () => baseEndpoints.baseData,
		}),
		fetchManufModels: build.query<ManufModels[], string>({
			query: id => baseEndpoints.manufModels(id),
		}),
	}),
});

export const {
	useFetchBaseDataQuery,
	useFetchManufModelsQuery,
} = baseDataApi;