import React, { Component } from 'react';
import {BoardListCard} from '../../components';
import './BoardList.scss';

class BoardList extends Component {
	constructor(props) {
		super(props);

		this.renderBoardListCard = this.renderBoardListCard.bind(this);
	}

	renderBoardListCard() {
		const {cards} = this.props;

		return cards.map((card, index) => <BoardListCard key={index} {...card} />);
	}

	render() {
		const {name} = this.props;

		return (
			<div className="board-list">
				<div className="board-list__content">
					<div className="board-list__header">
						<div className="board-list__title">
							{name}
						</div>
					</div>
					<div className="board-list__cards">
						{this.renderBoardListCard()}
					</div>
				</div>
			</div>
		)
	}
}

export default BoardList;