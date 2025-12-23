import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='container mx-auto px-4 py-5 min-h-[70vh]'>
			{ children }
		</div>
	)
}
