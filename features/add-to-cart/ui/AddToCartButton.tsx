'use client';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';

interface Props {
	inCart: boolean;
	onClick: () => void;
}

export function AddToCartButton({ inCart, onClick }: Props) {
	return (
		<Button
			onPress={ onClick }
			aria-label="Add to cart"
			className="min-w-16 md:min-w-24"
			color={ inCart ? 'success' : 'primary' }
			startContent={ inCart ? <Icons.CheckIcon fill='white'/> : '' }
		>
			<Icons.CartIcon className="stroke-white"/>
		</Button>
	);
}
