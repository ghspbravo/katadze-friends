import { RSAA } from 'redux-api-middleware';
import { server } from './index'

export const LIST_REQUEST = '@@gids/LIST_REQUEST';
export const LIST_SUCCESS = '@@gids/LIST_SUCCESS';
export const LIST_FAILURE = '@@gids/LIST_FAILURE';

export const INFO_REQUEST = '@@gids/INFO_REQUEST';
export const INFO_SUCCESS = '@@gids/INFO_SUCCESS';
export const INFO_FAILURE = '@@gids/INFO_FAILURE';

export const TOUR_REQUEST = '@@gids/TOUR_REQUEST';
export const TOUR_SUCCESS = '@@gids/TOUR_SUCCESS';
export const TOUR_FAILURE = '@@gids/TOUR_FAILURE';

export const GIDS_FILTER_REQUEST = '@@gids/GIDS_FILTER_REQUEST';
export const GIDS_FILTER_SUCCESS = '@@gids/GIDS_FILTER_SUCCESS';
export const GIDS_FILTER_FAILURE = '@@gids/GIDS_FILTER_FAILURE';

export const CITY_INFO_REQUEST = '@@gids/CITY_INFO_REQUEST';
export const CITY_INFO_SUCCESS = '@@gids/CITY_INFO_SUCCESS';
export const CITY_INFO_FAILURE = '@@gids/CITY_INFO_FAILURE';

export const gidList = (page = 0) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/users/?${page !== 0 ? `page=${page}` : null}&format=json`,
		method: 'GET',
		headers: {},
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	},
});

export const gidInfo = (id) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/user/${id}?format=json`,
		method: 'GET',
		headers: {},
		types: [
			INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE
		]
	},
});

export const tourInfo = (id) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/tour/${id}?format=json`,
		method: 'GET',
		headers: {},
		types: [
			TOUR_REQUEST, TOUR_SUCCESS, TOUR_FAILURE
		]
	},
});

export const gidsFilter = (location) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/users/?location=${location}&format=json`,
		method: 'GET',
		headers: {},
		types: [
			GIDS_FILTER_REQUEST, GIDS_FILTER_SUCCESS, GIDS_FILTER_FAILURE
		]
	},
});

export const getCity = (city) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/cities?name=${city}&format=json`,
		method: 'GET',
		headers: {},
		types: [
			CITY_INFO_REQUEST, CITY_INFO_SUCCESS, CITY_INFO_FAILURE
		]
	},
});