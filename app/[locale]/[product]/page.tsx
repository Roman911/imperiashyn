import { getProduct } from '@/entities/product/model/services';
import { getProductSection } from '@/shared/lib/get-section/get-section';
import { getProductBreadcrumbs } from '@/entities/product/model/get-breadcrumbs';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { twMerge } from 'tailwind-merge';
import { ProductIcons } from '@/entities/product/ui/ProductIcons';
import Image from 'next/image';
import { ImageGallery } from '@/entities/ImageGallery/ui/ImageGallery';
import { Article } from '@/shared/ui/article';
import { Rating } from '@/entities/rating';
import { Layout } from '@/shared/ui/layout/Layout';
import { ProductPageParams } from '@/entities/product/model/types';

export default async function Page({ params }: { params: Promise<ProductPageParams> }) {
	const { product } = await params;

	const match = product.match(/(\d+)$/);
	const productId = match?.[1];

	if(!productId) {
		throw new Error('Invalid product id');
	}

	const productResponse = await getProduct(productId);
	const section = getProductSection(productResponse.id.toString());
	const breadcrumbs = getProductBreadcrumbs(section, productResponse.name);

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
									vehicleType={productResponse.vehicleType}
								/>

								{productResponse.brandImage && (
									<Image
										src={productResponse.brandImage}
										alt={productResponse.brandName}
										width={112}
										height={134}
									/>
								)}
							</div>

							<ImageGallery
								photo={{
									url_part: productResponse.imageSmall,
									url_part2: productResponse.imageBig,
								}}
								images={productResponse.images}
								name={productResponse.name}
							/>
						</div>

						<div className="flex-1 md:ml-6 xl:ml-10">
							<h1 className="text-2xl font-bold mt-8 md:mt-0">
								{productResponse.name}
							</h1>

							<div className="flex mt-5 items-center gap-4">
								<Article sku={productResponse.sku} />
								<Rating
									commentsCount={productResponse.review?.length || undefined}
									commentsAvgRate={0}
								/>
							</div>

							<div className="mt-8">
								<div className="flex items-end">
									<span className="mr-2.5 text-xl">from</span>
									<span className="text-4xl font-bold mr-2.5">
										{productResponse.price} ₴
									</span>
									<span className="text-xl">/шт.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
