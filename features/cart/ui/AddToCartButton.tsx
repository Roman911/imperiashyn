"use client";

import { Product } from '@/entities/product/model';
import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';

import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	useDisclosure,
} from "@heroui/react";

export function AddToCartButton({ product }: { product: Product }) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	console.log('AddToCartButton', product);

	return (
		<>
			<Button onPress={onOpen} aria-label='cart' className='min-w-16 md:min-w-24'>
				<Icons.CartIcon className='stroke-white'/>
			</Button>
			<Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
							<DrawerBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
									quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
									quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
									adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
									officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
									nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
									deserunt nostrud ad veniam.
								</p>
							</DrawerBody>
							<DrawerFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}
