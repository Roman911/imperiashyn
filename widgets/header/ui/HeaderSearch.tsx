import { SearchForm } from '@/features/search';
import { twMerge } from 'tailwind-merge';

export function HeaderSearch({ className }: { className: string }) {
	return (
		<div className={ twMerge('relative w-full mx-auto mt-4 lg:mt-0 lg:max-w-[600]', className) }>
			<SearchForm/>
		</div>
	);
}
