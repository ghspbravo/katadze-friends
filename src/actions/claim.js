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

export const createGidClaim = (receiver, message) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/claim/?format=json`,
        method: 'POST',
        body: JSON.stringify({ receiver, message }),
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