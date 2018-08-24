import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const REGISTRATION_REQUEST = '@@registration/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = '@@registration/REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = '@@registration/REGISTRATION_FAILURE';

export const ACTIVATE_REQUEST = '@@registration/ACTIVATE_REQUEST';
export const ACTIVATE_SUCCESS = '@@registration/ACTIVATE_SUCCESS';
export const ACTIVATE_FAILURE = '@@registration/ACTIVATE_FAILURE';

export const ACTIVATE_CONFIRM_REQUEST = '@@registration/ACTIVATE_CONFIRM_REQUEST';
export const ACTIVATE_CONFIRM_SUCCESS = '@@registration/ACTIVATE_CONFIRM_SUCCESS';
export const ACTIVATE_CONFIRM_FAILURE = '@@registration/ACTIVATE_CONFIRM_FAILURE';

export const registration = (email, password, date_birth, gender, last_name, first_name, username, residence, phone, img_photo) => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/user/',
        method: 'POST',
        body: JSON.stringify({ email, password, date_birth, gender, last_name, first_name, username, residence, phones: [{ number: phone }], img_photo }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE
        ]
    },
});

export const activate = () => ({
    [RSAA]: {
        endpoint: `https://katadze-test.ru/api/activate/`,
        method: 'POST',
        headers: withAuth(),
        types: [
            ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_FAILURE
        ]
    }
})

export const activateConfirm = (token, uidb64) => ({
    [RSAA]: {
        endpoint: 'https://katadze-test.ru/api/activate-confirm/',
        method: 'POST',
        body: JSON.stringify({ token, uidb64 }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            ACTIVATE_CONFIRM_REQUEST, ACTIVATE_CONFIRM_SUCCESS, ACTIVATE_CONFIRM_FAILURE
        ]
    },
});