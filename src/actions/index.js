export const FORCE_REFRESH = '@@service/FORCE_REFRESH';

export const changeNavType = navType => ({
    type: 'NAVTYPE_CHANGE',
    navType: navType
})
export const forceRefresh = () => ({
    type: FORCE_REFRESH,
})

export const NavbarTypes = {
    BG_LARGE: 'bg-large',
    BG_SMALL: 'bg-small',
    BG_SMALL_STICKY: 'bg-small-sticky',
    BG_ALT_SMALL: 'bg-alt-small',
    TRANSPARENT_WHITE_LARGE: 'white-large',
    TRANSPARENT_BLACK_LARGE: 'black-large',
    MOBILE: 'mobile'
}

export const STATUS_SUCCESS = 'success'
export const STATUS_PROCESSING = 'processing'
export const STATUS_ERROR = 'error'

export const server = window.location.hostname === 'localhost' ? 'katadze.ru/' : window.location.hostname