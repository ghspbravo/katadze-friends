import * as ticket from '../actions/ticket'
import { STATUS_SUCCESS, STATUS_PROCESSING, STATUS_ERROR } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case ticket.FAQ_SUCCESS:
        case ticket.PARTNER_SUCCESS:
        case ticket.RKV_SUCCESS:
            return {
                status: STATUS_SUCCESS
            }

        case ticket.FAQ_REQUEST:
        case ticket.PARTNER_REQUEST:
        case ticket.RKV_REQUEST: 
            return {
                status: STATUS_PROCESSING
            }

        case ticket.FAQ_FAILURE:
        case ticket.PARTNER_FAILURE:
        case ticket.RKV_FAILURE:
            return {
                status: STATUS_ERROR,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}