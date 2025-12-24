'use client';

import { useTranslations } from 'next-intl';
import { Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, } from '@heroui/react';
import { Button } from '@/shared/ui/button';
import { getProducts } from '@/entities/product';
import { getCartTotal } from '@/features/cart/model/cart.logic';

interface Props {
	isOpen: boolean;
	cartItems: {
		id: number
		quantity: number
		section: string
	}[]
	onClose: () => void;
}

export function AddToCartDrawer({ isOpen, onClose, cartItems }: Props) {
	const t = useTranslations('cart');
	const { tires, cargo, disks, battery, isLoading} = getProducts(cartItems, 'reducerCart', true);
	const products = [...tires,...cargo,...disks,...battery];
	const productPrices = products.map(item => {
		return {
			id: item.best_offer.id,
			price: item.min_price
		}
	});

	const cartTotal = getCartTotal(cartItems, productPrices);

	console.log(cartTotal);

	return (
		<Drawer isOpen={ isOpen } onOpenChange={ onClose } radius='none'>
			<DrawerContent>
				{ () => (
					<>
						<DrawerHeader className='text-2xl font-bold text-gray-800'>{ t('cart') }</DrawerHeader>
						<DrawerBody>
							<p>Ви можете перейти до кошика або продовжити покупки</p>

							<Divider className='mt-auto' />
							<div className='flex justify-between text-gray-900'>
								<div className='font-bold'>Загалом</div>
								<div>2798₴</div>
							</div>
							<p className='text-gray-600'>Метод доставки та оплати можна обрати при оформленні замовлення</p>
						</DrawerBody>
						<DrawerFooter className='flex-col'>
							<Button onPress={ onClose } className='w-full'>
								{ t('place an order') }
							</Button>
							<Button onPress={ onClose } className='w-full bg-gray-950'>
								{ t('continue shopping') }
							</Button>
						</DrawerFooter>
					</>
				) }
			</DrawerContent>
		</Drawer>
	);
}
