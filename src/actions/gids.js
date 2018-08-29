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

export const gidList = (page = 0) => ({
	[RSAA]: {
		endpoint: `https://${server}/api/users/?format=json`,
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