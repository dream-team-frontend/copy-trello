import actions from '../actionsNames';
import boardLists from './boardLists';

const board = (state = {}, action) => {
	switch (action.type) {
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