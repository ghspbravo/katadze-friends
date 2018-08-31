import * as ticket from '../actions/ticket'

export default (state = {}, action) => {
    switch (action.type) {
        case ticket.FAQ_SUCCESS:
        case ticket.PARTNER_SUCCESS:
        case ticket.RKV_SUCCESS:
            return {
                ...action.payload,
                success: true
            }

        case ticket.FAQ_FAILURE:
        case ticket.PARTNER_FAILURE:
        case ticket.RKV_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}