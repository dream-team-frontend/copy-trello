import actions from '../actionsNames';
import { uuidv4 } from 'uuid';

export const addBoardList = (boardId, name, order) => ({
	type: actions.ADD_BOARD_LIST,
	id: uuidv4(),
	boardId,
	name,
	order,
});

export const addBoardListCards = (boardId, BoardListId, name, order) => ({
	type: actions.ADD_BOARD_LIST_CARD,
	id: uuidv4(),
	boardId,
	BoardListId,
	name,
	order,
});