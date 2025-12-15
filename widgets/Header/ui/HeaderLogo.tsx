import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setProgress } from '../store/progressSlice';

const width = 185;
const height = 60;

const HeaderLogo = () => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const handleClick = () => {
		if(pathname !== '/') {
			dispatch(setProgress(true));
		}
	};

	const commonProps = {
		href: '/',
		onClick: handleClick,
		className: 'logo',
	};

	return (
		<Link { ...commonProps } className='logo max-w-40 md:max-w-48 lg:w-auto'>
			<Image
				src='/logo.svg'
				alt='logo'
				width={ width }
				height={ height }
				loading='eager'
			/>
		</Link>
	)
};

export default HeaderLogo;
