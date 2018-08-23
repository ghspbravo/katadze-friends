import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const USER_INFO_REQUEST = '@@event/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = '@@event/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = '@@event/USER_INFO_FAILURE';

export const CREATE_GID_REQUEST = '@@event/CREATE_GID_REQUEST';
export const CREATE_GID_SUCCESS = '@@event/CREATE_GID_SUCCESS';
export const CREATE_GID_FAILURE = '@@event/CREATE_GID_FAILURE';

export const userInfo = id => ({
	[RSAA]: {
		endpoint: `https://katadze-test.ru/api/user/${id}/?format=json`,
		method: 'GET',
		headers: {},
		types: [
			USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAILURE
		]
	},
});

export const createGid = (bio, keyphrase, languages, hobbies, activities) => ({
	[RSAA]: {
        endpoint: 'https://katadze-test.ru/api/user/profile/',
        method: 'POST',
        body: JSON.stringify({ bio, keyphrase, languages, hobbies, activities }),
        headers: withAuth(),
        types: [
            CREATE_GID_REQUEST, CREATE_GID_SUCCESS, CREATE_GID_FAILURE
        ]
    }
})