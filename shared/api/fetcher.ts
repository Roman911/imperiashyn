import { DEFAULT_HEADERS } from "./headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
	endpoint: string,
	options?: RequestInit,
): Promise<T> {
	const res = await fetch(`${ API_URL }${ endpoint }`, {
		headers: DEFAULT_HEADERS,
		...options,
	});

	if(!res.ok) {
		throw new Error(`API error: ${ res.status }`);
	}

	return res.json();
}
