import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    isAuthenticated,
    isRegistered,
    getFiledErrors,
    resetStatus
} from '../reducers'
import { login, vkAuth, fbAuth } from '../actions/auth'
import { registration, activate } from '../actions/registration'
import { resetPassword, resetConfirm } from '../actions/resetPassword'
import {
    Route,
    Switch,
    Redirect
} from 'react-router'

import LoginComponent from '../components/auth/login'
import resetPasswordComponent from '../components/auth/resetPassword'
import RegistrationComponent from '../components/auth/registration'
import resetConfirmComponent from '../components/auth/resetConfirm';

import loader from '../components/loader'

import { forceRefresh, STATUS_SUCCESS } from '../actions'

import { showSuccess } from '../functions'
import { providers } from '../constants';


class Login extends Component {
    constructor(props) {
        super(props)
        const reqJpg = require.context('../resourses/Profile', true, /\.jpg$/)
        const paths = reqJpg.keys()
        const thumbnail = paths.map(path => reqJpg(path))

        const randomId = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

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
            img_photo: '',
            thumbnail: thumbnail[randomId]
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

    handleValueChange = (name, value) => this.setState({ [name]: value })

    handleFileLoad = (event) => {
        let input = event.target
        let file = event.target.files[0]
        let fr = new FileReader()
        fr.onloadend = info => {
            document.querySelector('.avatar-container img').src = info.target.result
            this.setState({ img_photo: info.target.result })
        }
        fr.readAsDataURL(file)
    }

    handleReset = (event) => {
        event.preventDefault()
        let locationList = this.props.location.pathname.split('/')
        let uidb64 = locationList[2]
        let token = locationList[3]

        this.props.onResetConfirm(token, uidb64, this.state.password)

        setTimeout(() => { if (this.props.status === STATUS_SUCCESS) this.props.history.push('/login') }, 3000)
    }

    onSubmit = (event) => {
        event.preventDefault()
        event.target.querySelectorAll('input').forEach(input => input.dispatchEvent(new Event('focusout')))
        switch (this.props.match.path) {
            case '/login':
                this.props.onLogin(this.state.username, this.state.password)
                break;
            case '/registration':
                let date = this.state.date_birth.split('.')
                let phone = this.state.phones.replace(/\D/g, '')
                this.props.onRegistration(this.state.email, this.state.password, date.length === 3 ? `${date[2]}-${date[1]}-${date[0]}` : '', this.state.gender, this.state.last_name, this.state.first_name, this.state.username, this.state.residence, `+${phone}`, this.state.img_photo)
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
                    {this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ email: '', password: '' }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
                    <Route exact path='/login' render={() => <LoginComponent
                        submitHandler={this.onSubmit}
                        inputHandler={this.handleInputChange}
                        errors={this.props.authFieldErrors}
                    />} />
                    <Route exact path='/login/vk' render={() => this.props.authErrors
                        ? <Redirect to='/login' />
                        : this.props.onSocial(providers.VK, this.props.location.search.split('=')[1])
                    } />
                    <Route exact path='/login/facebook' render={() => this.props.authErrors
                        ? <Redirect to='/login' />
                        : this.props.onSocial(providers.FB, this.props.location.search.split('=')[1])
                    } />
                    <Route path='/reset-password' render={() => resetPasswordComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.fieldErrors,
                        this.props.status)} />
                    <Route path='/reset/' render={() => resetConfirmComponent(
                        this.handleReset,
                        this.handleInputChange,
                        this.props.fieldErrors,
                        this.props.status
                    )} />
                    <Route path='/registration' render={() => 
                    this.props.registrationProcessing
                        ? loader()
                        : <RegistrationComponent
                        submitHandler={this.onSubmit}
                        inputHandler={this.handleInputChange}
                        fileHandler={this.handleFileLoad}
                        errors={this.props.fieldErrors}
                        changeValue={this.handleValueChange}
                        fields={this.state}
                    
                    />} />
                    {this.props.isRegistered
                        ? showSuccess('Вы стали частью семьи Катадзе. Подготавливаем Ваш личный кабинет...', () => this.props.onLogin(this.state.username, this.state.password, this.props.isRegistered))
                        : null
                    }
                </Switch>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
    isRegistered: isRegistered(state),
    fieldErrors: getFiledErrors(state.registration),
    authFieldErrors: getFiledErrors(state.auth),
    status: state.resetPassword.status,
    resetStatus: () => resetStatus(state),
    authErrors: state.auth.errors,
    registrationProcessing: state.registration.isProcessing
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password, isRegistered = false) => {
        dispatch(login(username, password))
        if (isRegistered) setTimeout(() => dispatch(activate()), 5000)
    },

    onSocial: (provider, code) => {
        switch (provider) {
            case providers.VK:
                dispatch(vkAuth(code))
                break;

            case providers.FB:
                dispatch(fbAuth(code))
                break;

            default:
                break;
        }
        return null
    },

    onRegistration: (email, password, date_birth, gender, last_name, first_name, username, residence, phones, img_photo) => {
        dispatch(registration(email, password, date_birth, gender, last_name, first_name, username, residence, phones, img_photo))
    },

    onReset: (email) => {
        dispatch(resetPassword(email))
    },
    onResetConfirm: (token, uidb64, password) => {
        dispatch(resetConfirm(token, uidb64, password))
    },

    forceRefresh: () => {
        dispatch(forceRefresh())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);