/**
 * Import the action types
 */
import {
    SETTINGS_UPDATE_SETTING
} from '../../action-types';

/**
 * This sets up the shape of the "settings" subtree of the redux store when the
 * app is first initialized.
 */
const initialState = {
	showDate: true,
    showSite: true,
    showExcerpt: true,
    items: [
        {
            name: 'Show Date',
            setting: 'showDate'
        },
        {
            name: 'Show Excerpt',
            setting: 'showExcerpt'
        },
        {
            name: 'Show Site',
            setting: 'showSite'
        }
    ]
}

/**
 * settings reducer
 *
 * This is the main "settings" reducer that sets up the "settings" subtree of the redux store.
 * If any action is dispatched with the action.type that matches, the appropriate reducer will run,
 * but if no action.type matches, the state will not be modified
 *
 * Note: All reducer functions should be "pure" and "immutable"
 */
function settings( state = initialState, action ) {

	switch ( action.type ) {

		/**
		 * For the action type SETTINGS_UPDATE_SETTING
		 *
		 * This updates the setting with the value that was passed in the action
		 */
		case SETTINGS_UPDATE_SETTING:
            return Object.assign({}, state, {
                [action.key]: action.value
            });

		// If the action.type doesn't match, return the unaltered state
		default:
			return state;

	}
}

export default settings;