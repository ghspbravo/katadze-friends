import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';
import { server } from '.';

export const USER_INFO_REQUEST = '@@event/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = '@@event/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = '@@event/USER_INFO_FAILURE';

export const CREATE_GID_REQUEST = '@@event/CREATE_GID_REQUEST';
export const CREATE_GID_SUCCESS = '@@event/CREATE_GID_SUCCESS';
export const CREATE_GID_FAILURE = '@@event/CREATE_GID_FAILURE';

export const CREATE_TOUR_REQUEST = '@@event/CREATE_TOUR_REQUEST';
export const CREATE_TOUR_SUCCESS = '@@event/CREATE_TOUR_SUCCESS';
export const CREATE_TOUR_FAILURE = '@@event/CREATE_TOUR_FAILURE';

export const userInfo = id => ({
	[RSAA]: {
		endpoint: `https://${server}/api/user/${id}/?format=json`,
		method: 'GET',
		headers: {},
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
        headers: withAuth({'Content-Type': 'application/json'}),
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
        headers: withAuth({'Content-Type': 'application/json'}),
        types: [
            CREATE_TOUR_REQUEST, CREATE_TOUR_SUCCESS, CREATE_TOUR_FAILURE
        ]
    }
})