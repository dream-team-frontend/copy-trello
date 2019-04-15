import actions from '../actionsNames';

const boardListCard = (state = {}, action) => {
	switch (action.type) {
		case actions.ADD_BOARD_LIST_CARD:
			return {
				id: action.id,
				name: action.name,
				description: '',
				order: action.order,
				activity: [],
				members: [],
			};
		default:
			return state;
	}
};

export default boardListCard;