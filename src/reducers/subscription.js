import * as subscription from '../actions/subscription'

export default (state = {}, action) => {
    switch (action.type) {

		case subscription.SUBSCRIPTION_TYPES_SUCCESS:
			return {
				types: [...action.payload]
			}

		case subscription.STATUS_SUCCESS:
			return {
				...action.payload,
			}
		case subscription.PURCHASE_SUCCESS:
			return {
				...action.payload,
			}
		case subscription.STATUS_REQUEST: 
			return {
				...state,
				...action.payload,
			}

		case subscription.STATUS_FAILURE:
			return {
				// ...action.payload,
			}
		
        default:
            return state
    }
}