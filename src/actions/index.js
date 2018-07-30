export const fetchPartnersCategories = partnersCategories => ({
    type: 'FETCH_PARTNERS_CATEGORIES',
    items: partnersCategories
})

export const fetchEvents = events => ({
    type: 'FETCH_EVENTS',
    events: events
})

export const fetchEvent = event => ({
    type: 'FETCH_EVENT',
    event: event
})

export const changeTariff = id => ({
    type: 'TARIFF_CHANGE',
    tariffId: id
})

export const changeNavType = navType => ({
    type: 'NAVTYPE_CHANGE',
    navType: navType
})

export const NavbarTypes = {
    BG_LARGE: 'bg-large',
    BG_SMALL: 'bg-small',
    TRANSPARENT_WHITE_LARGE: 'white-large',
    TRANSPARENT_BLACK_LARGE: 'black-large',
}

// export default function fetchPartners() {
//     return dispatch => {
//         dispatch(fetchPartnersBegin());
//         return fetch("http://188.93.210.198:8000/api/partner_categories/?format=json")
//             .then(handleErrors)
//             .then(json => {
//                 console.log('fetchResult:')
//                 console.log(json)
//                 dispatch(fetchPartnersSuccess(json));
//                 return json;
//             })
//             .catch(error => dispatch(fetchPartnersFailure(error)));
//     };
// }