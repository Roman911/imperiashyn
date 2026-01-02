import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { FilterAltProps } from '../model/types';
import { FilterContent } from '@/features/catalog/filter-alt/ui/FilterContent';

interface Props extends FilterAltProps {
	isOpen: boolean;
	onClose: () => void;
}

export const FilterAltMobile: FC<Props> = ({ isOpen, onClose, ...props }) => (
	<>
		<div
			className={ twMerge(
				'fixed inset-0 bg-overlay/50 hidden',
				isOpen && 'block'
			) }
		/>

		<div
			className={ twMerge(
				'fixed inset-0 bg-white dark:bg-[#18181b] hidden z-50',
				isOpen && 'block'
			) }
		>
			<button
				className="absolute top-2 right-2"
				onClick={ onClose }
			>
				{/*<Icons.CloseIcon className="w-4 h-4"/>*/}
			</button>

			<FilterContent { ...props } />
		</div>
	</>
);
