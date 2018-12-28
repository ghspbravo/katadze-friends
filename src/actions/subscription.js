import { RSAA } from 'redux-api-middleware';
import { server } from '.';
import { withAuth } from '../reducers';

export const STATUS_REQUEST = '@@subscription/STATUS_REQUEST';
export const STATUS_SUCCESS = '@@subscription/STATUS_SUCCESS';
export const STATUS_FAILURE = '@@subscription/STATUS_FAILURE';

export const PURCHASE_REQUEST = '@@subscription/PURCHASE_REQUEST';
export const PURCHASE_SUCCESS = '@@subscription/PURCHASE_SUCCESS';
export const PURCHASE_FAILURE = '@@subscription/PURCHASE_FAILURE';

export const getMembershipStatus = () => ({
	[RSAA]: {
		endpoint: `https://${server}/api/subscription/?format=json`,
		method: 'GET',
		headers: withAuth({ 'Content-Type': 'application/json' }),
		types: [
			STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE
		]
	}
});

export const purchaseSubscription = (subscription_type) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/order/subscription/?format=json`,
        method: 'POST',
        body: JSON.stringify({ subscription_type }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            PURCHASE_REQUEST, PURCHASE_SUCCESS, PURCHASE_FAILURE
        ]
    }
});