import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@/entities/products/api/product.api';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { deliveryApi } from '@/entities/delivery/api/delivery.api';
import { orderApi } from '@/entities/order/api/order.api';
import { supportApi } from '@/entities/support/api/support.api';
import { autoDataApi } from '@/features/catalog-filter-by-car/api/auto-data.api';

import progressReducer from '@/features/progress/model/progress.slice';
import bookmarksReducer from '@/features/bookmarks/toggle/lib/storage';
import comparisonReducer from '@/features/comparison/toggle/lib/storage';
import cartReducer from '@/entities/cart/model/cart.slice';
import filterReducer from '@/features/catalog/filter-alt/model/filter.slice';

export const createStore = () =>
	configureStore({
		reducer: {
			[productApi.reducerPath]: productApi.reducer,
			[baseDataApi.reducerPath]: baseDataApi.reducer,
			[deliveryApi.reducerPath]: deliveryApi.reducer,
			[orderApi.reducerPath]: orderApi.reducer,
			[supportApi.reducerPath]: supportApi.reducer,
			[autoDataApi.reducerPath]: autoDataApi.reducer,
			bookmarksReducer,
			comparisonReducer,
			progressReducer,
			cartReducer,
			filterReducer,
		},
		middleware: getDefault =>
			getDefault().concat(
				autoDataApi.middleware,
				productApi.middleware,
				baseDataApi.middleware,
				deliveryApi.middleware,
				orderApi.middleware,
				supportApi.middleware,
			),
	});

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
