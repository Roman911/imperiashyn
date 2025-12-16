import { HYDRATE } from 'next-redux-wrapper';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { baseEndpoints } from '@/config/api';
import type { AliasItem, AliasAll } from '@/shared/types/alias';

export const aliasApi = createApi({
	reducerPath: 'aliasApi',
	baseQuery,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			const payload = action.payload as Record<string, unknown>;
			return payload[reducerPath] as any;
		}
	},
	endpoints: build => ({
		fetchAlias: build.query<AliasItem, string>({
			query: (id) => baseEndpoints.statiAlias.byId(id),
		}),
		fetchAliasAll: build.query<AliasAll, void>({
			query: () => baseEndpoints.statiAlias.all,
		}),
	}),
});
