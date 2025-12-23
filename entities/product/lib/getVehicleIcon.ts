import type { ComponentType } from 'react';
import * as UiIcons from '@/shared/ui/icons';
import type { VehicleType } from '../model';

const vehicleTypeToIcon: Record<VehicleType, ComponentType<any>> = {
	'1': UiIcons.CarIcon,
	'2': UiIcons.SuvIcon,
	'7': UiIcons.MotorcyclesIcon,
	'8': UiIcons.BusIcon,
	'9': UiIcons.CargoIcon,
};

export function getVehicleIcon(type: VehicleType) {
	return vehicleTypeToIcon[type] ?? null;
}
