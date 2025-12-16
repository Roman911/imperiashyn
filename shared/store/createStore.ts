import { configureStore } from '@reduxjs/toolkit';
import { aliasApi } from '@/entities/alias/api/alias.api';
import { settingsApi } from '@/entities/settings/api/settings.api';
import { productApi } from '@/entities/product/api/product.api';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { deliveryApi } from '@/entities/delivery/api/delivery.api';
import { orderApi } from '@/entities/order/api/order.api';

export const createStore = () =>
	configureStore({
		reducer: {
			[aliasApi.reducerPath]: aliasApi.reducer,
			[settingsApi.reducerPath]: settingsApi.reducer,
			[productApi.reducerPath]: productApi.reducer,
			[baseDataApi.reducerPath]: baseDataApi.reducer,
			[deliveryApi.reducerPath]: deliveryApi.reducer,
			[orderApi.reducerPath]: orderApi.reducer,
		},
		middleware: getDefault =>
			getDefault().concat(
				aliasApi.middleware,
				settingsApi.middleware,
				productApi.middleware,
				baseDataApi.middleware,
				deliveryApi.middleware,
				orderApi.middleware
			),
	});

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
