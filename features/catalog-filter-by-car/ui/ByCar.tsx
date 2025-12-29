'use client';

import { useTranslations } from 'next-intl';
import { Section } from '@/shared/types/section';
import { Button } from '@/shared/ui/button';
import { Autocomplete } from './Autocomplete';

import { useByCar } from '../model/useByCar';

interface Props {
	car: string | null;
	section: Section;
}

export function ByCar({ car, section }: Props) {
	const t = useTranslations('filters');
	const { filter, auto, model, year, kit, onChange, submit } = useByCar(car, section);

	return (
		<>
			<Autocomplete
				name="brand"
				label={ t('car brand') }
				options={ auto?.auto }
				defaultValue={ filter.brand.toString() || '' }
				onChange={ (_, v) => onChange('brand', Number(v)) }
			/>

			<Autocomplete
				name="model"
				label={ t('model') }
				options={ model }
				isDisabled={ !model?.length }
				defaultValue={ filter.model.toString() || '' }
				onChange={ (_, v) => onChange('model', Number(v)) }
			/>

			<Autocomplete
				name="year"
				label={ t('graduation year') }
				options={ year?.map(v => ({ value: v, label: String(v) })) }
				isDisabled={ !year?.length }
				defaultValue={ filter.year.toString() || '' }
				onChange={ (_, v) => onChange('year', Number(v)) }
			/>

			<Autocomplete
				name="modification"
				label={ t('modification') }
				options={ kit }
				isDisabled={ !kit?.length }
				defaultValue={ filter.modification.toString() || '' }
				onChange={ (_, v) => onChange('modification', Number(v)) }
			/>

			<Button onPress={ submit } className="w-full mt-2 uppercase">
				{ t('choose') }
			</Button>
		</>
	);
}
