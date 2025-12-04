import type { FC, ReactNode } from 'react';

interface LinkTelProps {
	children: ReactNode;
	url: string;
	type?: string;
}

const LinkTel: FC<LinkTelProps> = ({ children, url, type = 'tel' }) => (
	<a href={ `${ type }:${ url }` }>
		{ children }
	</a>
);

export default LinkTel;
