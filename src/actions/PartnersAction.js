export default function fetchPartners() {
    return dispatch => {
        dispatch(fetchPartnersBegin());
        return fetch("http://188.93.210.198:8000/api/partner_categories/?format=json")
            .then(handleErrors)
            .then(json => {
                console.log('fetchResult:')
                console.log(json)
                dispatch(fetchPartnersSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchPartnersFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_PARTNERS_BEGIN = 'FETCH_PARTNERS_BEGIN';
export const FETCH_PARTNERS_SUCCESS = 'FETCH_PARTNERS_SUCCESS';
export const FETCH_PARTNERS_FAILURE = 'FETCH_PARTNERS_FAILURE';

export const fetchPartnersBegin = () => ({
    type: FETCH_PARTNERS_BEGIN
});

export const fetchPartnersSuccess = partners => ({
    type: FETCH_PARTNERS_SUCCESS,
    payload: { partners }
});

export const fetchPartnersFailure = error => ({
    type: FETCH_PARTNERS_FAILURE,
    payload: { error }
});