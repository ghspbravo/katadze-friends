import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import partnersReducer from './PartnersReducer'
import eventsReducer from './EventsReducer'
import navReducer from './navReducer'
import gidsReducer from './GidsReducer'

const rootReducer = combineReducers({
    router: routerReducer,
    partnersReducer,
    eventsReducer,
    navReducer,
    gidsReducer
})

export default rootReducer
