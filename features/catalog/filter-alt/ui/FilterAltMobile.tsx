'use client';

import { Drawer, DrawerBody, DrawerContent, useDisclosure, } from "@heroui/react";

import { FilterContent } from '@/features/catalog/filter-alt/ui/FilterContent';
import { Button } from '@/shared/ui/button';

import { FilterAltProps } from '../model/types';

export function FilterAltMobile({ ...props }: FilterAltProps) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				variant='light'
				onPress={ onOpen }
			>
				Open Drawer
			</Button>
			<Drawer
				isOpen={ isOpen }
				onOpenChange={ onOpenChange }
				placement='left'
				radius='none'
			>
				<DrawerContent>
					{ () => (
						<>
							<DrawerBody>
								<FilterContent { ...props } />
							</DrawerBody>
						</>
					) }
				</DrawerContent>
			</Drawer>
		</>
	)
}
