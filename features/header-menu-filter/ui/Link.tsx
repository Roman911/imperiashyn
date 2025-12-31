import Image from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Link as LinkI18n } from '@/shared/i18n/navigation';
import { Button } from '@/shared/ui/button';

interface Props {
	children: ReactNode;
	href: string;
	onClose: (href: string) => void;
	img?: string
	className?: string;
	variant?: "solid" | "light" | "bordered";
}

export function ImageUI({ img }: { img: string }) {
	return (
		<Image
			src={ `/icons/${img}.svg` }
			alt={ `${img} logo` }
			width={ 24 }
			height={ 24 }
		/>
	)
}

export function Link({ children, href, onClose, img, className, variant='light' }: Props) {
	return (
		<Button
			as={ LinkI18n }
			href={ href }
			variant={ variant }
			color='default'
			size='md'
			onPress={ () => onClose(href) }
			className={ twMerge(variant === 'bordered' ? 'min-w-12 lg:min-w-16 text-sm lg:text-base px-2' : 'text-lg hover:text-primary', className) }
			startContent={ img && <ImageUI img={ img } /> }
		>
			{ children }
		</Button>
	)
}
