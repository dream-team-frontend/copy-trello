import { actions } from '../actions';
import boardListCards from './boardListCards';

const boardList = (state = {}, action) => {
	switch (action.type) {
		case actions.ADD_BOARD_LIST:
			return {
				id: action.id,
				name: action.name,
				order: action.order,
				cards: [],
				members: [],
			};
		case actions.ADD_BOARD_LIST_CARD:
			return (state.id !== action.boardListId)
				? state
				: {
					...state,
					cards: boardListCards(state.cards, action),
				};
		default:
			return state;
	}
};

export default boardList;