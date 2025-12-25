import Image from 'next/image';
import { getSeasonIcon } from '../lib/getSeasonIcon';
import { getVehicleIcon } from '@/entities/product/lib';
import type { SeasonType, VehicleType } from '../../products/model';
import { twMerge } from 'tailwind-merge';

interface Props {
	season: SeasonType;
	vehicleType: VehicleType;
	isProductCard?: boolean;
}

export function ProductIcons({ season, vehicleType, isProductCard }: Props) {
	const seasonIcon = getSeasonIcon(season);
	const VehicleIcon = getVehicleIcon(vehicleType);

	return (
		<div className={ twMerge("flex gap-1", isProductCard && 'absolute left-2 top-2 flex-col z-10') }>
			{ seasonIcon && (
				<Image
					src={ `/icons/${ seasonIcon }.svg` }
					alt=""
					width={ 24 }
					height={ 24 }
					priority
				/>
			) }
			{ VehicleIcon && <VehicleIcon className="text-gray-400"/> }
		</div>
	);
}
