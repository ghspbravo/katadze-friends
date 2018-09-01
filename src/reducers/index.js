import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import event from './event'
import partner from './partner'
import navbar from './navbar'
import auth, * as fromAuth from './auth.js'
import registration, * as fromReg from './registration'
import resetPassword from './resetPassword'
import profile from './profile'
import gids from './gids';
import service from './service'
import commerce from './commerce';
import ticket from './ticket'

const rootReducer = combineReducers({
    router: routerReducer,
    auth,
    partner,
    event,
    navbar,
    registration,
    resetPassword,
    profile,
    gids,
    service,
    commerce,
    ticket
})

export default rootReducer

export const userId = state => fromAuth.getUserId(state.auth);

export const isRegistered = state => fromReg.isRegistered(state.registration);
export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);

export const accessToken = state => fromAuth.accessToken(state.auth);
export const registrationToken = state => fromReg.getRegistrationToken(state.registration)

export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken = state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth);

export var getErrors = state => {
    let errors = ''
    Object.keys(state).forEach(action => {
        if (state[action].errors && state[action].errors.non_field_errors) errors = state[action].errors.non_field_errors
    })
    return errors
}

export var getFiledErrors = state => {
    let errors = {}
    if (state.errors) {
        Object.keys(state.errors).forEach(field => {
            if (field !== 'non_field_errors') errors[field] = state.errors[field]
        })
    }
    return errors
}

export function resetErrors(state) {
    Object.keys(state).forEach(action => {
        if (state[action].errors && state[action].errors.non_field_errors) state[action].errors.non_field_errors = undefined
    })
}

export function resetStatus(state) {
    Object.keys(state).forEach(action => {
        if (state[action].status) state[action].status = undefined
    })
}

export var getMessages = state => {
    let messages = ''
    Object.keys(state).forEach(action => {
        if (state[action].message) messages = state[action].message
    })
    return messages
}

export function resetMessages(state) {
    Object.keys(state).forEach(action => {
        if (state[action].message) state[action].message = undefined
    })
}

export function withAuth(headers = {}) {
    return (state) => ({
        ...headers,
        'Authorization': `Bearer ${accessToken(state)}`
    })
}