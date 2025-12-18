import { Button as ButtonUI, ButtonProps } from '@heroui/button';
import { twMerge } from 'tailwind-merge';

export function Button({ children, color='primary', className, ...props }: ButtonProps) {
	return <ButtonUI
		size='lg'
		radius="sm"
		color={ color }
		className={ twMerge('uppercase font-bold', className, color === 'secondary' && 'text-black') }
		{ ...props }
	>
		{ children }
	</ButtonUI>
}
