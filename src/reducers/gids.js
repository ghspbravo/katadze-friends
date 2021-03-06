import * as gids from '../actions/gids'
import defaultCity from '../resourses/Gids/header-image.png'
import { STATUS_SUCCESS } from '../actions';

export default (state = { list: [] }, action) => {
    switch (action.type) {
        case gids.GIDS_FILTER_SUCCESS:
            return {
                ...state,
                search: action.payload.results
            }
        case gids.LIST_SUCCESS:
            return {
                ...state,
                list: [...state.list, ...action.payload.results],
                next: action.payload.next ? action.payload.next.match(/page=(\d+)/)[1] : null,
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
        case gids.CITY_INFO_SUCCESS:
            return {
                ...state,
                city: action.payload.results[0]
            }
        case gids.GET_USER_COMMENTS_SUCCESS:
        case gids.GET_GID_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }
        case gids.POST_COMMENT_SUCCESS:
            return {
                ...state,
                status: STATUS_SUCCESS
            }
        case gids.CITY_INFO_FAILURE:
            return {
                ...state,
                city: { city_name: 'undefined', img: defaultCity }
            }

        case gids.LIST_FAILURE:
        case gids.INFO_FAILURE:
        case gids.TOUR_SUCCESS:
        case gids.GIDS_FILTER_FAILURE:
            return {
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
            }

        default:
            return state
    }
}