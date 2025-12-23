import Image from 'next/image';
import { getSeasonIcon } from '../lib/getSeasonIcon';
import { getVehicleIcon } from '@/entities/product/lib';
import type { SeasonType, VehicleType } from '../model';

interface Props {
	season: SeasonType;
	vehicleType: VehicleType;
}

export function ProductIcons({ season, vehicleType }: Props) {
	const seasonIcon = getSeasonIcon(season);
	const VehicleIcon = getVehicleIcon(vehicleType);

	return (
		<div className="absolute left-2 top-2 flex flex-col gap-1 z-10">
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
