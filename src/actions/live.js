import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';
import { server } from '.';

export const COLOCUTOR_INFO_REQUEST = '@@live/COLOCUTOR_INFO_REQUEST';
export const COLOCUTOR_INFO_SUCCESS = '@@live/COLOCUTOR_INFO_SUCCESS';
export const COLOCUTOR_INFO_FAILURE = '@@live/COLOCUTOR_INFO_FAILURE';

export const LIVE_HISTORY_REQUEST = '@@live/LIVE_HISTORY_REQUEST';
export const LIVE_HISTORY_SUCCESS = '@@live/LIVE_HISTORY_SUCCESS';
export const LIVE_HISTORY_FAILURE = '@@live/LIVE_HISTORY_FAILURE';

export const getColocutorInfo = (id) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/${id}/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            COLOCUTOR_INFO_REQUEST, COLOCUTOR_INFO_SUCCESS, COLOCUTOR_INFO_FAILURE
        ]
    }
});

export const getHistoryMessages = (uuid, page = 0) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/live/chat/${uuid}?${page !== 0 ? `page=${page}` : null}&format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            LIVE_HISTORY_REQUEST, LIVE_HISTORY_SUCCESS, LIVE_HISTORY_FAILURE
        ]
    }
});