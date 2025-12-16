'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from '@heroui/toast';
import { AppStore, createStore } from '@/shared/store/createStore';

export default function StoreProvider({ children }: { children: ReactNode }) {
	const storeRef = useRef<AppStore | null>(null);

	if(!storeRef.current) storeRef.current = createStore();

	return (
		<Provider store={ storeRef.current }>
			<ToastProvider placement='top-right' toastProps={ { timeout: 3000 } }/>
			{ children }
		</Provider>
	);
};
