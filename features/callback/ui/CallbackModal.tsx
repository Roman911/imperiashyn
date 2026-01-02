'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Form, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/react';

import { PhoneInput } from '@/shared/ui/phone-input';
import { useCallbackForm } from '../model/useCallbackForm';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/Input';

interface Props {
	productId?: number;
	quantity: number;
}

export function CallbackModal({ productId, quantity }: Props) {
	const t = useTranslations('callbackModal');
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	const {
		phoneRef,
		phoneError,
		setPhoneError,
		onSubmit,
		isLoading,
	} = useCallbackForm({ productId, quantity });

	useEffect(() => {
		if(isOpen) {
			setTimeout(() => phoneRef.current?.focus(), 100);
		}
	}, [ isOpen, phoneRef ]);

	return (
		<>
			<Button
				onPress={ onOpen }
				variant='light'
				size='md'
				color='default'
				className='text-white font-semibold h-6'
			>
				Замовити дзвінок
			</Button>

			<Modal isOpen={ isOpen } onOpenChange={ onOpenChange } placement="top-center">
				<ModalContent>
					<>
						<ModalHeader>
							<h3 className="uppercase font-semibold">{ t('callback') }</h3>
						</ModalHeader>

						<ModalBody>
							<Form className="flex flex-col gap-4" onSubmit={ onSubmit }>
								<p className="text-sm text-gray-500">{ t('put phone') }</p>

								<Input
									isRequired
									name="username"
									label={ t('your name') }
									errorMessage={ t('this field is required') }
								/>

								<PhoneInput error={ phoneError } onClearError={ setPhoneError } />

								<Button
									type="submit"
									color="primary"
									radius="full"
									size="lg"
									isLoading={ isLoading }
									className="uppercase font-bold ml-auto"
								>
									{ t('send') }
								</Button>
							</Form>
						</ModalBody>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}
