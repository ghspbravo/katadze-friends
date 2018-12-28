import * as partner from '../actions/partner'

export default (state = {}, action) => {
    switch (action.type) {

        case partner.LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.results
            }
        case partner.PARTNER_SUCCESS:
            return {
                ...state,
                info: action.payload,
            }
        case partner.PARTNER_FAILURE:
        case partner.LIST_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
            }


        default:
            return state
    }
}