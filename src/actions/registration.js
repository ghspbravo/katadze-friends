import { RSAA } from 'redux-api-middleware';

export const REGISTRATION_REQUEST = '@@registration/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = '@@registration/REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = '@@registration/REGISTRATION_FAILURE';

export const registration = (username, email, password) => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/user/',
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE
        ]
    }
});