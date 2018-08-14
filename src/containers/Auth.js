import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    registrationErrors,
    authErrors,
    isAuthenticated,
    isRegistered,
    getMessage,
    resetErrors
} from '../reducers'
import { login } from '../actions/auth'
import { registration } from '../actions/registration'
import { resetPassword } from '../actions/resetPassword'
import {
    Route,
    Switch,
    Redirect
} from 'react-router'

import LoginComponent from '../components/auth/login'
import resetPasswordComponent from '../components/auth/resetPassword'
import registrationComponent from '../components/auth/registration'



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name
        this.setState({
            [name]: value
        });
    };

    onSubmit = (event) => {
        event.preventDefault()
        switch (this.props.match.path) {
            case '/login':
                this.props.onLogin(this.state.username, this.state.password)
                break;
            case '/registration':
                this.props.onRegistration(this.state.username, this.state.password, this.state.email)
                break;
            case '/reset-password':
                this.props.onReset(this.state.email)
                break;

            default:
                break;
        }
    };

    render() {
        return (
            this.props.isAuthenticated
                ? <Redirect to='/profile' />
                : <Switch>
                    <Route path='/login' render={() => LoginComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.authErrors)} />
                    <Route path='/reset-password' render={() => resetPasswordComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.resetMessage,
                        this.props.resetErrors)} />
                    <Route path='/registration' render={() => registrationComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.registrationErrors)} />
                </Switch>
        )
    }
}


const mapStateToProps = (state) => ({
    authErrors: authErrors(state),
    registrationErrors: registrationErrors(state),
    resetErrors: resetErrors(state),
    isAuthenticated: isAuthenticated(state),
    isRegistered: isRegistered(state),
    resetMessage: getMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => {
        dispatch(login(username, password))
    },

    onRegistration: (username, password, email) => {
        dispatch(registration(username, email, password))
    },

    onReset: (email) => {
        dispatch(resetPassword(email))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);