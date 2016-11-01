import {
    SITE_SET_ACTIVE
} from '../../action-types';

export function setActive( site ) {
    return {
        type: SITE_SET_ACTIVE,
        site: site
    }
}
