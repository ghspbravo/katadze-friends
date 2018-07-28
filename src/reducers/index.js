import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import PartnersReducer from './PartnersReducer'

const mainReducer = combineReducers({
    router: routerReducer,
    partners: PartnersReducer
})

export default mainReducer
