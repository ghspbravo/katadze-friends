import * as profile from '../actions/profile'

export default (state = {}, action) => {
    switch (action.type) {
        case profile.USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        case profile.CREATE_GID_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        case profile.USER_INFO_FAILURE:
        case profile.CREATE_GID_FAILURE:
            return {
                ...state,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}