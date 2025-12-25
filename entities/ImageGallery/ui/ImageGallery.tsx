import { Images } from '@/entities/product/model/types';
import { ProductImage } from '@/entities/product/ui/ProductImage';
import { ReactSlick } from '@/features/react-slick/ui/ReactSlick';

interface Props {
	photo: {
		url_part: string;
		url_part2: string;
	};
	images: Images[];
	name: string;
}

export function ImageGallery({ photo, images, name }: Props) {
	if(images.length) return <ReactSlick images={ images } photo={ photo } />;

	return (
		<ProductImage
			default_photo={ photo.url_part2 }
			images={ images }
			full_name={ name }
			width={ 288 }
			height={ 288 }
		/>
	)
}
