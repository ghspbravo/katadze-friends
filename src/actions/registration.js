import { RSAA } from 'redux-api-middleware';

export const REGISTRATION_REQUEST = '@@registration/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = '@@registration/REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = '@@registration/REGISTRATION_FAILURE';

export const registration = (email, password, date_birth, gender, last_name, first_name, username, residence) => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/user/',
        method: 'POST',
        body: JSON.stringify({ email, password, date_birth, gender, last_name, first_name, username, residence }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE
        ]
    }
});