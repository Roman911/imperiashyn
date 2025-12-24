'use client';

import { useDisclosure } from '@heroui/react';
import type { Product } from '@/entities/product/model';
import { useAddToCart } from '../model/useAddToCart';
import { AddToCartButton } from './AddToCartButton';
import { AddToCartDrawer } from './AddToCartDrawer';

export function AddToCart({ product }: { product: Product }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { addToCart } = useAddToCart(product);

	const handleClick = () => {
		// addToCart();
		onOpen();
	};

	return (
		<>
			<AddToCartButton onClick={ handleClick }/>
			<AddToCartDrawer isOpen={ isOpen } onClose={ onClose }/>
		</>
	);
}
