import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface IInputTask {
	type: HTMLInputTypeAttribute | 'textarea';
	idName: string;
	title: string;
	value: string | number;
	onChange: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;
	className?: string;
	minLength?: number;
	required?: boolean;
}

export function InputTask({
	type,
	idName,
	title,
	value,
	onChange,
	className,
	minLength,
	required,
}: IInputTask) {
	return (
		<div className={className}>
			<div>
				<label htmlFor={idName} className='mb-1 block text-sm font-medium'>
					{title}
				</label>
				{type === 'textarea' ? (
					<textarea
						id={idName}
						name={idName}
						className='block w-full text-amber-50 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-slate-700/20 p-1'
						onChange={onChange}
						value={value}
						rows={4}
						minLength={minLength}
						required={required}
					/>
				) : (
					<input
						id={idName}
						type={type}
						name={idName}
						className='block w-full text-amber-50 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-slate-700/20 p-2'
						onChange={onChange}
						value={value}
						minLength={minLength}
						required={required}
					/>
				)}
			</div>
		</div>
	);
}
