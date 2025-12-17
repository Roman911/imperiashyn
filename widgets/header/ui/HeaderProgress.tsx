'use client';

import { Progress } from '@heroui/react';
import { useAppSelector } from '@/shared/hooks/redux';

const HeaderProgress = () => {
	const { progress } = useAppSelector(state => state.progressReducer);

	if (!progress) return null;

	return (
		<div className="fixed top-0 left-0 w-full">
			<Progress color='primary' isIndeterminate aria-label="Loading..." size="sm" />
		</div>
	);
};

export default HeaderProgress;
