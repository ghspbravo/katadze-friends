import * as gids from '../actions/gids'

export default (state = {}, action) => {
    switch (action.type) {
        case gids.LIST_SUCCESS:
        case gids.INFO_SUCCESS:
            return [
                ...action.payload.results
            ]

        case gids.LIST_FAILURE:
        case gids.INFO_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
            }

        default:
            return state
    }
}