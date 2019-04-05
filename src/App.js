import React, {Component} from 'react';
import {Board} from './components';
import store from './store';
import './App.css';

class App extends Component {
	render() {
		const board = store.boards[0];

		return (
			<div className="app">
				<Board {...board} />
			</div>
		);
	}
}

export default App;
