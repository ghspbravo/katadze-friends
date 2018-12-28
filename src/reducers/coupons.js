import * as coupons from '../actions/coupons'
import { STATUS_SUCCESS, STATUS_PROCESSING, STATUS_ERROR } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {

		case coupons.LIST_SUCCESS:
			return {
				...action.payload,
				list: action.payload.results,
				status: STATUS_SUCCESS,
			}
		case coupons.ACTIVATE_SUCCESS: 
			return {
				...state,
				...action.payload,
			}

		case coupons.LIST_REQUEST:
		case coupons.ACTIVATE_REQUEST:
			return {
				...state,
				status: STATUS_PROCESSING,
			}

		case coupons.LIST_FAILURE:
		case coupons.ACTIVATE_FAILURE:
			return {
				...action.payload,
				status: STATUS_ERROR,
			}
		
        default:
            return state
    }
}