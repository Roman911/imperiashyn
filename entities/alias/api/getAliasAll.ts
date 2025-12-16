export const getAliasAll = async () => {
	const res = await fetch(`${process.env.API_URL}/alias`, {
		cache: 'no-store',
	});

	return res.json();
};
