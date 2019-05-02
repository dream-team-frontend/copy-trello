import React, { Component } from 'react';
import './AddCard.scss';

class AddCard extends Component {
    render() {
        return (
            <div className="add-card">
                <textarea className="add-card__textarea"
                          placeholder="Enter a title for this card…">
						</textarea>
                <button>Add card</button>
            </div>
        )
    }
}

export default AddCard;