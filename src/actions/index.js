import actions from '../actionsNames';
import { v4 } from 'uuid';

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