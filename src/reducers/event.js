import * as event from '../actions/event'

export default (state = {}, action) => {
    switch (action.type) {

        case event.LIST_SUCCESS:
            console.log(event.LIST_SUCCESS)
            return {
                ...action.payload
            }
        case event.EVENT_SUCCESS:
            console.log(event.EVENT_SUCCESS)
            return {
                ...action.payload,
            }

        default:
            return state
    }
}