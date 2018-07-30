import { NavbarTypes } from '../actions'

const navReducer = (state = { navType: NavbarTypes.BG_LARGE }, action) => {
    switch (action.type) {

        case 'NAVTYPE_CHANGE':
            console.log('NAVTYPE_CHANGE')
            return {
                ...state,
                navType: action.navType
            }

        default:
            return state
    }
}

export default navReducer