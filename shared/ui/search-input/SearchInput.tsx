import { ChangeEvent, FormEvent, ReactNode } from 'react';
import { Input } from '@heroui/react';

interface Props {
	value: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	endContent?: ReactNode;
}

export function SearchInput({
															value,
															placeholder,
															onChange,
															onSubmit,
															endContent,
														}: Props) {
	return (
		<form className="w-full" onSubmit={onSubmit}>
			<Input
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				type="search"
				size="sm"
				radius="sm"
				variant="bordered"
				classNames={{
					base: 'max-w-full h-11',
					mainWrapper: 'h-full',
					input: 'text-md',
					inputWrapper:
						'h-full font-normal text-default-500 w-full pl-4 pr-0 border-gray-200 dark:border-gray-500',
				}}
				endContent={endContent}
			/>
		</form>
	);
}