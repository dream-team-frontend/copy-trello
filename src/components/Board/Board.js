import React, { Component } from 'react';
import BoardList from '../BoardList';
import './Board.scss';

class Board extends Component {
	renderBoardLists() {
		const {board, onAddBoardListCard} = this.props;

		return board.lists.map((list, index) => (
			<BoardList key={index}
			           boardId={board.id}
			           onAddBoardListCard={onAddBoardListCard}
			           {...list}
			/>
		));
	}

	render() {
		const {board, name} = this.props;

		return (
			<div className="board">
				<div className="board__header">
					<div className="board__name">Board: {name}</div>
				</div>
				<div className="board__lists">
					{board.lists && this.renderBoardLists()}
				</div>
			</div>
		)
	}
}

export default Board;