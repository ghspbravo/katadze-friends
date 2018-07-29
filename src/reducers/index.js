import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import partnersCategories from './PartnersReducer'
import events from './EventsReducer'

const rootReducer = combineReducers({
    router: routerReducer,
    partnersCategories,
    events
})

export default rootReducer
