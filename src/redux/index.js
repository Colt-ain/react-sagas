import thunk from 'redux-thunk';
import logger from 'redux-logger';
import history from '../history';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
	const store = createStore(
		createRootReducer(history),
		compose(
			composeWithDevTools(applyMiddleware(
				routerMiddleware(history),
				thunk,
				logger
			))
		),
	);

	return store
}

export default configureStore();
