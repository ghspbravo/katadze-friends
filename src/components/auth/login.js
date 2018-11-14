import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage'

import { vkAuthApp, fbAuthApp } from '../../constants'

export default class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showIdentifierError: false,
            showPasswordError: false,
        }
    }
    
    componentDidUpdate() {
        if (this.state.showIdentifierError !== this.props.errors['identifier']) this.setState({
            showIdentifierError: this.props.errors['identifier']
        })
        if (this.state.showPasswordError !== this.props.errors['password']) this.setState({
            showPasswordError: this.props.errors['password']
        })
    }

    render() {
        return (
            <div className="auth-container">
                <form className='auth-container-form form' name='login' action="POST" autoComplete="off" onSubmit={this.props.submitHandler}>

                    <input className={`form-input${this.state.showIdentifierError ? '-error' : null}`} name="username" autoComplete="login" type='text' placeholder='Имя пользователя' onChange={this.props.inputHandler} onBlur={() => {
                        if (this.state.showIdentifierError) this.setState({ showIdentifierError: false })
                    }} required />
                    {this.state.showIdentifierError
                        ? errorMessage(this.props.errors, 'identifier')
                        : null}

                    <input className={`form-input${this.state.showPasswordError ? '-error' : null}`} name="password" autoComplete="password" type="password" placeholder='Пароль' onChange={this.props.inputHandler} onBlur={() => {
                        if (this.state.showPasswordError) this.setState({ showPasswordError: false })
                    }} required />
                    {this.state.showPasswordError
                        ? errorMessage(this.props.errors, 'password')
                        : null}

                    <div className='row no-gutters'>
                        <button style={{ marginTop: '10px' }} className='auth-container-form-submit' type="submit">Войти</button>
                    </div>
                </form>
                <div className="row no-gutters">
                    <button style={{ marginTop: '40px' }} onClick={() => window.location.href = vkAuthApp} className="social-button social-button-vk">
                        Авторизация через ВК</button>
                </div>
                <div className="row no-gutters">
                    <button style={{ marginTop: '20px' }} onClick={() => window.location.href = fbAuthApp} className="social-button social-button-fb">
                        Войти через Facebook</button>
                </div>
                <div className="v-offset-small col-12"><p className="small">Забыли пароль? <Link to='/reset-password' style={{ textDecoration: 'underline' }} className="small">Восстановить</Link></p></div>
                <div className="v-offset-small col-12"><p className="small">Нет аккаунта? <Link to='/registration' style={{ textDecoration: 'underline' }} className="small">Создать</Link></p></div>
            </div>
        )
    }
}
