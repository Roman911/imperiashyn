'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from '@/shared/i18n/navigation';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { productApi } from '@/entities/products/api/product.api';
import { useSearchClose } from './useSearchClose';
import { DEBOUNCE_DELAY, MIN_SEARCH_LENGTH } from './constants';

export function useSearch() {
	const router = useRouter();
	const [value, setValue] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);
	const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);
	const { data } = productApi.useFetchProductsQuery(
		{ id: `?name=${debouncedValue}` },
		{ skip: debouncedValue.length < MIN_SEARCH_LENGTH },
	);

	const clear = () => setValue('');

	useSearchClose({
		isOpen: value.length >= MIN_SEARCH_LENGTH,
		dropdownRef,
		onClose: clear,
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		clear();
		router.push(`/search?name=${debouncedValue}`);
	};

	return {
		value,
		products: data?.data.products,
		totalCount: data?.data.total_count ?? 0,
		isOpen: value.length >= MIN_SEARCH_LENGTH,
		dropdownRef,
		onChange,
		onSubmit: submit,
		onClear: clear,
		onAllResults: clear,
		searchHref: `/search?name=${debouncedValue}`,
	};
}
