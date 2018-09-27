import * as live from '../actions/live'
import { STATUS_SUCCESS, STATUS_PROCESSING, STATUS_ERROR } from '../actions';

export default (state = {history: []}, action) => {
    switch (action.type) {
        
        case live.LIVE_HISTORY_SUCCESS:
            return {
                ...state,
                history: action.payload.next && action.payload.next.match(/page=(\d+)/)[1] == 2 ? action.payload.results : [...state.history, ...action.payload.results],
                next: action.payload.next ? action.payload.next.match(/page=(\d+)/)[1] : null,
                status: STATUS_SUCCESS
            }
        
        case live.COLOCUTOR_INFO_SUCCESS:
            return {
                ...state,
                colocutor: action.payload,
            }

        case live.LIVE_HISTORY_REQUEST:
        case live.COLOCUTOR_INFO_REQUEST:
            return {
                ...state,
                ...action.payload,
                status: STATUS_PROCESSING
            }

        case live.LIVE_HISTORY_FAILURE:
        case live.COLOCUTOR_INFO_FAILURE:
            return {
                ...state,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
                status: STATUS_ERROR
            }

        default:
            return state
    }
}