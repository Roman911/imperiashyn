import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, productEndpoints } from '@/config/api';
import { ProductProps, ProductsProps } from '@/models/product';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery,
	tagTypes: [ 'Product' ],
	endpoints: build => ({
		fetchProducts: build.query<
			ProductsProps,
			{ id: string; start?: number; length?: number }
		>({
			query: ({ id, start = 0, length = 10 }) => ({
				url: productEndpoints.products(id),
				method: API_CONSTANTS.METHODS.POST,
				body: { start, length },
			}),
		}),

		fetchProduct: build.query<ProductProps, string>({
			query: section => productEndpoints.product(section),
			providesTags: [ 'Product' ],
		}),

		createComment: build.mutation<void, any>({
			query: comment => ({
				url: productEndpoints.reviews,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(comment),
			}),
			invalidatesTags: [ 'Product' ],
		}),
	}),
});

export const {
	useFetchProductsQuery,
	useFetchProductQuery,
	useCreateCommentMutation,
} = productApi;
