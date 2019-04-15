import { connect } from 'react-redux';
import {Board} from '../components';
import {
	addBoardList,
	addBoardListCards,
} from '../actions'

const mapStateToProps = state =>
	({
		board: {...state.board},
	});

const mapDispatchToProps = dispatch =>
	({
		onAddBoardList(boardId, name, order) {
			dispatch(addBoardList(boardId, name, order))
		},
		onAddBoardListCard(boardId, boardListId, name, order) {
			dispatch(addBoardListCards(boardId, boardListId, name, order));
		},
	});

export const BoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);