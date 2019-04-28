import { v4 } from 'uuid';
import TrelloService from "../services/TrelloService";

// TODO: Временно класс сервиса создан в actions.
// В будущем найти ему более подходящее место.
// Скорее всего нужно будет позаимствовать подход использования
// api через middleware store как в
// примере real-world (https://github.com/reduxjs/redux/blob/master/examples/real-world/src/middleware/api.js)

const trelloService = new TrelloService();

const actions = {
	ADD_BOARD_LIST: 'ADD_BOARD_LIST',
	ADD_BOARD_LIST_CARD: 'ADD_BOARD_LIST_CARD',
	FETCH_BOARD_REQUEST: 'FETCH_BOARD_REQUEST',
	FETCH_BOARD_FAILURE: 'FETCH_BOARD_FAILURE',
	FETCH_BOARD_SUCCESS: 'FETCH_BOARD_SUCCESS',
	FETCH_BOARDS_REQUEST: 'FETCH_BOARDS_REQUEST',
	FETCH_BOARDS_FAILURE: 'FETCH_BOARDS_FAILURE',
	FETCH_BOARDS_SUCCESS: 'FETCH_BOARDS_SUCCESS',
};

export const addBoardList = (boardId, name, order) => ({
	type: actions.ADD_BOARD_LIST,
	id: v4(),
	boardId,
	name,
	order,
});

export const addBoardListCards = (boardId, boardListId, name, order) => ({
	type: actions.ADD_BOARD_LIST_CARD,
	id: v4(),
	boardId,
	boardListId,
	name,
	order,
});

const boardRequested = () => {
	return {
		type: actions.FETCH_BOARD_REQUEST,
	};
};

const boardLoaded = (board) => {
	return {
		type: actions.FETCH_BOARD_SUCCESS,
		payload: board,
	};
};

const boardError = (error) => {
	return {
		type: actions.FETCH_BOARD_FAILURE,
		payload: error,
	};
};

const boardsRequested = () => {
	return {
		type: actions.FETCH_BOARDS_REQUEST,
	};
};

const boardsLoaded = (boards) => {
	return {
		type: actions.FETCH_BOARDS_SUCCESS,
		payload: boards,
	};
};

const boardsError = (error) => {
	return {
		type: actions.FETCH_BOARDS_FAILURE,
		payload: error,
	};
};

const fetchBoard = (id) => (dispatch) => {
	dispatch(boardRequested());
	trelloService.getBoard(id)
		.then((data) => dispatch(boardLoaded(data)))
		.catch((error) => dispatch(boardError(error)));
};

const fetchBoards = () => (dispatch) => {
	dispatch(boardsRequested());
	trelloService.getBoards()
		.then((data) => dispatch(boardsLoaded(data)))
		.catch((error) => dispatch(boardsError(error)));
};

export {
	actions,
	fetchBoard,
	fetchBoards,
};