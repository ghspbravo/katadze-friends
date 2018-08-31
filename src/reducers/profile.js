import * as profile from '../actions/profile'

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
                success: true,
                errors: undefined
            }

        case profile.USER_INFO_FAILURE:
        case profile.CREATE_GID_FAILURE:
        case profile.CREATE_TOUR_FAILURE:
            return {
                ...state,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}