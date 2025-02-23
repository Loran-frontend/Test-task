import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { createHardTask } from '../Api/FetchData';
import {
	CheckBoxs,
	initialStateCheckBox,
	initialStateInput,
	NumberInputs,
	StringInputs,
} from '../configTaskForm';
import { CheckBoxTask } from './CheckBoxTask';
import { InputTask } from './InputTask';
import { RulesTask } from './RulesTask';

export function FormTask() {
	const [token, setToken] = useState('');
	const [formStateInput, setFormStateInput] = useState(initialStateInput);
	const [formStateCheckBox, setFormStateCheckBox] =
		useState(initialStateCheckBox);

	useEffect(() => {
		const storedToken = localStorage.getItem('authToken');
		if (storedToken) {
			setToken(storedToken);
		}
		const apiToken = '317ad1fc-e0a9-11ef-a978-0242ac120007'; // ТОКЕН
		localStorage.setItem('apiToken', apiToken);
	}, [setToken]);

	function onChangeInput(
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) {
		const value = e.currentTarget.value;
		const name = e.currentTarget.name;
		setFormStateInput(prev => ({ ...prev, [name]: value }));
	}

	function onChangeCheckBox(e: ChangeEvent<HTMLInputElement>) {
		const name = e.currentTarget.name;
		const checked = e.currentTarget.checked;
		setFormStateCheckBox(prev => ({ ...prev, [name]: checked }));
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFormStateInput(initialStateInput);
		setFormStateCheckBox(initialStateCheckBox);

		const params = {
			title: formStateInput.title,
			description: formStateInput.description,
			tags: formStateInput.tags,
			budget_from: formStateInput.budget_from,
			budget_to: formStateInput.budget_to,
			deadline_days: formStateInput.deadline_days,
			number_of_reminders: formStateInput.number_of_reminders,
			private_content:
				formStateInput.private_content === ''
					? null
					: formStateInput.private_content,
			is_hard: formStateCheckBox.is_hard,
			all_auto_responses: formStateCheckBox.all_auto_responses,
			rules: {
				budget_from: formStateInput.budget_from_rules,
				budget_to: formStateInput.budget_to_rules,
				deadline_days: formStateInput.deadline_days_rules,
				qty_freelancers: formStateInput.qty_freelancers,
			},
		};

		try {
			const taskData = await createHardTask(params, token);
			alert(taskData.ok);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<form
			action=''
			className='w-[1000px] bg-amber-200 rounded-2xl flex flex-col gap-5 p-4 justify-center text-gray-700'
			onSubmit={onSubmit}
		>
			{StringInputs.map(i => (
				<InputTask
					{...i}
					key={i.idName}
					value={formStateInput[i.idName]}
					onChange={onChangeInput}
				/>
			))}
			<div className='grid grid-cols-2 gap-1'>
				{NumberInputs.map(i => (
					<InputTask
						{...i}
						key={i.idName}
						value={formStateInput[i.idName]}
						onChange={onChangeInput}
					/>
				))}
			</div>

			<div className='mx-auto max-w-xs flex gap-10'>
				{CheckBoxs.map(i => (
					<CheckBoxTask
						{...i}
						key={i.idName}
						checked={formStateCheckBox[i.idName]}
						onChange={onChangeCheckBox}
					/>
				))}
			</div>
			<RulesTask formStateInput={formStateInput} onChange={onChangeInput} />

			<button
				type='submit'
				className='bg-slate-600/80 hover:bg-slate-600/70 rounded-2xl w-1/2 mx-auto cursor-pointer text-slate-300'
			>
				Опубликовать
			</button>
		</form>
	);
}
