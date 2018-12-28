import * as profile from '../actions/profile'
import { STATUS_SUCCESS, STATUS_ERROR, STATUS_PROCESSING } from '../actions';
import * as auth from '../actions/auth'

export default (state = {list: []}, action) => {
    switch (action.type) {
        case profile.USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload,
                avatar: action.payload.img
            }
        case profile.CREATE_TOUR_SUCCESS:
        case profile.CREATE_GID_SUCCESS:
        case profile.PATCH_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: STATUS_SUCCESS,
                errors: undefined
            }
        case profile.GET_USER_PHOTOS_SUCCESS:
            return {
                ...state,
                // list: [...state.list, ...action.payload.results],
                list: action.payload.results,
                next: action.payload.next ? action.payload.next.match(/page=(\d+)/)[1] : null,
            }
        case profile.POST_USER_PHOTO_SUCCESS:
            return {
                ...state,
                newPhoto: action.payload,
                avatar: action.payload.img
            }
        case profile.PATCH_USER_PHOTO_SUCCESS:
            return {
                ...state,
                newPhoto: action.payload,
                avatar: action.payload.thumb
            }

        case profile.CREATE_TOUR_REQUEST:
        case profile.CREATE_GID_REQUEST:
        case profile.PATCH_INFO_REQUEST:
            return {
                ...state,
                status: STATUS_PROCESSING,
            }

        case profile.USER_INFO_FAILURE:
        case profile.CREATE_GID_FAILURE:
        case profile.CREATE_TOUR_FAILURE:
        case profile.PATCH_INFO_FAILURE:
        case profile.GET_USER_PHOTOS_FAILURE:
            return {
                ...state,
                status: STATUS_ERROR,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText } || { 'detail': action.payload.statusText },
            }
        case auth.LOGOUT_SUCCESS:
            return {
                list: []
            }

        default:
            return state
    }
}