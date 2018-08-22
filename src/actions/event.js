import { RSAA } from 'redux-api-middleware';

export const LIST_REQUEST = '@@event/LIST_REQUEST';
export const LIST_SUCCESS = '@@event/LIST_SUCCESS';
export const LIST_FAILURE = '@@event/LIST_FAILURE';

export const EVENT_REQUEST = '@@event/EVENT_REQUEST';
export const EVENT_SUCCESS = '@@event/EVENT_SUCCESS';
export const EVENT_FAILURE = '@@event/EVENT_FAILURE';

export const list = (page = 0) => ({
	[RSAA]: {
		endpoint: `https://katadze-test.ru/api/events/?format=json`,
		method: 'GET',
		headers: {},
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	}
});

export const event = id => ({
	[RSAA]: {
		endpoint: `https://katadze-test.ru/api/event/${id}/?format=json`,
		method: 'GET',
		headers: {},
		types: [
			EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAILURE
		]
	}
});