import * as gids from '../actions/gids'

export default (state = {}, action) => {
    switch (action.type) {
        case gids.GIDS_FILTER_SUCCESS:
        return {
            ...state,
            search: action.payload.results
        }
        case gids.LIST_SUCCESS:
        return {
            ...state,
            list: action.payload.results
        }
        case gids.INFO_SUCCESS:
        return {
            ...state,
            info: action.payload
        }
        case gids.TOUR_SUCCESS:
        return {
            ...state,
            tour: action.payload
        }

        case gids.LIST_FAILURE:
        case gids.INFO_FAILURE:
        case gids.TOUR_SUCCESS:
        case gids.GIDS_FILTER_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}