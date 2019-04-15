import actions from '../actionsNames';
import { uuidv4 } from 'uuid';

export const addBoardListCards = (boardId, BoardListId, name, order) => ({
	type: actions.ADD_BOARD_LIST_CARD,
	id: uuidv4(),
	boardId,
	BoardListId,
	name,
	order,
});