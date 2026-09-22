'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, } from '@heroui/react';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';
import { Locale } from '@/shared/types/locale';

export function CreditInformation() {
	const locale = useLocale();
	const t = useTranslations('creditInformation');
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className='credit-information'>
			<Button
				onPress={ onOpen }
				color='secondary'
				className="text-sm font-semibold w-full md:w-72"
			>
				<Icons.InfoTooltipIcon size={ 24 } className="fill-gray-800"/>
				{ t('button') }
			</Button>

			<Modal
				radius='sm'
				isOpen={ isOpen }
				onOpenChange={ onOpenChange }
				placement="top-center"
				size='4xl'
			>
				<ModalContent>
					{ (onClose) => (
						<>
							<ModalHeader className="flex items-center gap-2">
								<Icons.InfoTooltipIcon size={ 24 } className="fill-[#7d92b2]"/>
								{ t('button') }
							</ModalHeader>

							<ModalBody>
								<div className='flex gap-2 text-large font-bold'>
									{ t('title mono') }
									<Image
										src={ `/icons/monobank.svg` }
										alt=''
										width={ 20 }
										height={ 20 }
									/>
								</div>
								<p>{ t('description mono') }</p>
								{ locale === Locale.UK ? <>
										<ul className="list-disc ml-6">
											<li>
												<strong>Безкоштовно:</strong> 0% відсотків та комісій.
											</li>
											<li>
												<strong>Зручно:</strong> обирайте термін погашення самостійно.
											</li>
										</ul>
										<p><strong>Важливо:</strong> при оформленні замовлення, виберіть спосіб оплати “Оплата частинами від
											Монобанку”, та вказуйте номер телефону, до якого прив’язана ваша картка Monobank, та попередньо
											перевірте доступний ліміт у додатку банку.</p>
									</> :
									<>
										<ul className="list-disc ml-6">
											<li>
												<strong>Бесплатно:</strong> 0% процентов и комиссий.
											</li>
											<li>
												<strong>Удобно:</strong> выбирайте срок погашения самостоятельно.
											</li>
										</ul>
										<p><strong>Важливо:</strong> при оформлении заказа выберите способ оплаты «Оплата частями от
											Монобанка», указывайте номер телефона, к которому привязана ваша карта Monobank, и предварительно
											проверьте доступный лимит в приложении банка.</p>
									</> }
								<div className='flex gap-2 text-large font-bold mt-4'>
									{ t('title privat') }
									<Image
										src={ `/icons/privatbank.svg` }
										alt=''
										width={ 20 }
										height={ 20 }
									/>
								</div>
								<p>{ t('description privat') }</p>
								{ locale === Locale.UK ? <>
										<ul className="list-disc ml-6">
											<li>
												<strong>0%</strong> переплат: ви сплачуєте лише вартість товару.
											</li>
											<li>
												<strong>За 1</strong> хвилину: швидке підтвердження замовлення у Приват24.
											</li>
											<li>
												<strong>Також доступна</strong> «Миттєва розстрочка» на більшу кількість місяців.
											</li>
										</ul>
										<div className='text-large font-bold'>{ t('subtitle privat') }</div>
										<ul className="list-decimal ml-6">
											<li>
												Ви повинні бути клієнтом ПриватБанку;
											</li>
											<li>
												Вам потрібно мати одну із таких типів картк Універсальна, Універсальна Gold, Platinum, Infinite
												або World Signia/Elite та достатній ліміт на розстрочку в додатку.
											</li>
										</ul>
										<div className='text-large font-bold'>{ t('subtitle privat2') }</div>
										<ul className="list-decimal ml-6">
											<li>
												Оберіть необхідні товари в нашому каталозі.
											</li>
											<li>
												При оформленні замовлення оберіть спосіб оплати: Оплата частинами від ПриватБанку.
											</li>
											<li>
												Заповніть всі поля і Підтвердіть ваше замовлення. Отримайте ваші товари з вигідними умовами.
											</li>
										</ul>
										<p>Більш детально про оплату частинами від ПриватБанку ви можете дізнатись на його офіційному
											сайті:</p>
										<a className='text-blue-500' target="_blank"
										   href='https://privatbank.ua/kredyty/oplata-chastynamy-ta-myttyeva-rozstrochka'>https://privatbank.ua/</a>
									</> :
									<>
										<ul className="list-disc ml-6">
											<li>
												<strong>0%</strong> переплат: вы оплачиваете только стоимость товара.
											</li>
											<li>
												<strong>За 1</strong> минуту: быстрое подтверждение заказа в Приват24.
											</li>
											<li>
												<strong>Также доступна</strong> «Мгновенная рассрочка» на большее количество месяцев.
											</li>
										</ul>
										<div className='text-large font-bold'>{ t('subtitle privat') }</div>
										<ul className="list-decimal ml-6">
											<li>
												Вы должны быть клиентом ПриватБанка;
											</li>
											<li>
												Вам нужно иметь одну из карт («Универсальная», «Универсальная Gold», Platinum, Infinite или
												World Signia/Elite) и достаточный лимит на рассрочку в приложении.
											</li>
										</ul>
										<div className='text-large font-bold'>{ t('subtitle privat2') }</div>
										<ul className="list-decimal ml-6">
											<li>
												Выберите необходимые товары в нашем каталоге.
											</li>
											<li>
												При оформлении заказа выберите способ оплаты: «Оплата частями от ПриватБанка».
											</li>
											<li>
												Заполните все поля и подтвердите ваш заказ. Получите ваши товары на выгодных условиях!
											</li>
										</ul>
										<p>Более подробно об оплате частями от ПриватБанка вы можете узнать на его официальном сайте:</p>
										<a className='text-blue-500' target="_blank"
										   href='https://privatbank.ua/kredyty/oplata-chastynamy-ta-myttyeva-rozstrochka'>https://privatbank.ua/</a>
									</> }
							</ModalBody>

							<ModalFooter>
								<Button
									onPress={ onClose }
									color="primary"
								>{ t('button 2') }</Button>
							</ModalFooter>
						</>
					) }
				</ModalContent>
			</Modal>
		</div>
	);
}
