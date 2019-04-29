import React, { Component } from 'react';
import BoardListCard from '../BoardListCard';
import './BoardList.scss';

class BoardList extends Component {
	constructor(props) {
		super(props);

		this.newCardName = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	renderBoardListCard() {
		const {cards} = this.props;

		return cards.map((card, index) => <BoardListCard key={index} {...card} />);
	}

	handleClick() {
		const {boardId, id, onAddBoardListCard} = this.props;

		onAddBoardListCard(boardId, id, this.newCardName.current.value, 0);
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
					<div className="board-list__footer">
						<textarea className="board-list-card"
						          ref={this.newCardName}
						          style={{width: "100%"}}
						          placeholder="Enter a title for this card…">
						</textarea>
						<button onClick={this.handleClick}>Add card</button>
					</div>
				</div>
			</div>
		)
	}
}

export default BoardList;