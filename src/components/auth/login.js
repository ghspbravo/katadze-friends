import React from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage'

import { vkAuthApp } from '../../constants'

export default (submitHandler, inputHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form name='login' className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="username" autoComplete="login" type='text' placeholder='Имя пользователя' onChange={inputHandler} required />
                    {errorMessage(errors, 'username')}
                    <input name="password" autoComplete="password" type="password" placeholder='Пароль' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    <button type="submit">Войти</button>
                </form>
            </div>
            <div className="container">
                <button className="lead col-12 col-lg-4"><a className='no_lead' href={vkAuthApp}>
                    Войти через ВК
                </a></button>
                <div className="v-offset-small col-12"><p>Забыли пароль? <Link to='/reset-password' style={{ textDecoration: 'underline' }}>Восстановить</Link></p></div>
                <div className="v-offset-small col-12"><p>Нет аккаунта? <Link to='/registration' style={{ textDecoration: 'underline' }}>Создать</Link> / <a style={{textDecoration: 'underline'}} href={vkAuthApp}>Зарегистрироваться через ВК</a></p></div>
            </div>
        </div>
    )
}
