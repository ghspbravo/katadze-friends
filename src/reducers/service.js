import * as router from 'react-router-redux'
import * as index from '../actions/index'

export default (state = {}, action) => {
    switch (action.type) {
        case router.LOCATION_CHANGE:
            window.scrollTo(0, 0)

        case index.FORCE_REFRESH:
            return {
                ...state
            }

        default:
            return state
    }
}