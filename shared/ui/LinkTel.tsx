import { FC } from 'react';

interface LinkTelProps {
	title: string;
	url: string;
	type?: string;
}

const LinkTel: FC<LinkTelProps> = ({ title, url, type = 'tel' }) => (
	<a href={ `${ type }:${ url }` }>
		{ title }
	</a>
);

export default LinkTel;
