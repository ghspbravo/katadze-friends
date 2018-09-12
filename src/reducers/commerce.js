import * as commerce from '../actions/commerce'

export default (state = {}, action) => {
    switch (action.type) {

        case commerce.ACQUIRING_EVENT_SUCCESS:
            window.location.replace(action.payload.form_url)
            return {
                ...action.payload
            }
        case commerce.ACQUIRING_STATUS_UPDATE_SUCCESS:
            return {
                ...action.payload
            }

        case commerce.ACQUIRING_EVENT_FAILURE:
        case commerce.ACQUIRING_STATUS_UPDATE_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
            }

        default:
            return state
    }
}