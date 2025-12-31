'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';

interface Props {
	label: string;
	children: ReactNode;
}

export function SectionMenu({ label, children }: Props) {
	return (
		<div className="group">
			<Button
				color="primary"
				size="lg"
				radius="none"
				className="px-6 h-12 min-w-24 font-bold hover:bg-blue-600"
				endContent={
					<Icons.ChevronDownIcon
						size={ 14 }
						strokeWidth="2"
						className="stroke-white transition group-hover:rotate-180"
					/>
				}
			>
				{ label }
			</Button>

			<div className={ twMerge('absolute left-0 top-12 z-30 w-full hidden group-hover:flex') }>
				<div className="w-full bg-gray-200 shadow-lg ring-1 ring-gray-900/5 py-8">
					<div className='flex-auto mx-auto max-w-7xl grid grid-cols-4 px-4'>
						{ children }
					</div>
				</div>
			</div>
		</div>
	);
}
