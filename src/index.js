import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import initialStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
	rootReducer,
	(localStorage['copy-trello-store'])
		? JSON.parse(localStorage['copy-trello-store'])
		: initialStore
);

// TODO: Перенести подписку и сохранение состояния в middleware Redux
store.subscribe(() => {
	localStorage['redux-store'] = JSON.stringify(store.getState())
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
