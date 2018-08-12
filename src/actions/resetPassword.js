import { RSAA } from 'redux-api-middleware';

export const RESET_REQUEST = '@@reset/RESET_REQUEST';
export const RESET_SUCCESS = '@@reset/RESET_SUCCESS';
export const RESET_FAILURE = '@@reset/RESET_FAILURE';

export const resetPassword = email => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/reset/',
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            RESET_REQUEST, RESET_SUCCESS, RESET_FAILURE
        ]
    }
});