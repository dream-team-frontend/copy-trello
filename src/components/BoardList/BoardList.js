import React, { Component } from 'react';
import './BoardList.scss';

class BoardList extends Component {
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
						Board list's {name}
					</div>
				</div>
			</div>
		)
	}
}

export default BoardList;