'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { twMerge } from 'tailwind-merge';
import { ProductIcons } from '@/entities/product/ui/ProductIcons';
import { ImageGallery } from '@/entities/ImageGallery/ui/ImageGallery';
import { Article } from '@/shared/ui/article';
import { Rating } from '@/entities/rating';
import { ActionsBlock } from '@/widgets/product/ui/ActionsBlock';
import { Offers } from '@/widgets/product/ui/Offers';
import { SetQuantity } from '@/features/cart/set-quantity';
import { Quantity } from '@/widgets/product/ui/Quantity';
import { DeliveryCalculation } from '@/widgets/product/ui/DeliveryCalculation';
import { CharacteristicsBlock } from '@/widgets/product/ui/CharacteristicsBlock';

interface Props {
	locale: Locale;
	productSlug: string;
	productData: any;
	settings: any;
	section: Section;
}

export function ProductPage({ locale, productSlug, productData, settings, section }: Props) {
	const [ quantity, setQuantity ] = useState(1);
	const [ offerId, setOfferId ] = useState(0);
	const t = useTranslations('common');
	const {
		id,
		availableQuantity,
		brandImage,
		brandName,
		imageBig,
		imageSmall,
		images,
		name,
		price,
		review,
		sku,
		season,
		studded,
		vehicleType,
		offers
	} = productData;

	// useEffect(() => {
	// 	const storage = getFromStorage('reducerRecentlyViewed');
	// 	const updatedStorage = storage.filter((item: { id: number, section: Section }) => item.id !== Number(idProduct));
	// 	const deleteElement = updatedStorage.length === 4 ? updatedStorage.slice(1, 3) : updatedStorage;
	// 	addToStorage('reducerRecentlyViewed', [ ...deleteElement, { id: idProduct, section: section } ]);
	// }, [id, idProduct, section]);

	useEffect(() => {
		if(productData) setOfferId(id);
	}, [ productData ]);

	const onChange = (e: { target: HTMLInputElement }) => {
		const value = e.target.value;
		const onlyNumbers = value.replace(/\D/g, '');
		const numericValue = Number(onlyNumbers);

		setQuantity(numericValue < Number(quantity) ? numericValue : Number(quantity));
	}

	const onSetQuantity = (_: number, quan: number) => {
		setQuantity(quan);
	}

	return (
		<section className="flex flex-col lg:flex-row gap-6 mt-6">
			<div className="flex-1">
				<div className="flex flex-col md:flex-row border-b border-gray-200">
					<div
						className={ twMerge(
							'gallery relative pt-10 pb-5 rounded-lg max-w-full md:max-w-72 dark:bg-white'
						) }
					>
						<div className="flex justify-between">
							<ProductIcons season={ season } vehicleType={ vehicleType } studded={ studded }/>
							{ brandImage && (
								<Image
									src={ brandImage }
									alt={ brandName }
									width={ 112 }
									height={ 134 }
								/>
							) }
						</div>

						<ImageGallery
							photo={ {
								url_part: imageSmall,
								url_part2: imageBig,
							} }
							images={ images }
							name={ name }
						/>
					</div>

					<div className="flex-1 md:ml-6 xl:ml-10">
						<h1 className="text-2xl font-bold mt-8 md:mt-0">
							{ name }
						</h1>

						<div className="flex justify-between flex-col xl:flex-row xl:items-center mt-5">
							<div className='mb-4 xl:mb-0'>
								<Article sku={ sku }/>
								<Rating
									commentsCount={ review?.length || undefined }
									commentsAvgRate={ 0 }
								/>
							</div>
							<ActionsBlock className='hidden md:flex' id={ id } section={ section } quantity={ quantity } />
						</div>

						<div className="mt-8">
							<div className="flex items-end">
								<span className="mr-2.5 text-xl lowercase">{ t('price') }</span>
								<span className="text-4xl font-bold mr-2.5">
										{ price }
									</span>
								<span className="text-xl">грн/шт.</span>
							</div>
							{section === Section.Tires && <div className='mt-3 text-gray-500'>
								{true ? '* ціна вказана за одну шину без диску' : '* цена указана за одну шину без диска'}
							</div>}
							{section === Section.Disks && <div className='mt-3 text-gray-500'>
								{true ? '* ціна вказана за один диск без шини' : '* цена указана за один диск без шины'}
							</div>}
						</div>
						<Offers locale={ locale } offerId={ offerId } offers={ offers } setOfferId={ setOfferId } setQuantity={ setQuantity } />
					</div>
				</div>
				<div className='purchase-information grid justify-self-stretch mt-5 md:mt-10'>
					<div className='mb-4 md:mb-0'>
						<Quantity id={ 0 } quantity={ quantity } offerQuantity={ availableQuantity }
											price={ price } onChange={ onChange } setQuantity={ onSetQuantity }/>
						{/*<DeliveryCalculation offer_id={ offerId } quantity={ quantity } setQuantity={ setQuantity } price={ price } />*/}
					</div>
					{/*<BuyActions offerId={ +offerId } quantity={ quantity } section={ section } onSubmit={ onSubmit } data={ data } />*/}
				</div>
				{/*<CharacteristicsBlock locale={ locale } productData={ productData } section={ section } />*/}
			</div>
			{/*<InfoBlock settings={ settings } />*/}
		</section>
	);
}
