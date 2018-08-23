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

        case profile.CREATE_GID_FAILURE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}