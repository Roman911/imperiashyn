'use client';

import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, } from '@heroui/react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export function AddToCartDrawer({ isOpen, onClose }: Props) {
	return (
		<Drawer isOpen={ isOpen } onOpenChange={ onClose }>
			<DrawerContent>
				{ () => (
					<>
						<DrawerHeader>Товар додано в кошик</DrawerHeader>
						<DrawerBody>
							<p>Ви можете перейти до кошика або продовжити покупки</p>
						</DrawerBody>
						<DrawerFooter>
							<Button variant="light" onPress={ onClose }>
								Продовжити
							</Button>
							<Button color="primary" onPress={ onClose }>
								До кошика
							</Button>
						</DrawerFooter>
					</>
				) }
			</DrawerContent>
		</Drawer>
	);
}
