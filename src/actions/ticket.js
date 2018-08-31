import { RSAA } from 'redux-api-middleware';
import { server } from './index'

export const FAQ_REQUEST = '@@ticket/FAQ_REQUEST';
export const FAQ_SUCCESS = '@@ticket/FAQ_SUCCESS';
export const FAQ_FAILURE = '@@ticket/FAQ_FAILURE';

export const PARTNER_REQUEST = '@@ticket/PARTNER_REQUEST';
export const PARTNER_SUCCESS = '@@ticket/PARTNER_SUCCESS';
export const PARTNER_FAILURE = '@@ticket/PARTNER_FAILURE';

export const RKV_REQUEST = '@@ticket/RKV_REQUEST';
export const RKV_SUCCESS = '@@ticket/RKV_SUCCESS';
export const RKV_FAILURE = '@@ticket/RKV_FAILURE';

export const contact = (title, name, email, question) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/ticket/faq/`,
        method: 'POST',
        body: JSON.stringify({ title, name, email, question }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            FAQ_REQUEST, FAQ_SUCCESS, FAQ_FAILURE
        ]
    }
});

export const becomePartnerRequest = (organization, name, email, comment) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/ticket/partner/`,
        method: 'POST',
        body: JSON.stringify({ organization, name, email, comment }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            PARTNER_REQUEST, PARTNER_SUCCESS, PARTNER_FAILURE
        ]
    }
});

export const rkv = (name, date_birth, phone_number, url_social, city, work_place, came_from) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/ticket/rcw/`,
        method: 'POST',
        body: JSON.stringify({ name, date_birth, phone_number, url_social, city, work_place, came_from }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            RKV_REQUEST, RKV_SUCCESS, RKV_FAILURE
        ]
    }
});