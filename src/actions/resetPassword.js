import { RSAA } from 'redux-api-middleware';
import { server } from '.';

export const RESET_REQUEST = '@@reset/RESET_REQUEST';
export const RESET_SUCCESS = '@@reset/RESET_SUCCESS';
export const RESET_FAILURE = '@@reset/RESET_FAILURE';

export const RESET_CONFIRM_REQUEST = '@@reset/RESET_CONFIRM_REQUEST';
export const RESET_CONFIRM_SUCCESS = '@@reset/RESET_CONFIRM_SUCCESS';
export const RESET_CONFIRM_FAILURE = '@@reset/RESET_CONFIRM_FAILURE';

export const resetPassword = email => ({
    [RSAA]: {
        endpoint: `https://${server}/api/reset/`,
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            RESET_REQUEST, RESET_SUCCESS, RESET_FAILURE
        ]
    }
});

export const resetConfirm = (token, uidb64, password) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/reset-confirm/`,
        method: 'POST',
        body: JSON.stringify({ token, uidb64, password }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            RESET_CONFIRM_REQUEST, RESET_CONFIRM_SUCCESS, RESET_CONFIRM_FAILURE
        ]
    },
});