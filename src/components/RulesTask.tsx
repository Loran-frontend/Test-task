import { ChangeEvent } from 'react';
import { IformStateInput, NumberInputsRules } from '../configTaskForm';
import { InputTask } from './InputTask';

export function RulesTask({
	onChange,
	formStateInput,
}: {
	onChange: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;
	formStateInput: IformStateInput;
}) {
	return (
		<div className='divide-y divide-gray-100 '>
			<details className='group'>
				<summary className='flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium'>
					Правила задачи
					<div className=''>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='block h-5 w-5 transition-all duration-300 group-open:rotate-180'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					</div>
				</summary>
				<div className='mx-auto flex gap-10'>
					{NumberInputsRules.map(i => (
						<InputTask
							idName={i.idName}
							onChange={onChange}
							title={i.title}
							type={i.type}
							value={formStateInput[i.idName]}
							key={i.idName}
						/>
					))}
				</div>
			</details>
		</div>
	);
}
