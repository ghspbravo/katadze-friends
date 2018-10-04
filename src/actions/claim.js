import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';
import { server } from '.';

export const GID_CLAIM_REQUEST = '@@claim/GID_CLAIM_REQUEST';
export const GID_CLAIM_SUCCESS = '@@claim/GID_CLAIM_SUCCESS';
export const GID_CLAIM_FAILURE = '@@claim/GID_CLAIM_FAILURE';

export const CLAIM_LIST_REQUEST = '@@claim/CLAIM_LIST_REQUEST';
export const CLAIM_LIST_SUCCESS = '@@claim/CLAIM_LIST_SUCCESS';
export const CLAIM_LIST_FAILURE = '@@claim/CLAIM_LIST_FAILURE';

export const CLAIM_INFO_REQUEST = '@@claim/CLAIM_INFO_REQUEST';
export const CLAIM_INFO_SUCCESS = '@@claim/CLAIM_INFO_SUCCESS';
export const CLAIM_INFO_FAILURE = '@@claim/CLAIM_INFO_FAILURE';

export const CLAIM_CANCEL_REQUEST = '@@claim/CLAIM_CANCEL_REQUEST';
export const CLAIM_CANCEL_SUCCESS = '@@claim/CLAIM_CANCEL_SUCCESS';
export const CLAIM_CANCEL_FAILURE = '@@claim/CLAIM_CANCEL_FAILURE';

export const CLAIM_SENDER_REQUEST = '@@claim/CLAIM_SENDER_REQUEST';
export const CLAIM_SENDER_SUCCESS = '@@claim/CLAIM_SENDER_SUCCESS';
export const CLAIM_SENDER_FAILURE = '@@claim/CLAIM_SENDER_FAILURE';

export const CLAIM_RECEIVER_REQUEST = '@@claim/CLAIM_RECEIVER_REQUEST';
export const CLAIM_RECEIVER_SUCCESS = '@@claim/CLAIM_RECEIVER_SUCCESS';
export const CLAIM_RECEIVER_FAILURE = '@@claim/CLAIM_RECEIVER_FAILURE';

export const CLAIM_ACCEPT_REQUEST = '@@claim/CLAIM_ACCEPT_REQUEST';
export const CLAIM_ACCEPT_SUCCESS = '@@claim/CLAIM_ACCEPT_SUCCESS';
export const CLAIM_ACCEPT_FAILURE = '@@claim/CLAIM_ACCEPT_FAILURE';

export const CLAIM_DECLINE_REQUEST = '@@claim/CLAIM_DECLINE_REQUEST';
export const CLAIM_DECLINE_SUCCESS = '@@claim/CLAIM_DECLINE_SUCCESS';
export const CLAIM_DECLINE_FAILURE = '@@claim/CLAIM_DECLINE_FAILURE';

export const createGidClaim = (receiver_id, message) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/?format=json`,
        method: 'POST',
        body: JSON.stringify({ receiver_id, message }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            GID_CLAIM_REQUEST, GID_CLAIM_SUCCESS, GID_CLAIM_FAILURE
        ]
    }
});

export const getClaimList = () => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claims/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CLAIM_LIST_REQUEST, CLAIM_LIST_SUCCESS, CLAIM_LIST_FAILURE
        ]
    }
});

export const getClaimInfo = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/${id}?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CLAIM_INFO_REQUEST, CLAIM_INFO_SUCCESS, CLAIM_INFO_FAILURE
        ]
    }
});

export const canselClaim = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/${id}?format=json`,
        method: 'DELETE',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CLAIM_CANCEL_REQUEST, CLAIM_CANCEL_SUCCESS, CLAIM_CANCEL_FAILURE
        ]
    }
});

export const getClaimReceiver = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/${id}/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CLAIM_RECEIVER_REQUEST, CLAIM_RECEIVER_SUCCESS, CLAIM_RECEIVER_FAILURE
        ]
    }
});

export const getClaimSender = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/${id}/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CLAIM_SENDER_REQUEST, CLAIM_SENDER_SUCCESS, CLAIM_SENDER_FAILURE
        ]
    }
});

export const acceptClaim = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/${id}/`,
        method: 'PATCH',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ status: 1 }),
        types: [
            CLAIM_ACCEPT_REQUEST, CLAIM_ACCEPT_SUCCESS, CLAIM_ACCEPT_FAILURE
        ]
    }
});

export const declineClaim = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/${id}/`,
        method: 'PATCH',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ status: 2 }),
        types: [
            CLAIM_DECLINE_REQUEST, CLAIM_DECLINE_SUCCESS, CLAIM_DECLINE_FAILURE
        ]
    }
});


// export const acquiringStatusUpdate = (id) => ({
//     [RSAA]: {
//         endpoint: `https://${server}/api/order/${id}`,
//         method: 'PATCH',
//         headers: withAuth({ 'Content-Type': 'application/json' }),
//         types: [
//             ACQUIRING_STATUS_UPDATE_REQUEST, ACQUIRING_STATUS_UPDATE_SUCCESS, ACQUIRING_STATUS_UPDATE_FAILURE
//         ]
//     }
// });