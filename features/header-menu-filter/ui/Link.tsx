import Image from 'next/image';
import { ReactNode } from 'react';

import { Link as LinkI18n } from '@/shared/i18n/navigation';
import { Button } from '@/shared/ui/button';

interface Props {
	children: ReactNode;
	href: string;
	img?: string
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

export function Link({ children, href, img }: Props) {
	return (
		<Button
			as={ LinkI18n }
			href={ href }
			variant='light'
			color='default'
			size='md'
			className='text-lg'
			startContent={ img && <ImageUI img={ img } /> }
		>
			{ children }
		</Button>
	)
}
