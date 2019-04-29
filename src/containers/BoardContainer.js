import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {
	fetchBoard,
	addBoardList,
	addBoardListCards,
} from '../actions';

class BoardContainer extends Component {
	componentDidMount() {
		this.props.fetchBoard(1);
	}

	render() {
		const { board, onAddBoardList, onAddBoardListCard } = this.props;

		return (
			<Board board={board}
			       onAddBoardList={onAddBoardList}
			       onAddBoardListCard={onAddBoardListCard} />
		)
	}
}

const mapStateToProps = state =>
	({
		board: {...state.board},
	});

const mapDispatchToProps = dispatch =>
	({
		fetchBoard(id) {
			dispatch(fetchBoard(id));
		},
		onAddBoardList(boardId, name, order) {
			dispatch(addBoardList(boardId, name, order))
		},
		onAddBoardListCard(boardId, boardListId, name, order) {
			dispatch(addBoardListCards(boardId, boardListId, name, order));
		},
	});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer);