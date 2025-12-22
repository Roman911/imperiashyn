'use client';

import Image from 'next/image';
import { EmailIcon } from '@/shared/ui/icons';
import { Link } from '@/shared/ui/link';
import type { ConfigSettings } from '@/shared/types/settings';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';

interface Props {
	settings: ConfigSettings;
}

export function FooterContacts({ settings }: Props) {
	const lang = useLanguage();
	const locale = settings.locales[lang];

	return (
		<div>
			<div className="flex flex-col gap-5 mt-5">
				{ locale.phones.map((item, index) =>
					item.phone ? (
						<Link
							key={ index }
							size="sm"
							href={ `tel:${ item.url }` }
							className="flex-row-reverse justify-end text-white gap-2.5"
							showAnchorIcon
							anchorIcon={
								<Image
									width={ 20 }
									height={ 20 }
									src={ `/icons/${ item.operator }-logo.svg` }
									alt={ item.operator }
								/>
							}
						>
							{ item.phone }
						</Link>
					) : null
				) }

				<Link
					size="sm"
					href={ `mailto:${ locale.email }` }
					className="flex-row-reverse justify-end text-white gap-2.5"
					showAnchorIcon
					anchorIcon={ <EmailIcon className="fill-white"/> }
				>
					{ locale.email }
				</Link>

				<HtmlContent htmlString={ settings.locales[lang].open || '' }/>
				<HtmlContent htmlString={ settings.locales[lang].address || '' }/>
			</div>
		</div>
	);
}
