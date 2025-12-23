'use client'

import Image from 'next/image';
import { FormEvent } from 'react';
// import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { supportApi } from '@/entities/support/api/support.api';
import { Form } from '@heroui/form';
import { PhoneInput } from '@/shared/ui/phone-input';

// const schema = yup.object().shape({
// 	telephone: yup.string().min(13, 'Це поле обовʼязкове.').max(13).required('Це поле обовʼязкове.'),
// });

interface FormProps {
	telephone: string
}

const defaultValues = {
	telephone: '',
}

export function Support() {
	const [ createCallback, { isLoading } ] = supportApi.useCreateCallbackMutation();

	const onSubmit = async(event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const phone = formData.get('phone') as string;
		// const phoneTransform = formatPhoneNumber(phone);

		// if(phoneTransform.length < 13) {
		// 	// setPhoneErrorMessage('enter your phone number');
		// } else {
		// 	await createCallback({
		// 		phone: phoneTransform,
		// 		product_id: id?.toString(),
		// 		quantity: quantity.toString(),
		// 	}).then((response: { data?: { result: boolean }; error?: FetchBaseQueryError | SerializedError }) => {
		// 		if(response?.data?.result) {
		// 			addToast({
		// 				title: t('sent message'),
		// 				description: t('our manager'),
		// 				classNames: { base: 'text-black dark:text-gray-50', title: 'text-black dark:text-gray-50' },
		// 			});
		// 			onClose();
		// 		} else if(response.error) {
		// 			console.error('An error occurred:', response.error);
		// 		}
		// 	});
		// }
	}

	return (
		<Form onSubmit={ onSubmit } className='mt-56 md:mt-16 bg-[#EAF1FF] flex justify-between flex-col-reverse md:flex-row px-8 md:px-20 relative'>
			<div className='py-10 flex justify-center flex-col'>
				<h3 className='text-4xl font-bold'>
					{/*{lang === 'ua' ? 'Потрібна допомога?' : 'Нужна помощь?'}*/}
					Потрібна допомога?
				</h3>
				<p className='text-xl mt-6'>
					Зверніться до наших експертів
					{/*{lang === 'ua' ? 'Зверніться до наших експертів' : 'Обратитесь к нашим экспертам'}*/}
				</p>
				<div className='flex items-center mt-8'>
					<div>
						<PhoneInput />
					</div>
					<button type='submit' className='btn primary -ml-2 relative'>
						Замовити дзвінок
						{/*{lang === 'ua' ? 'Замовити дзвінок' : 'Заказать звонок'}*/}
					</button>
				</div>
			</div>
			<div className='absolute md:static bottom-full left-2/4 -translate-x-2/4 md:translate-x-0 max-w-72 md:max-w-max'>
				<Image width={ 412 } height={ 380 } src='/images/support/man.png' alt='' loading='lazy' />
			</div>
		</Form>
	)
}
