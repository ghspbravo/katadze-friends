import { NavbarTypes } from '../actions'

const navReducer = (state = { navType: NavbarTypes.BG_LARGE }, action) => {
    switch (action.type) {

        case 'NAVTYPE_CHANGE':
            return {
                navType: action.navType
            }

        default:
            return state
    }
}

export default navReducer