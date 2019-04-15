import actions from '../actionsNames';
import board from "./board";

const boards = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_BOARD_LIST:
			return state.map(
				item => board(item, action)
			);
		case actions.ADD_BOARD_LIST_CARD:
			return state.map(
				item => board(item, action)
			);
		default:
			return state;
	}
};

export default boards;