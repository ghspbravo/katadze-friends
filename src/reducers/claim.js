import * as claim from '../actions/claim'
import { STATUS_SUCCESS, STATUS_PROCESSING, STATUS_ERROR } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        
        case claim.CLAIM_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                status: STATUS_SUCCESS,
            }

        case claim.CLAIM_INFO_SUCCESS:
            return {
                ...state,
                info: action.payload,
                status: STATUS_SUCCESS,
            }

        case claim.GID_CLAIM_SUCCESS:
        case claim.CLAIM_CANCEL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: STATUS_SUCCESS
            }
        case claim.GID_CLAIM_REQUEST:
        case claim.CLAIM_LIST_REQUEST:
        case claim.CLAIM_INFO_REQUEST:
        case claim.CLAIM_CANCEL_REQUEST:
            return {
                ...state,
                ...action.payload,
                status: STATUS_PROCESSING
            }

        case claim.GID_CLAIM_FAILURE:
        case claim.CLAIM_LIST_FAILURE:
        case claim.CLAIM_INFO_FAILURE:
        case claim.CLAIM_CANCEL_FAILURE:
            return {
                ...state,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
                status: STATUS_ERROR
            }

        default:
            return state
    }
}