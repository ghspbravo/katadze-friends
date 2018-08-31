import * as resetPassword from '../actions/resetPassword'

const initialState = {
    message: undefined,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case resetPassword.RESET_SUCCESS:
        case resetPassword.RESET_CONFIRM_SUCCESS:
            return {
                message: action.payload.message,
                success: true
            }

        case resetPassword.RESET_FAILURE:
        case resetPassword.RESET_CONFIRM_FAILURE:
            return {
                message: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }
        default:
            return state
    }
}