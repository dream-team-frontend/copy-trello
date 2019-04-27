import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers'

function configureStore(preloadedState) {
	const store = createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(
			applyMiddleware(thunk, logger),
		)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
	}

	return store;
}

export default configureStore;