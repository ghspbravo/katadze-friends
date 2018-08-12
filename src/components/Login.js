import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registrationErrors, authErrors, isAuthenticated, isRegistered, getUsername, getMessage, resetErrors } from '../reducers'
import { login } from '../actions/auth'
import { registration } from '../actions/registration'
import { resetPassword } from '../actions/resetPassword'
import {
    Route,
    Switch,
    Redirect
} from 'react-router'
import { Link } from 'react-router-dom'



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
                ? <Redirect to='/Profile' />
                : <Switch>
                    <Route path='/login' render={() =>
                        <div>
                            <div className="container">
                                <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={this.onSubmit}>
                                    <input name="username" autoComplete="login" type='text' placeholder='username' onChange={this.handleInputChange} />
                                    <input name="password" autoComplete="password" type="password" placeholder='password' onChange={this.handleInputChange} />
                                    <button type="submit">Войти</button>
                                </form>
                            </div>
                            <div className="container">
                                <div className="v-offset-small col-12"><p>Забыли пароль? <Link to='/reset-password'>Восстановить</Link></p></div>
                                <div className="v-offset-small col-12"><p>Нет аккаунта? <Link to='/registration'>Создать</Link></p></div>
                                {typeof this.props.authErrors === 'undefined'
                                    ? true
                                    : Object.keys(this.props.authErrors).map((type, i) => <p key={i} >{this.props.authErrors[type][0]}</p>)
                                }
                            </div>
                        </div>
                    } />
                    <Route path='/reset-password' render={() =>
                        <div className="container">
                            {typeof this.props.resetMessage === 'undefined'
                                ? <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={this.onSubmit}>
                                    <input name="email" autoComplete="email" type="email" placeholder='email' onChange={this.handleInputChange} />
                                    <button type="submit">Сбросить пароль</button>
                                </form>
                                : <p>{this.props.resetMessage}</p>
                            }
                            {typeof this.props.resetErrors === 'undefined'
                                ? true
                                : Object.keys(this.props.resetErrors).map((type, i) => <p key={i} >{this.props.resetErrors[type][0]}</p>)
                            }
                        </div>
                    } />
                    <Route path='/registration' render={() =>
                        <div>
                            <div className="container">
                                {this.props.isRegistered
                                    ? <p className="offset-4" >{`${this.props.username}, Вам необходимо подтвердить свой почтовый адрес`}</p>
                                    : <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={this.onSubmit}>
                                        <input name="username" autoComplete="login" type='text' placeholder='username' onChange={this.handleInputChange} />
                                        <input name="email" autoComplete="email" type="email" placeholder='email' onChange={this.handleInputChange} />
                                        <input name="password" autoComplete="password" type="password" placeholder='password' onChange={this.handleInputChange} />
                                        <button type="submit">Регистрация</button>
                                    </form>
                                }
                            </div>
                            <div className="container">
                                <div className="v-offset-small col-12"><p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p></div>
                                {typeof this.props.registrationErrors === 'undefined'
                                    ? true
                                    : Object.keys(this.props.registrationErrors).map((type, i) => <p key={i}>{this.props.registrationErrors[type][0]}</p>)
                                }
                            </div>
                        </div>
                    } />
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
    username: getUsername(state),
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