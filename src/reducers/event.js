import * as event from '../actions/event'

export default (state = {}, action) => {
    switch (action.type) {

        case event.LIST_SUCCESS:
            return {
                ...action.payload
            }
        case event.EVENT_SUCCESS:
            return {
                ...action.payload,
            }
        case event.EVENT_FAILURE:
        case event.LIST_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}