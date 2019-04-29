import board from "./board";
import { actions } from '../actions';

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

const boards = (state, action) => {

	if (state === undefined) {
		return {
			books: [],
			loading: true,
			error: null
		};
	}

	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				books: [],
				loading: true,
				error: null
			};

		case 'FETCH_BOOKS_SUCCESS':
			return {
				books: action.payload,
				loading: false,
				error: null
			};

		case 'FETCH_BOOKS_FAILURE':
			return {
				books: [],
				loading: false,
				error: action.payload
			};

		default:
			return state.bookList;
	}
};

export default boards;
