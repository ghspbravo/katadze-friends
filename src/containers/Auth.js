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
            email: '',
            first_name: '',
            last_name: '',
            gender: '',
            date_birth: '',
            residence: '',
            phones: '',
            img_photo: ''
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

    handleFileLoad = () => {
        let file = document.forms.registration.img_photo.files[0]
        let fr = new FileReader()
        fr.onloadend = info => {
            document.querySelector('.avatar-container img').src = info.target.result
            // this.setState({img_photo: info.target.result})
        }
        fr.readAsDataURL(file)
        let load = new FileReader()
        load.onloadend = info => this.setState({img_photo: info.target.result})
        load.readAsBinaryString(file)
    }

    onSubmit = (event) => {
        event.preventDefault()
        switch (this.props.match.path) {
            case '/login':
                this.props.onLogin(this.state.username, this.state.password)
                break;
            case '/registration':
                this.props.onRegistration(this.state.email, this.state.password, this.state.date_birth, this.state.gender, this.state.last_name, this.state.first_name, this.state.username, this.state.residence, this.state.phones, this.state.img_photo)
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
                        this.handleFileLoad,
                        this.props.registrationErrors)} />
                    {this.props.isRegistered
                        ? this.props.onLogin(this.state.username, this.state.password)
                        : null
                    }
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
    resetMessage: getMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => {
        dispatch(login(username, password))
    },

    onRegistration: (email, password, date_birth, gender, last_name, first_name, username, residence) => {
        dispatch(registration(email, password, date_birth, gender, last_name, first_name, username, residence))
    },

    onReset: (email) => {
        dispatch(resetPassword(email))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);