const store = {
	boards: [
		{
			id: 321312,
			name: 'Аналог трелло',
			lists: [{
				id: 32344121,
				name: 'Backlog',
				order: 0,
				cards: [{
					id: 1,
					name: 'Подключить ESLint в webpack config',
					description: '',
					order: 0,
					activity: [],
					members: [],
				}, {
					id: 2,
					name: 'Описать модели сущностей',
					description: 'Создать описание для моделей таких сущностей как доска, колонка, карточка и т.д.',
					order: 1,
					activity: [],
					members: [],
				}],
			}, {
				id: 32344122,
				name: 'Sprint week',
				order: 1,
				cards: [{
					id: 3,
					name: 'Бойлерплейт с react + webpack',
					description: '',
					order: 0,
					activity: [],
					members: [],
				}],
			}, {
				id: 32344123,
				name: 'Done',
				order: 2,
				cards: [{
					id: 4,
					name: 'Система ветвления git',
					description: 'Система ветвления git\n' +
					'- Основная ветка master\n' +
					'- Для реализации фичи делаем отдельную ветку\n' +
					'- Название ветки в свободной форме, например \'component-column\'\n' +
					'- После завершение фичи создаем pull request\n' +
					'- В телеграмме тегаем участников, чтобы смогли отревьювить\n' +
					'- Когда все участники отревьювили, pull request мержиться в master\n' +
					'- Старую ветку на своё усмотрение, можно удалить, можно оставить',
					order: 0,
					activity: [],
					members: [],
				}],
			}],
		}
	]
};

export default store;