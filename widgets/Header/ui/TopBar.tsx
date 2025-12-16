import TopNavigation from '@/features/navigation/ui/TopNavigation';
import type { AliasAll } from '@/shared/types/alias';

interface Props {
	alias: AliasAll;
}

export default function TopBar({ alias }: Props) {
	return (
		<div>
			<TopNavigation alias={ alias } />
		</div>
	)
};
