import { RSAA } from 'redux-api-middleware';

export const LIST_REQUEST = '@@partner/LIST_REQUEST';
export const LIST_SUCCESS = '@@partner/LIST_SUCCESS';
export const LIST_FAILURE = '@@partner/LIST_FAILURE';

export const PARTNER_REQUEST = '@@partner/PARTNER_REQUEST';
export const PARTNER_SUCCESS = '@@partner/PARTNER_SUCCESS';
export const PARTNER_FAILURE = '@@partner/PARTNER_FAILURE';

export const list = (page = 0) => ({
	[RSAA]: {
		endpoint: `https://katadze-test.ru/api/partner_categories?format=json`,
		method: 'GET',
		headers: {},
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	}
});

export const partner = id => ({
	[RSAA]: {
		endpoint: `https://katadze-test.ru/api/partner/${id}/?format=json`,
		method: 'GET',
		headers: {},
		types: [
			PARTNER_REQUEST, PARTNER_SUCCESS, PARTNER_FAILURE
		]
	}
});