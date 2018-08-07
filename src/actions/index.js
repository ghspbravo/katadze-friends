export const fetchPartnersCategories = partnersCategories => ({
    type: 'FETCH_PARTNERS_CATEGORIES',
    items: partnersCategories
})

export const fetchPartner = partner => ({
    type: 'FETCH_PARTNER',
    items: partner
})

export const fetchEvents = events => ({
    type: 'FETCH_EVENTS',
    events: fetch(events)
})

export const fetchEvent = event => ({
    type: 'FETCH_EVENT',
    event: event
})

export const changeNavType = navType => ({
    type: 'NAVTYPE_CHANGE',
    navType: navType
})

export const NavbarTypes = {
    BG_LARGE: 'bg-large',
    BG_SMALL: 'bg-small',
    BG_ALT_SMALL: 'bg-alt-small',
    TRANSPARENT_WHITE_LARGE: 'white-large',
    TRANSPARENT_BLACK_LARGE: 'black-large',
}