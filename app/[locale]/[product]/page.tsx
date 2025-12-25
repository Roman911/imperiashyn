import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProduct } from '@/entities/product/model/services';
import { ImageGallery } from '@/entities/ImageGallery/ui/ImageGallery';
import { twMerge } from 'tailwind-merge';

export default async function Product({ params }: { params: Promise<{ locale: Locale, product: string }> }) {
	const { product } = await params;
	const match = product.match(/(\d+)$/); // match will be RegExpMatchArray | null
	const productId = match ? match[1] : '';
	const productResponse = await getProduct(productId);
	const section = /\bdia\d+\b/.test(productId) ? Section.Disks : /(?:^|[^a-zA-Z])\d+ah(?=-|$)/.test(productId) ? Section.Battery : Section.Tires;
	const path = [
		{
			title: section,
			translations: true,
			href: `/catalog/${ section }`
		},
		{
			title: productResponse.name || '',
			translations: false,
			href: `/${ section }`
		}
	];

	console.log(productResponse);

	return (
		<Layout>
			<Breadcrumbs path={ path }/>
			<div className='flex'>
				<div className='w-[320]'>Filter</div>
				<section className='product-page flex flex-col lg:flex-row justify-between gap-1 xl:gap-x-6 mt-4 md:mt-6'>
					<div className='max-w-[900] flex-1 md:pr-3 xl:pr-5'>
						<div className='flex flex-col md:flex-row items-center md:items-start md:border-b border-gray-200'>
							<div className={ twMerge('gallery relative mb-2 md:mb-7 pt-10 pb-2 md:pb-5 dark:bg-white rounded-lg max-w-full md:max-w-72') }>
								<ImageGallery photo={ { url_part: productResponse.imageSmall, url_part2: productResponse.imageBig }} images={ productResponse.images } name={ productResponse.name } />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
};
