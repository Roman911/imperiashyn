import { Button, ButtonProps } from '@heroui/button';
import { twMerge } from 'tailwind-merge';

const MyButton = (
	{
		children,
		color='primary',
		className,
		...props
	}: ButtonProps) => {
	return <Button
		size='lg'
		radius="sm"
		color={ color }
		className={ twMerge('uppercase font-bold', className, color === 'secondary' && 'text-black') }
		{ ...props }
	>
		{ children }
	</Button>
};

export default MyButton;
