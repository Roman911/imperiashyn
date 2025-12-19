'use client';

import { Button } from '@heroui/react';
import * as Icons from '@/shared/ui/icons';
import { Link } from '@/shared/i18n/navigation';
import { SearchInput } from '@/shared/ui/search-input';
import { useSearch } from '../model/useSearch';
import { SearchResults } from './SearchResults';

export function SearchForm() {
	const {
		value,
		products,
		totalCount,
		isOpen,
		dropdownRef,
		onChange,
		onSubmit,
		onClear,
		onAllResults,
		searchHref,
	} = useSearch();

	return (
		<>
			<SearchInput
				value={ value }
				onChange={ onChange }
				onSubmit={ onSubmit }
				endContent={
					<Button
						as={ Link }
						href={ searchHref }
						type="submit"
						isIconOnly
						aria-label="Search"
						radius="sm"
						className="w-16 h-11 -mr-1 bg-gray-900"
					>
						<Icons.SearchIcon className="text-white"/>
					</Button>
				}
			/>

			<SearchResults
				products={ products }
				totalCount={ totalCount }
				isOpen={ isOpen }
				onClose={ onClear }
				onAllResults={ onAllResults }
				dropdownRef={ dropdownRef }
			/>
		</>
	);
}
