'use client'

import { JSX } from 'react';
import { Card, CardBody } from '@heroui/react';
import { Product } from '@/entities/product/model';
import { ProductIcons } from './ProductIcons';
import { ActionsBlock } from '@/entities/product/ui/ActionsBlock';
import { Section } from '@/shared/types/section';
import { ProductImage } from '@/entities/product/ui/ProductImage';

const cargo = [ '3', '4', '5', '6', '9', '10', '11' ];

interface Props {
	item: Product
}

export function ProductCard({ item }: Props): JSX.Element {
	const { default_photo, full_name, sku, min_price, season, vehicle_type, page_url, best_offer, group, model } = item;
	const section = item.vehicle_type ? Section.Tires : item.diameter ? Section.Disks : Section.Battery;
	const sectionNew = section === Section.Tires ? cargo.includes(item.vehicle_type) ? Section.Cargo : Section.Tires : section;

	return (
		<Card
			radius='sm'
			className='relative group shadow-sm duration-150 ease-in-out hover:shadow-xl/20 hover:z-10 hover:scale-105'
		>
			<CardBody>
				<div className='relative min-h-32 sm:min-h-52 text-center'>
					<ProductIcons season={ season } vehicleType={ vehicle_type }/>
					<ActionsBlock sectionNew={ sectionNew } group={ group } />
					<ProductImage default_photo={ default_photo } images={ model.model_images } full_name={ full_name } />
				</div>
			</CardBody>
		</Card>
	)
}
