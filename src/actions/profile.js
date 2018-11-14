import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';
import { server } from '.';

export const USER_INFO_REQUEST = '@@profile/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = '@@profile/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = '@@profile/USER_INFO_FAILURE';

export const CREATE_GID_REQUEST = '@@profile/CREATE_GID_REQUEST';
export const CREATE_GID_SUCCESS = '@@profile/CREATE_GID_SUCCESS';
export const CREATE_GID_FAILURE = '@@profile/CREATE_GID_FAILURE';

export const CREATE_TOUR_REQUEST = '@@profile/CREATE_TOUR_REQUEST';
export const CREATE_TOUR_SUCCESS = '@@profile/CREATE_TOUR_SUCCESS';
export const CREATE_TOUR_FAILURE = '@@profile/CREATE_TOUR_FAILURE';

export const PATCH_INFO_REQUEST = '@@profile/PATCH_INFO_REQUEST';
export const PATCH_INFO_SUCCESS = '@@profile/PATCH_INFO_SUCCESS';
export const PATCH_INFO_FAILURE = '@@profile/PATCH_INFO_FAILURE';

export const GET_USER_PHOTOS_REQUEST = '@@profile/GET_USER_PHOTOS_REQUEST';
export const GET_USER_PHOTOS_SUCCESS = '@@profile/GET_USER_PHOTOS_SUCCESS';
export const GET_USER_PHOTOS_FAILURE = '@@profile/GET_USER_PHOTOS_FAILURE';

export const DELETE_USER_PHOTO_REQUEST = '@@profile/DELETE_USER_PHOTO_REQUEST';
export const DELETE_USER_PHOTO_SUCCESS = '@@profile/DELETE_USER_PHOTO_SUCCESS';
export const DELETE_USER_PHOTO_FAILURE = '@@profile/DELETE_USER_PHOTO_FAILURE';

export const PATCH_USER_PHOTO_REQUEST = '@@profile/PATCH_USER_PHOTO_REQUEST';
export const PATCH_USER_PHOTO_SUCCESS = '@@profile/PATCH_USER_PHOTO_SUCCESS';
export const PATCH_USER_PHOTO_FAILURE = '@@profile/PATCH_USER_PHOTO_FAILURE';

export const POST_USER_PHOTO_REQUEST = '@@profile/POST_USER_PHOTO_REQUEST';
export const POST_USER_PHOTO_SUCCESS = '@@profile/POST_USER_PHOTO_SUCCESS';
export const POST_USER_PHOTO_FAILURE = '@@profile/POST_USER_PHOTO_FAILURE';

export const userInfo = id => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/${id}/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAILURE
        ]
    },
});

export const createGid = (bio, keyphrase, languages, hobbies, activities, price) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/profile/`,
        method: 'POST',
        body: JSON.stringify({ bio, keyphrase, languages, hobbies, activities, price }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CREATE_GID_REQUEST, CREATE_GID_SUCCESS, CREATE_GID_FAILURE
        ]
    }
})

export const createTour = (name, location, description, route, transport, inclusion, price, date_from, date_to, meeting_details, slogan, expenses, extra_options, extra_info, max_tourists) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/tour/`,
        method: 'POST',
        body: JSON.stringify({ name, location, description, route, transport, inclusion, price, date_from, date_to, meeting_details, slogan, expenses, extra_options, extra_info, max_tourists }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            CREATE_TOUR_REQUEST, CREATE_TOUR_SUCCESS, CREATE_TOUR_FAILURE
        ]
    }
})

export const patchUserInfo = (locale, currency, date_birth, gender, last_name, first_name, residence, phone, avatar) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/`,
        method: 'PATCH',
        body: JSON.stringify({ locale, currency, date_birth, gender, last_name, first_name, residence, phones: [{ number: phone }], avatar }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            PATCH_INFO_REQUEST, PATCH_INFO_SUCCESS, PATCH_INFO_FAILURE
        ]
    }
})

export const getUserPhotos = id => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/${id}/photos/?format=json`,
        method: 'GET',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            GET_USER_PHOTOS_REQUEST, GET_USER_PHOTOS_SUCCESS, GET_USER_PHOTOS_FAILURE
        ]
    },
});

export const deleteUserPhoto = id => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/photo/${id}/?format=json`,
        method: 'DELETE',
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            DELETE_USER_PHOTO_REQUEST, DELETE_USER_PHOTO_SUCCESS, DELETE_USER_PHOTO_FAILURE
        ]
    },
});

export const patchUserPhoto = (id, area) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/photo/${id}/`,
        method: 'PATCH',
        body: JSON.stringify({ area }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            PATCH_USER_PHOTO_REQUEST, PATCH_USER_PHOTO_SUCCESS, PATCH_USER_PHOTO_FAILURE
        ]
    },
});

export const postUserPhoto = (img) => ({
    [RSAA]: {
        endpoint: `https://${server}/api/user/photo/`,
        method: 'POST',
        body: JSON.stringify({ img }),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            POST_USER_PHOTO_REQUEST, POST_USER_PHOTO_SUCCESS, POST_USER_PHOTO_FAILURE
        ]
    },
});