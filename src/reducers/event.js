import * as event from '../actions/event'

export default (state = {}, action) => {
    switch (action.type) {

        case event.LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.results
            }
        case event.EVENT_SUCCESS:
            return {
                ...state,
                info: action.payload,
            }
        case event.EVENT_FAILURE:
        case event.LIST_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
            }

        default:
            return state
    }
}