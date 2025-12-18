'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@heroui/react';
import * as Icons from '@/shared/ui/icons';
import { SearchInput } from '@/shared/ui/search-input';
import { useSearchPlaceholder } from '../model/useSearchPlaceholder';
import { Link } from '@/shared/i18n/navigation';

export function SearchForm() {
	const [ value, setValue ] = useState('');
	const placeholder = useSearchPlaceholder();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 🔥 тут буде navigation / analytics / dispatch
	};

	return (
		<SearchInput
			value={ value }
			placeholder={ placeholder }
			onChange={ onChange }
			onSubmit={ onSubmit }
			endContent={
				<Button
					as={ Link }
					href='/search'
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
	);
}
