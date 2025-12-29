import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';
import { Layout } from '@/shared/ui/layout/Layout';

interface Props {
	title: string;
	href: string;
	content: string;
	meta_h1: string;
}

export function StaticPage({ title, href, content, meta_h1 }: Props) {
	const path = [
		{
			title: title,
			href: href,
		}
	];

	return (
		<Layout size='lg'>
			<Breadcrumbs path={ path } />
			<Title title={ meta_h1 } />
			<HtmlContent htmlString={ content } />
		</Layout>
	)
}
