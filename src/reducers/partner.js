import * as partner from '../actions/partner'

export default (state = {}, action) => {
    switch (action.type) {

        case partner.LIST_SUCCESS:
            return {
                ...action.payload
            }
        case partner.PARTNER_SUCCESS:
            return {
                ...action.payload,
            }

        default:
            return state
    }
}