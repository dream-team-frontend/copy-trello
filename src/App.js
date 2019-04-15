import React, {Component} from 'react';
import {BoardContainer} from './containers/BoardContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<BoardContainer />
			</div>
		);
	}
}

export default App;
