import * as profile from '../actions/profile'
import { STATUS_SUCCESS, STATUS_ERROR, STATUS_PROCESSING } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case profile.USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload,

            }
        case profile.CREATE_TOUR_SUCCESS:
        case profile.CREATE_GID_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: STATUS_SUCCESS,
                errors: undefined
            }

        case profile.CREATE_TOUR_REQUEST:
        case profile.CREATE_GID_REQUEST:
            return {
                ...state,
                status: STATUS_PROCESSING,
            }

        case profile.USER_INFO_FAILURE:
        case profile.CREATE_GID_FAILURE:
        case profile.CREATE_TOUR_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}