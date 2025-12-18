import { SearchForm, SearchResults } from '@/features/search';

export function HeaderSearch() {
	return (
		<div className='relative w-full mx-auto mt-4 lg:mt-0 lg:max-w-[600px]'>
			<SearchForm/>
			<SearchResults />
		</div>
	);
}
