import { useCallback } from 'react';
import { usePathname } from "@/shared/i18n/navigation";
import { useAppDispatch } from '@/shared/hooks/redux';
import { setProgress } from '@/widgets/Header/store/progressSlice';

export const useNavigationProgress = () => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const handleNavigation = useCallback(
		(href: string) => {
			if (pathname !== href) {
				dispatch(setProgress(true));
			}
		},
		[pathname, dispatch]
	);

	return { handleNavigation };
};
