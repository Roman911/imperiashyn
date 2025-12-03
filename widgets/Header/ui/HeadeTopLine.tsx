import Contacts from '@/widgets/Contacts';

const TopLine = () => {
	return <div className='bg-black text-white'>
		<div className='container mx-auto flex justify-between py-1 px-4'>
			<Contacts />
			{/*<nav className='gap-2 lg:gap-x-7 items-center hidden lg:flex'>*/}
			{/*	{data?.header.map((item, index) => {*/}
			{/*		return <Link*/}
			{/*			key={index}*/}
			{/*			to={ `/page/${item.slug}` }*/}
			{/*			className='text-xs 2xl:text-sm font-medium uppercase'>*/}
			{/*			{ item.descriptions[lang].title }*/}
			{/*		</Link>*/}
			{/*	})}*/}
			{/*</nav>*/}
			{/*<div className='flex items-center'>*/}
			{/*	<Language/>*/}
			{/*</div>*/}
		</div>
	</div>
};

export default TopLine;
