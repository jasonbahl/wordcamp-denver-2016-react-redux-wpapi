import {
    SITE_SET_ACTIVE
} from '../../action-types';


/**
 * This sets up the shape of the "sites" subtree of the redux store when the
 * app is first initialized.
 */
const initialState = {
	items: [
        {
            id: 3,
            name: 'A Day of Rest',
            url: 'https://adayofrest.hm/boston-2017',
            timezone: 'America/New_York'
        },
        {
            id: 2,
            name: 'Caldera WP',
            url: 'https://calderawp.com',
            timezone: 'America/New_York'
        },
        {
            id: 0,
            name: 'Post Status',
            url: 'https://poststatus.com',
            timezone: 'America/Winnipeg'
        },
        {
            id: 1,
            name: 'WP Shout',
            url: 'https://www.wpshout.com',
            timezone: 'America/Denver'
        }
    ],
    activeSite: {}
}

/**
 * settings reducer
 *
 * This is the main "sites" reducer that sets up the "sites" subtree of the redux store.
 * If any action is dispatched with the action.type that matches, the appropriate reducer will run,
 * but if no action.type matches, the state will not be modified
 *
 * Note: All reducer functions should be "pure" and "immutable"
 */
function sites( state = initialState, action ) {

	switch ( action.type ) {

        case SITE_SET_ACTIVE:
            return Object.assign({}, state, {
                activeSite: action.site
            });

		default:
			return state;

	}
}

export default sites;