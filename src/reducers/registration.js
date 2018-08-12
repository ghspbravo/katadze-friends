import * as registration from '../actions/registration'

const initialState = {
    username: undefined,
    errors: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case registration.REGISTRATION_SUCCESS:
            return {
                username: action.payload.username,
                errors: {}
            }
        case registration.REGISTRATION_FAILURE:
            return {
                username: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }
        default:
            return state
    }
}

export function username(state) {
    return state.username
}

export function isRegistered(state) {
    return typeof state.username !== 'undefined'
}

export function errors(state) {
    return state.errors
}