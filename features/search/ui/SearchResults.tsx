import { JSX, ReactNode, RefObject } from 'react';
import { Listbox, ListboxItem } from "@heroui/react";
import { Link } from '@/shared/i18n/navigation';
import { ProductApi } from '@/entities/products/api/types';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

export const ListboxWrapper = ({ children, ref }: { children: ReactNode, ref: RefObject<HTMLDivElement | null> }) => (
	<div
		ref={ ref }
		className="absolute w-full max-w-[600px] border-small px-6 py-4 rounded-small border-default-200 dark:border-default-100 bg-zinc-700">
		{ children }
	</div>
);

interface Props {
	products: ProductApi[] | undefined;
	totalCount: number;
	isOpen: boolean;
	onClose: () => void;
	onAllResults: () => void;
	dropdownRef: RefObject<HTMLDivElement | null>;
}

export function SearchResults({ products, isOpen, totalCount, dropdownRef }: Props): JSX.Element | null {
	const t = useTranslations('');

	if(!products || !isOpen) return null;

	return (
		<ListboxWrapper ref={dropdownRef}>
			<Listbox aria-label="Search list" color='primary' items={ products }>
				{ (product) => (
					<ListboxItem
						as={ Link }
						key={ product.group }
						href={ product.page_url }
						className='text-white'
					>
						{ product.full_name }
					</ListboxItem>
				) }
			</Listbox>
			<div className='text-center py-2'>
				<Button className='min-w-80'>
					{ t('all search result') + ' ' }
					{ totalCount > 0 && <>({ totalCount })</> }
				</Button>
			</div>
		</ListboxWrapper>
	)
}
