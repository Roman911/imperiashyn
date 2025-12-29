import { Section } from '@/shared/types/section';

interface Props {
	section: Section;
	brandLabel: string;
	filter: {
		brand: number;
		model: number;
		year: number;
		modification: number;
	};
	tyreSize?: {
		width: number;
		height: number;
		diameter: number;
	};
	diskSize?: {
		width: number;
		diameter: number;
		et: number;
		bolt_count: number;
		pcd: number;
		dia: number;
	};
}

export function buildCatalogLink({ section, brandLabel, filter, tyreSize, diskSize, }: Props) {
	const carSlug = `car-${ brandLabel }-${ filter.year }-${ filter.brand }-${ filter.model }-${ filter.modification }`;

	if(section === Section.Tires && tyreSize) {
		return `/catalog/${ section }/${ carSlug }/w-${ tyreSize.width }/h-${ tyreSize.height }/d-${ tyreSize.diameter }`;
	}

	if(section === Section.Disks && diskSize) {
		return `/catalog/${ section }/${ carSlug }/w-${ diskSize.width }/d-${ diskSize.diameter }/kr-${ diskSize.bolt_count }x${ diskSize.pcd }/et-${ diskSize.et }/dia-${ diskSize.dia }`;
	}

	return `/catalog/${ section }/${ carSlug }`;
}
