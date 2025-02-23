import { ChangeEvent } from 'react';

export interface ICheckBoxTask {
	idName: string;
	title: string;
	description?: string;
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function CheckBoxTask({
	title,
	description,
	idName,
	checked,
	onChange,
}: ICheckBoxTask) {
	return (
		<div className='space-y-3'>
			<div className='flex space-x-2'>
				<div className='flex h-5 items-center'>
					<input
						type='checkbox'
						id={idName}
						name={idName}
						className='h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 cursor-pointer'
						checked={checked}
						onChange={onChange}
					/>
				</div>
				<label htmlFor={idName} className='text-sm'>
					<div className='font-medium text-gray-700 cursor-pointer'>
						{title}
					</div>
					{description ? <p className='text-gray-500'>{description}</p> : ''}
				</label>
			</div>
		</div>
	);
}
