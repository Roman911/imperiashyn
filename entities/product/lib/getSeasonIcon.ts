import type { SeasonType } from '../model/types';

export function getSeasonIcon(season: SeasonType): string | null {
	switch(season) {
		case '1':
			return 'sun';
		case '2':
			return 'snow';
		case '3':
			return 'all-season';
		default:
			return null;
	}
}
