import { HTMLInputTypeAttribute } from 'react';

export interface IformStateInput {
	title: string;
	description: string;
	tags: string;
	budget_from: number;
	budget_to: number;
	deadline_days: number;
	number_of_reminders: number;
	private_content: string;
	budget_from_rules: number;
	budget_to_rules: number;
	deadline_days_rules: number;
	qty_freelancers: number;
}

export interface IformStateCheckBox {
	is_hard: boolean;
	all_auto_responses: boolean;
}

type InputTasks = {
	type: HTMLInputTypeAttribute | 'textarea';
	idName: keyof IformStateInput;
	title: string;
	className?: string;
	minLength?: number;
	required?: boolean;
}[];

type CheckBoxTasks = {
	idName: keyof IformStateCheckBox;
	title: string;
	descriptions?: string;
	className?: string;
}[];

export const StringInputs: InputTasks = [
	{
		type: 'text',
		idName: 'title',
		title: 'Заголовок:',
		minLength: 5,
		required: true,
	},
	{
		type: 'textarea',
		idName: 'description',
		title: 'Описание:',
		minLength: 5,
		required: true,
	},
	{
		type: 'text',
		idName: 'tags',
		title: 'Теги (через запятую):',
		minLength: 5,
	},
	{
		type: 'text',
		idName: 'private_content',
		title: 'Приватный контент',
		minLength: 5,
	},
] as const;

export const NumberInputs: InputTasks = [
	{
		type: 'number',
		idName: 'budget_from',
		title: 'Бюджет от:',
		required: true,
	},
	{ type: 'number', idName: 'budget_to', title: 'Бюджет до:', required: true },
	{
		type: 'number',
		idName: 'deadline_days',
		title: 'Срок выполнения (в днях):',
		required: true,
	},
	{
		type: 'number',
		idName: 'number_of_reminders',
		title: 'Количество напоминаний:',
		required: true,
	},
] as const;

export const NumberInputsRules: InputTasks = [
	{
		type: 'number',
		idName: 'budget_from_rules',
		title: 'Бюджет от:',
	},
	{
		type: 'number',
		idName: 'budget_to_rules',
		title: 'Бюджет до:',
		required: true,
	},
	{
		type: 'number',
		idName: 'deadline_days_rules',
		title: 'Срок выполнения (в днях):',
	},
	{
		type: 'number',
		idName: 'qty_freelancers',
		title: 'Количество фрилансеров:',
	},
] as const;

export const CheckBoxs: CheckBoxTasks = [
	{ idName: 'is_hard', title: 'Сложный' },
	{ idName: 'all_auto_responses', title: 'Автоответчик' },
];

export const initialStateInput: IformStateInput = {
	title: '',
	description: '',
	tags: '',
	budget_from: 1,
	budget_to: 1,
	deadline_days: 1,
	number_of_reminders: 1,
	private_content: '',
	budget_from_rules: 5000,
	budget_to_rules: 8000,
	deadline_days_rules: 5,
	qty_freelancers: 1,
};

export const initialStateCheckBox: IformStateCheckBox = {
	is_hard: false,
	all_auto_responses: false,
};
