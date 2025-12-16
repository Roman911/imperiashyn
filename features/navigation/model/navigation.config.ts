import { NavigationItem } from "./navigation.types";

export const MAIN_NAVIGATION: NavigationItem[] = [
	{
		id: "catalog",
		label: "menu.catalog",
		href: "/catalog",
	},
	{
		id: "tires",
		label: "menu.tires",
		href: "/tires",
	},
	{
		id: "disks",
		label: "menu.disks",
		href: "/disks",
	},
	{
		id: "contacts",
		label: "menu.contacts",
		href: "/contacts",
	},
];

export const TOP_NAVIGATION: NavigationItem[] = [
	{
		id: "about",
		label: "menu.about",
		href: "/about",
	},
	{
		id: "delivery",
		label: "menu.delivery",
		href: "/delivery",
	},
];