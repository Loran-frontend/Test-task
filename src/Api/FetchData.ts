export interface iParams {
	title: string;
	description: string;
	tags: string;
	budget_from: number;
	budget_to: number;
	deadline_days: number;
	number_of_reminders: number;
	private_content: string | null;
	is_hard: boolean;
	all_auto_responses: boolean;
	rules: {
		budget_from: number;
		budget_to: number;
		deadline_days: number;
		qty_freelancers: number;
	};
}

export async function createHardTask(params: iParams, token: string) {
	const baseUrl =
		'https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask';

	const encodedTitle = encodeURIComponent(params.title);
	const encodedDescription = encodeURIComponent(params.description);
	const encodedTags = encodeURIComponent(params.tags);
	const encodedRules = encodeURIComponent(JSON.stringify(params.rules));

	const url = `${baseUrl}?token=${token}&title=${encodedTitle}&description=${encodedDescription}&tags=${encodedTags}&budget_from=${params.budget_from}&budget_to=${params.budget_to}&deadline=${params.deadline_days}&reminds=${params.number_of_reminders}&all_auto_responses=${params.all_auto_responses}&rules=${encodedRules}`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при создании задачи:', error);
		throw error;
	}
}
