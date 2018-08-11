import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import partnersReducer from './PartnersReducer'
import event from './event'
import navReducer from './navReducer'
import gidsReducer from './GidsReducer'
import tourReducer from './TourReducer'
import auth, * as fromAuth from './auth.js'

const rootReducer = combineReducers({
    router: routerReducer,
    auth,
    partnersReducer,
    event,
    navReducer,
    gidsReducer,
    tourReducer
})

export default rootReducer

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);
export const accessToken = state => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken = state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors = state => fromAuth.errors(state.auth);

export function withAuth(headers = {}) {
    return (state) => ({
        ...headers,
        'Authorization': `Bearer ${accessToken(state)}`
    })
}