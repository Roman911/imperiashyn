import { combineReducers, configureStore } from '@reduxjs/toolkit';
import progressReducer from '@/widgets/Header/store/progressSlice';
import searchReducer from '@/widgets/Header/store/searchSlice';

import { baseDataAPI } from '@/services/baseDataService';

const rootReducer = combineReducers({
	progressReducer,
	searchReducer,
	[baseDataAPI.reducerPath]: baseDataAPI.reducer
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseDataAPI.middleware),
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
