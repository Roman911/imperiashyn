import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

interface Props {
	title: string
	isMain?: boolean
	className?: string
}

export function Title({ title, isMain, className }: Props) {
	const t = useTranslations('common');

	if(isMain) return <h1 className={ twMerge('my-5 text-3xl md:text-4xl font-bold px-3 md:px-0', className) }>{ t(title) }</h1>

	return <h2 className={ twMerge('my-5 text-3xl md:text-4xl font-bold px-3 md:px-0', className) }>{ t(title) }</h2>
}
