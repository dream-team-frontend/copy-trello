import { actions } from '../actions';
import boardListCard from './boardListCard';

const boardListCards = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_BOARD_LIST_CARD:
			return [
				...state,
				boardListCard({}, action),
			];
		default:
			return state;
	}
};

export default boardListCards;