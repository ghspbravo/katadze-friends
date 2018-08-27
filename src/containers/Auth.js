import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    isAuthenticated,
    isRegistered,
    getFiledErrors,
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

    handleFileLoad = (event) => {
        let input = event.target
        let file = event.target.files[0]
        let fr = new FileReader()
        fr.onloadend = info => {
            document.querySelector('.avatar-container img').src = info.target.result
            this.setState({ img_photo: info.target.result })

            let closeButton = document.createElement('button')
            closeButton.classList.add('close-button')
            closeButton.innerHTML = "X"
            closeButton.onclick = () => {
                this.setState({img_photo: ''})
                document.querySelector('.avatar-container img').src = 'http://via.placeholder.com/250x250/ffffff'
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
                        this.props.resetErrors)} />
                    <Route path='/reset/' render={() => resetConfirmComponent(
                        this.handleReset,
                        this.handleInputChange,
                        this.props.fieldErrors
                    )} />
                    <Route path='/registration' render={() => registrationComponent(this.onSubmit,
                        this.handleInputChange,
                        this.handleFileLoad,
                        this.props.registrationErrors)} />
                    {this.props.isRegistered
                        ? this.props.onLogin(this.state.username, this.state.password, this.props.isRegistered)
                        : null
                    }
                </Switch>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
    isRegistered: isRegistered(state),
    fieldErrors: getFiledErrors(state.resetPassword)
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);