import Image from 'next/image';

const width = 126;
const height = 76;

export function Logo() {
	return (
		<Image
			src="/logo.png"
			alt="logo"
			width={ width }
			height={ height }
		/>
	);
}
