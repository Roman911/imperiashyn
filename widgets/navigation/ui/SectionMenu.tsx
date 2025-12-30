'use client';

import { ReactNode } from 'react';
import { Button } from '@heroui/react';
import { twMerge } from 'tailwind-merge';
import * as Icons from '@/shared/ui/icons';

interface Props {
	label: string;
	children: ReactNode;
}

export function SectionMenu({ label, children }: Props) {
	return (
		<div className="group relative">
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

			<div
				className={ twMerge(
					'absolute left-1/2 top-14 z-30 w-full -translate-x-1/2 px-4 hidden group-hover:flex'
				) }
			>
				<div className="w-full bg-gray-200 shadow-lg ring-1 ring-gray-900/5 py-8 px-12 grid grid-cols-4">
					{ children }
				</div>
			</div>
		</div>
	);
}
