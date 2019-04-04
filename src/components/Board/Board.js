import React, { Component } from 'react';
import './Board.scss';

class Board extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {name} = this.props;

		return (
			<div className="board">
				Board's {name}
			</div>
		)
	}
}

export default Board;