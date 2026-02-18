'use client';

import { useEffect, useState } from 'react';
import createDOMPurify from 'dompurify';

export const HtmlContent = ({ htmlString, className }: { htmlString: string; className?: string; }) => {
	const [sanitizedHtml, setSanitizedHtml] = useState('');

	useEffect(() => {
		const DOMPurify = createDOMPurify(window);

		const clean = DOMPurify.sanitize(htmlString, {
			ADD_TAGS: ['iframe'],
			ADD_ATTR: [
				'allow',
				'allowfullscreen',
				'frameborder',
				'scrolling',
				'loading',
				'referrerpolicy',
			],
		});

		setSanitizedHtml(clean);
	}, [htmlString]);

	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
		/>
	);
};
