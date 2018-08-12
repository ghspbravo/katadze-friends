import * as resetPassword from '../actions/resetPassword'

const initialState = {
    message: undefined,
    errors: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case resetPassword.RESET_SUCCESS:
            return {
                message: action.payload.message,
                errors: {}
            }
        case resetPassword.RESET_FAILURE:
            return {
                message: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }
        default:
            return state
    }
}

export function message(state) {
    return state.message
}

export function errors(state) {
    return state.errors
}