import { RSAA } from 'redux-api-middleware';
import { server } from '.';
import { withAuth } from '../reducers';

export const LIST_REQUEST = '@@coupon/LIST_REQUEST';
export const LIST_SUCCESS = '@@coupon/LIST_SUCCESS';
export const LIST_FAILURE = '@@coupon/LIST_FAILURE';

export const ACTIVATE_REQUEST = '@@coupon/ACTIVATE_REQUEST';
export const ACTIVATE_SUCCESS = '@@coupon/ACTIVATE_SUCCESS';
export const ACTIVATE_FAILURE = '@@coupon/ACTIVATE_FAILURE';

export const getCouponsList = (page = 0) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/user/coupons/?format=json`,
		method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),		
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	}
});

export const activateCoupon = (partnerId) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/coupon/?format=json`,
        method: 'POST',
        body: JSON.stringify({ type: partnerId }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_FAILURE
        ]
    }
});