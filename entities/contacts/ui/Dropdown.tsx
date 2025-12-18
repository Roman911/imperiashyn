'use client';

import Image from 'next/image';
import { Dropdown as DropdownUI, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';

import { Button } from '@/shared/ui';
import { ChevronDownIcon, PhoneIcon } from '@/shared/ui/icons';
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
					className="text-white text-sm h-10 md:h-8 px-0"
					startContent={ <div className='bg-blue-500 lg:bg-transparent p-2 lg:p-0 rounded-full'>
						<PhoneIcon size={ 21 } className="md:text-primary"/>
					</div> }
					endContent={ <ChevronDownIcon size={ 10 } className="stroke-white"/> }
				>
					<span className="hidden md:inline">
						{ mainPhone.phone }
					</span>
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
