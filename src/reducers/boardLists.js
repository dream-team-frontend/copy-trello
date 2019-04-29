import { actions } from '../actions';
import boardList from './boardList';

const boardLists = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_BOARD_LIST:
			return [
				...state,
				boardList({}, action),
			];
		case actions.ADD_BOARD_LIST_CARD:
			return state.map(
				item => boardList(item, action)
			);
		default:
			return state;
	}
};

export default boardLists;