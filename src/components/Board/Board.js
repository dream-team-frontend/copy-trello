import React, { Component } from 'react';
import {BoardList} from '../../components';
import './Board.scss';

class Board extends Component {
	constructor(props) {
		super(props);

		this.renderBoardLists = this.renderBoardLists.bind(this);
	}

	renderBoardLists() {
		const {lists} = this.props;

		return lists.map((list, index) => <BoardList key={index} {...list} />);
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