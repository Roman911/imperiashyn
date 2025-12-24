export function Article({ sku }: { sku: string }) {
	return (
		<div className='text-sm text-gray-500 mb-1 md:mb-2.5'>
			<span>Артикул: </span><span>{ sku }</span>
		</div>
	)
}
