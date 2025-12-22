import DOMPurify from 'isomorphic-dompurify';

export const HtmlContent = ({ htmlString }: { htmlString: string }) => {
	const sanitizedHtml = DOMPurify.sanitize(htmlString, {
		ADD_TAGS: [ 'iframe' ],
		ADD_ATTR: [ 'allow', 'allowfullscreen', 'frameborder', 'scrolling', 'loading', 'referrerpolicy' ]
	});
	return (
		<div
			className='text-white'
			dangerouslySetInnerHTML={ { __html: sanitizedHtml } }
		/>
	);
};