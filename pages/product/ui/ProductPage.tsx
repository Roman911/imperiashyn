import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import { ImageGallery } from '@/entities/ImageGallery/ui/ImageGallery';
import { ProductIcons } from '@/entities/product/ui/ProductIcons';
import { Article } from '@/shared/ui/article';
import { Rating } from '@/entities/rating';

import { getProductSection } from '../model/get-section';
import { getProductBreadcrumbs } from '../model/get-breadcrumbs';
import { Product } from '@/entities/product/model/types';

interface Props {
	product: Product;
}

export default function ProductPage({ product }: Props) {
	const section = getProductSection(product.id.toString());
	const breadcrumbs = getProductBreadcrumbs(section, product.name);

	return (
		<Layout>
			<Breadcrumbs path={breadcrumbs} />

			<section className="product-page flex flex-col lg:flex-row gap-6 mt-6">
				<div className="flex-1">
					<div className="flex flex-col md:flex-row border-b border-gray-200">
						<div
							className={twMerge(
								'gallery relative pt-10 pb-5 rounded-lg max-w-full md:max-w-72 dark:bg-white'
							)}
						>
							<div className="flex justify-between">
								<ProductIcons
									season="1"
									vehicleType={product.vehicleType}
								/>

								{product.brandImage && (
									<Image
										src={product.brandImage}
										alt={product.brandName}
										width={112}
										height={134}
									/>
								)}
							</div>

							<ImageGallery
								photo={{
									url_part: product.imageSmall,
									url_part2: product.imageBig,
								}}
								images={product.images}
								name={product.name}
							/>
						</div>

						<div className="flex-1 md:ml-6 xl:ml-10">
							<h1 className="text-2xl font-bold mt-8 md:mt-0">
								{product.name}
							</h1>

							<div className="flex mt-5 items-center gap-4">
								<Article sku={product.sku} />
								<Rating
									commentsCount={product.review?.length || undefined}
									commentsAvgRate={0}
								/>
							</div>

							<div className="mt-8">
								<div className="flex items-end">
									<span className="mr-2.5 text-xl">from</span>
									<span className="text-4xl font-bold mr-2.5">
										{product.price} ₴
									</span>
									<span className="text-xl">/шт.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}