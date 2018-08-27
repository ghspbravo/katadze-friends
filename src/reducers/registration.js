import * as registration from '../actions/registration'

const initialState = {
    token: undefined,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case registration.REGISTRATION_SUCCESS:
            return {
                token: action.payload.token,
            }
        case registration.ACTIVATE_SUCCESS:
        case registration.ACTIVATE_CONFIRM_SUCCESS:
            return {
                message: action.payload.message
            }

        case registration.ACTIVATE_CONFIRM_FAILURE:
        case registration.ACTIVATE_FAILURE:
        case registration.REGISTRATION_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}

export function isRegistered(state) {
    return typeof state.token === 'undefined' ? false : true
}

export function getRegistrationToken(state) {
    return state.token
}