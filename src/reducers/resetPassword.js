import * as resetPassword from '../actions/resetPassword'
import { STATUS_PROCESSING, STATUS_SUCCESS, STATUS_ERROR } from '../actions';

const initialState = {
    message: undefined,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case resetPassword.RESET_SUCCESS:
        case resetPassword.RESET_CONFIRM_SUCCESS:
            return {
                message: action.payload.message,
                status: STATUS_SUCCESS
            }

        case resetPassword.RESET_CONFIRM_REQUEST:
        case resetPassword.RESET_REQUEST:
            return {
                status: STATUS_PROCESSING
            }

        case resetPassword.RESET_FAILURE:
        case resetPassword.RESET_CONFIRM_FAILURE:
            return {
                status: STATUS_ERROR,
                message: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }
        default:
            return state
    }
}