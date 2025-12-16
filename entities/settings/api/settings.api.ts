import { HYDRATE } from 'next-redux-wrapper';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { baseEndpoints } from '@/config/api';
import type { ConfigSettingsApi } from '@/entities/settings/api/types';

export const settingsApi = createApi({
	reducerPath: 'settingsApi',
	baseQuery,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			const payload = action.payload as Record<string, unknown>;
			return payload[reducerPath] as any;
		}
	},
	endpoints: build => ({
		fetchSettings: build.query<ConfigSettingsApi, void>({
			query: () => baseEndpoints.settings,
		}),
	}),
});
