'use client';

import Image from 'next/image';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { Button } from '@/shared/ui';
import { ChevronDown, Phone } from '@/shared/icons';
import type { phoneTypes } from '@/widgets/Contacts/model/phoneTypes';

interface ContactsDropdownProps {
	phones: phoneTypes[]
}

const ContactsDropdown = ({ phones }: ContactsDropdownProps) => {
	const phoneFilter = phones.filter(item => item.phone);

	if(!phoneFilter) return null;

	return (
		<Dropdown radius='sm'>
			<DropdownTrigger>
				<Button
					size="sm"
					variant="light"
					className='text-white text-sm'
					startContent={ <Phone size={ 21 } className='text-primary'/> }
					endContent={ <ChevronDown size={ 10 } className='stroke-white'/> }
				>
					{ phoneFilter[0].phone }
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				{ phoneFilter.map(({ phone, url, logo }) => {
					return <DropdownItem
						key={ url }
						href={ `tel:${ url }` }
						startContent={ <Image width={ 20 } height={ 20 } src={ `/icons/${ logo }-logo.svg` } alt=''/> }
					>
						{ phone }
					</DropdownItem>
				}) }
			</DropdownMenu>
		</Dropdown>
	)
};

export default ContactsDropdown;
