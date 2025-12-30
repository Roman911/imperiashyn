'use client';

import { useEffect } from 'react';
import { Link } from '@/shared/i18n/navigation';
import { Badge } from '@heroui/react';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { showProgress } from '@/features/progress/model/progress.slice';

import { initBookmarks } from '@/features/bookmarks/model/initFromStorage';
import { initComparison } from '@/features/comparison/model/initFromStorage';
import { initCart } from '@/features/cart/model/initFromStorage';

import * as Icons from '@/shared/ui/icons';
import { Button } from '@/shared/ui/button';

export function HeaderActions() {
	const dispatch = useAppDispatch();
	const bookmarksCount = useAppSelector(state => state.bookmarksReducer.bookmarksItems);
	const comparisonCount = useAppSelector(state => state.comparisonReducer.comparisonItems);
	const cartCount = useAppSelector(state => state.cartReducer.cartItems);

	useEffect(() => {
		initBookmarks(dispatch);
		initComparison(dispatch);
		initCart(dispatch);
	}, [ dispatch ]);

	return (
		<div className="flex gap-1">
			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/comparison"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ comparisonCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ comparisonCount.length }
					isInvisible={ !comparisonCount }
					classNames={{ badge: comparisonCount.length ? '' : 'text-white bg-natural-400' }}
				>
					<Icons.LibraIcon />
				</Badge>
			</Button>

			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/bookmarks"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ bookmarksCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ bookmarksCount.length }
					isInvisible={ !bookmarksCount }
					classNames={{ badge: bookmarksCount.length ? '' : 'text-white bg-natural-400' }}
				>
					<Icons.HeartIcon />
				</Badge>
			</Button>

			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/cart"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ cartCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ cartCount.length }
					isInvisible={ !cartCount }
					classNames={{ badge: cartCount.length ? '' : 'text-white bg-natural-400' }}
				>
					<Icons.CartIcon />
				</Badge>
			</Button>
		</div>
	);
}
