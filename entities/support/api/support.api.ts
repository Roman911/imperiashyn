import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, FORM_HEADERS, formEndpoints } from '@/config/api';

export const supportApi = createApi({
	reducerPath: 'supportApi',
	baseQuery,
	endpoints: build => ({
		createCallback: build.mutation<void, any>({
			query: (data) => ({
				url: formEndpoints.callback,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(data),
				headers: FORM_HEADERS
			}),
		}),
	}),
});

export const {
	useCreateCallbackMutation,
} = supportApi;
