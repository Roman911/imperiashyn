'use client';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';

interface Props {
	onClick: () => void;
}

export function AddToCartButton({ onClick }: Props) {
	return (
		<Button
			onPress={onClick}
			aria-label="Add to cart"
			className="min-w-16 md:min-w-24"
		>
			<Icons.CartIcon className="stroke-white" />
		</Button>
	);
}
