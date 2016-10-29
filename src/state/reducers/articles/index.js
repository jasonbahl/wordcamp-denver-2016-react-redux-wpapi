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
function articles( state = initialState, action ) {

	switch ( action.type ) {

		default:
			return state;

	}
}

export default articles;