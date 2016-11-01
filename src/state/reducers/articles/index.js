import {
	ARTICLE_SET_ACTIVE,
	ARTICLES_REQUEST,
	ARTICLES_RECEIVE,
	ARTICLES_REQUEST_FAILURE
} from '../../action-types';

/**
 * This sets up the shape of the "articles" subtree of the redux store when the
 * app is first initialized.
 */
const initialState = {
	isFetching: false,
	items: [],
	activeArticle: false,
	errors: []
}

/**
 * articles reducer
 *
 * This is the main "articles" reducer that sets up the "articles" subtree of the redux store.
 * If any action is dispatched with the action.type that matches, the appropriate reducer will run,
 * but if no action.type matches, the state will not be modified
 *
 * Note: All reducer functions should be "pure" and "immutable"
 */
export default function articles( state = initialState, action ) {

	switch ( action.type ) {

		case ARTICLES_REQUEST:

			return Object.assign({}, state, {
				isFetching: true
			});

		case ARTICLES_RECEIVE:

			return Object.assign({}, state, {
				items: [ ...state.items, ...action.articles ]
			});

		case ARTICLES_REQUEST_FAILURE:

			return Object.assign({}, state, {
				isFetching: false,
				error: [ ...state.errors, ...action.error ]
			});

		case ARTICLE_SET_ACTIVE:

			return Object.assign({}, state, {
				isFetching: false,
				activeArticle: action.activeArticle
			});

		default:
			return state;

	}

}