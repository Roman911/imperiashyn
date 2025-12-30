'use client';

import { useCallback, useState } from 'react';

export function useSectionMenuReset(delay = 100) {
	const [ reset, setReset ] = useState(false);

	const triggerReset = useCallback(() => {
		setReset(true);
		setTimeout(() => setReset(false), delay);
	}, [ delay ]);

	return { reset, triggerReset };
}
