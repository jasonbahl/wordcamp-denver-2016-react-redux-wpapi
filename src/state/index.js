/**
 * External Dependencies
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

/**
 * State reducers
 *
 * These reducers make up the subtrees of the Rexux store
 */
import articles from './reducers/articles';
import settings from './reducers/settings';
import sites from './reducers/sites';

/**
 * Combine all our reducers into one rootReducer
 * This creates all the subtrees within the state tree, where
 * each subtree has it's own reducers
 */
const rootReducer = combineReducers({
	articles,
	settings,
	sites,
	routing: routerReducer
});

/**
 * Create the logger middleware
 */
const loggerMiddleware = createLogger();

/**
 * This configures the store, and applies thunk and logger middlewares
 * Additionally, this sets up support for the devToolsExtension
 */
export default function configureStore( initialState = {} ) {

    return createStore( rootReducer, initialState, compose(
        applyMiddleware( thunk, loggerMiddleware ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

}