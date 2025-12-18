import {Listbox, ListboxItem} from "@heroui/react";
import { Link } from '@/shared/i18n/navigation';

export const ListboxWrapper = ({children}) => (
	<div className="absolute w-full max-w-[600px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
		{children}
	</div>
);

const items = [
	{
		key: "new",
		label: "New file",
	},
	{
		key: "copy",
		label: "Copy link",
	},
	{
		key: "edit",
		label: "Edit file",
	},
	{
		key: "delete",
		label: "Delete file",
	},
];


export function SearchResults() {
	return (
		<ListboxWrapper>
			<Listbox aria-label="Dynamic Actions" items={items} >
				{(item) => (
					<ListboxItem
						as={ Link }
						key={item.key}
						href={ '/search' }
						className={item.key === "delete" ? "text-danger" : ""}
						color={item.key === "delete" ? "danger" : "default"}
					>
						{item.label}
					</ListboxItem>
				)}
			</Listbox>
		</ListboxWrapper>
	)
}
