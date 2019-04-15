import React, { Component } from 'react';
import {BoardList} from '../../components';
import './Board.scss';

class Board extends Component {
	renderBoardLists() {
		const {board} = this.props;

		return board.lists.map((list, index) => <BoardList key={index} {...list} />);
	}

	render() {
		const {name} = this.props;

		return (
			<div className="board">
				<div className="board__header">
					<div className="board__name">Board: {name}</div>
				</div>
				<div className="board__lists">
					{this.renderBoardLists()}
				</div>
			</div>
		)
	}
}

export default Board;