import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    isAuthenticated,
    isRegistered,
    getFiledErrors,
    resetSuccess
} from '../reducers'
import { login } from '../actions/auth'
import { registration, activate } from '../actions/registration'
import { resetPassword, resetConfirm } from '../actions/resetPassword'
import {
    Route,
    Switch,
    Redirect
} from 'react-router'

import LoginComponent from '../components/auth/login'
import resetPasswordComponent from '../components/auth/resetPassword'
import registrationComponent from '../components/auth/registration'
import resetConfirmComponent from '../components/auth/resetConfirm';

import thumbnail from '../resourses/Gids/person-thumbnail.png'
import { forceRefresh } from '../actions'

import { showSuccess } from '../functions'


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
            phones: '+7 ',
            img_photo: '',
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

            if (document.querySelector('.avatar-container .close-button') !== null) return
            let closeButton = document.createElement('button')
            closeButton.classList.add('close-button')
            closeButton.innerHTML = "X"
            closeButton.onclick = () => {
                this.setState({ img_photo: '' })
                document.querySelector('.avatar-container img').src = thumbnail
                document.querySelector('.avatar-container').removeChild(closeButton)
                input.value = null
            }
            document.querySelector('.avatar-container').appendChild(closeButton)
        }
        fr.readAsDataURL(file)
    }

    handleReset = (event) => {
        event.preventDefault()
        let locationList = this.props.location.pathname.split('/')
        let uidb64 = locationList[2]
        let token = locationList[3]

        this.props.onResetConfirm(token, uidb64, this.state.password)

        setTimeout( () => {this.props.resetSuccess(); this.props.history.push('/login')}, 3000)
    }

    onSubmit = (event) => {
        event.preventDefault()
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
				setTimeout(() => {this.props.resetSuccess(); this.props.forceRefresh()}, 3000)
                break;

            default:
                break;
        }
    };

    render() {
        return (
            this.props.isAuthenticated
                ?  <Redirect to='/profile' />
                : <Switch>
                    <Route path='/login' render={() => LoginComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.fieldErrors)} />
                    <Route path='/reset-password' render={() => resetPasswordComponent(this.onSubmit,
                        this.handleInputChange,
                        this.props.fieldErrors,
                        this.props.success)} />
                    <Route path='/reset/' render={() => resetConfirmComponent(
                        this.handleReset,
                        this.handleInputChange,
                        this.props.fieldErrors,
                        this.props.success
                    )} />
                    <Route path='/registration' render={() => registrationComponent(this.onSubmit,
                        this.handleInputChange,
                        this.handleFileLoad,
                        this.props.fieldErrors,
                        this.handleValueChange,
                        this.state)} />
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
    success: state.resetPassword.success,
	resetSuccess: () => resetSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password, isRegistered = false) => {
        dispatch(login(username, password))
        if (isRegistered) setTimeout(() => dispatch(activate()), 5000)
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