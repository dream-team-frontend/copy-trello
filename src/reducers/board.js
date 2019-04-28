import { actions } from '../actions';
import boardLists from './boardLists';

const board = (state = {}, action) => {
	switch (action.type) {
		case actions.FETCH_BOARD_SUCCESS:
			return {
				...action.payload.board,
			};
		case actions.ADD_BOARD_LIST:
			return {
					...state,
					lists: boardLists(state.lists, action),
				};
		case actions.ADD_BOARD_LIST_CARD:
			return {
					...state,
					lists: boardLists(state.lists, action),
				};
		default:
			return state;
	}
};

export default board;