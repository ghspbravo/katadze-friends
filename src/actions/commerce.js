import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const ACQUIRING_EVENT_REQUEST = '@@commerce/ACQUIRING_EVENT_REQUEST';
export const ACQUIRING_EVENT_SUCCESS = '@@commerce/ACQUIRING_EVENT_SUCCESS';
export const ACQUIRING_EVENT_FAILURE = '@@commerce/ACQUIRING_EVENT_FAILURE';

export const ACQUIRING_STATUS_UPDATE_REQUEST = '@@commerce/ACQUIRING_STATUS_UPDATE_REQUEST';
export const ACQUIRING_STATUS_UPDATE_SUCCESS = '@@commerce/ACQUIRING_STATUS_UPDATE_SUCCESS';
export const ACQUIRING_STATUS_UPDATE_FAILURE = '@@commerce/ACQUIRING_STATUS_UPDATE_FAILURE';

export const acquiringEvent = (event_tariff_id) => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/auth/token/obtain/',
        method: 'POST',
        body: JSON.stringify({ event_tariff_id }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            ACQUIRING_EVENT_REQUEST, ACQUIRING_EVENT_SUCCESS, ACQUIRING_EVENT_FAILURE
        ]
    }
});


export const acquiringStatusUpdate = () => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/auth/token/obtain/',
        method: 'PATCH',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            ACQUIRING_STATUS_UPDATE_REQUEST, ACQUIRING_STATUS_UPDATE_SUCCESS, ACQUIRING_STATUS_UPDATE_FAILURE
        ]
    }
});