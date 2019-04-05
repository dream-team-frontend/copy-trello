import React, { Component } from 'react';
import './BoardListCard.scss';

class BoardListCard extends Component {
	render() {
		const {name} = this.props;

		return (
			<div className="board-list-card">
					<div className="board-list-card__header">
						<div className="board-list-card__title">
							{name}
						</div>
					</div>
					<div className="board-list-card__footer">
						<div className="board-list-card__badges">
						</div>
						<div className="board-list-card__members">
						</div>
					</div>
			</div>
		)
	}
}

export default BoardListCard;