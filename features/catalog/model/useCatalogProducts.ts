'use client';

import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { getStart, getTotalPages } from './pagination';
import { productApi } from '@/entities/products/api/product.api';

interface Params {
	searchParams: string;
	pageFrom?: number | null;
	pageItem: number;
}

export function useCatalogProducts({ searchParams, pageFrom, pageItem }: Params) {
	const [ offset, setOffset ] = useState(1);
	const currentPage = pageFrom ?? 1;

	const start = getStart(currentPage, pageItem);

	const { data, isLoading, isFetching } = productApi.useFetchProductsQuery({
		id: searchParams,
		start,
		length: pageItem * offset,
	});

	const totalCount = data?.data?.total_count ?? 0;
	const totalPages = useMemo(
		() => getTotalPages(totalCount, pageItem),
		[ totalCount, pageItem ],
	);

	const canShowMore = offset + currentPage <= totalPages;

	const { ref, inView } = useInView({
		threshold: 1,
		rootMargin: '200px',
	});

	return {
		products: data?.data,
		isLoading: isLoading,
		isFetching: isFetching,
		offset,
		setOffset,
		totalPages,
		canShowMore,
		inView,
		ref,
		currentPage,
	};
}
