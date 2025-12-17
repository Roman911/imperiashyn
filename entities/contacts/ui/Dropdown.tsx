'use client';

import Image from 'next/image';
import { Dropdown as DropdownUI, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';

import { Button } from '@/shared/ui';
import { ChevronDown, Phone } from '@/shared/icons';
import type { Phone as PhoneType } from '@/shared/types/settings';

interface ContactsDropdownProps {
	phones: PhoneType[];
}

export default function ContactsDropdown({ phones }: ContactsDropdownProps) {
	const mainPhone = phones[0];

	return (
		<DropdownUI radius="sm">
			<DropdownTrigger>
				<Button
					size="sm"
					variant="light"
					className="text-white text-sm"
					startContent={ <Phone size={ 21 } className="text-primary"/> }
					endContent={ <ChevronDown size={ 10 } className="stroke-white"/> }
				>
					{ mainPhone.phone }
				</Button>
			</DropdownTrigger>

			<DropdownMenu aria-label="Contacts">
				{ phones.map(({ phone, url, operator }) => (
					<DropdownItem
						key={ phone }
						href={ `tel:${ phone }` }
						startContent={
							<Image
								width={ 20 }
								height={ 20 }
								src={ `/icons/${ operator }-logo.svg` }
								alt={ operator }
							/>
						}
					>
						{ phone }
					</DropdownItem>
				)) }
			</DropdownMenu>
		</DropdownUI>
	);
};
