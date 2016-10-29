/**
 * Import the action types
 */
import {
    SETTINGS_UPDATE_SETTING
} from '../../action-types';

/**
 * updateSetting
 *
 * This sends a key/value with the action type SETTINGS_UPDATE_SETTING
 * Where the reducer will update the setting matching the key with the passed value
 */
export function updateSetting( key, value ){
    return {
        type: SETTINGS_UPDATE_SETTING,
        key,
        value
    }
}