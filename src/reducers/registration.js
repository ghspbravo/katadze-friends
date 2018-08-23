import * as registration from '../actions/registration'

const initialState = {
    id: undefined,
    errors: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case registration.REGISTRATION_SUCCESS:
            return {
                id: action.payload.id,
                errors: {}
            }
        case registration.REGISTRATION_FAILURE:
            return {
                id: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }
        default:
            return state
    }
}

export function isRegistered(state) {
    return typeof state.id === 'undefined' ? false : true
}

export function errors(state) {
    return state.errors
}