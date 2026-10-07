import Image from 'next/image';

import { Section } from '@/shared/types/section';
import { twMerge } from 'tailwind-merge';

interface Props {
	section: Section;
	bottom?: boolean;
}

export function BanksIcon({ section, bottom }: Props) {
	if(section !== Section.Tires) return null;

	return (
		<div className={ twMerge('absolute flex gap-2 left-1 z-10', bottom && 'bottom-2', !bottom && 'top-64') }>
			<Image
				src={ `/icons/monobank.svg` }
				alt=''
				width={ 24 }
				height={ 24 }
			/>
			<Image
				src={ `/icons/privatbank.svg` }
				alt=''
				width={ 24 }
				height={ 24 }
			/>
		</div>
	)
}
