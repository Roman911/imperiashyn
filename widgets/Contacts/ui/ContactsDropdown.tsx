'use client';

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { Button } from '@heroui/button';
import { ChevronDown, Phone } from '@/shared/icons';

const ContactsDropdown = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					variant="light"
					className='text-white'
					startContent={ <Phone size={ 21 } className='text-primary'/> }
					endContent={ <ChevronDown size={ 10 } className='stroke-white' /> }
				>
					Open Menu
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem key="new">New file</DropdownItem>
				<DropdownItem key="copy">Copy link</DropdownItem>
				<DropdownItem key="edit">Edit file</DropdownItem>
				<DropdownItem key="delete" className="text-danger" color="danger">
					Delete file
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
};

export default ContactsDropdown;
