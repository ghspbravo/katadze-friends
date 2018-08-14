import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import event from './event'
import partner from './partner'
import navbar from './navbar'
import auth, * as fromAuth from './auth.js'
import registration, * as fromReg from './registration'
import resetPassword, * as fromReset from './resetPassword'


const rootReducer = combineReducers({
    router: routerReducer,
    auth,
    partner,
    event,
    navbar,
    registration,
    resetPassword
})

export default rootReducer

export const isRegistered = state => fromReg.isRegistered(state.registration);
export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);
export const accessToken = state => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken = state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors = state => fromAuth.errors(state.auth);
export const registrationErrors = state => fromReg.errors(state.registration);
export const resetErrors = state => fromReg.errors(state.resetPassword);

export const getUsername = state => fromReg.username(state.registration);
export const getMessage = state => fromReset.message(state.resetPassword);

export function withAuth(headers = {}) {
    return (state) => ({
        ...headers,
        'Authorization': `Bearer ${accessToken(state)}`
    })
}