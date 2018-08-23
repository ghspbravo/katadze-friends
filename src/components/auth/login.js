import React from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage'

export default (submitHandler, inputHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form name='login' className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="username" autoComplete="login" type='text' placeholder='Имя пользователя' onChange={inputHandler} required />
                    {errorMessage(errors, 'username')}
                    <input name="password" autoComplete="password" type="password" placeholder='Пароль' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    {errorMessage(errors)}
                    <button type="submit">Войти</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Забыли пароль? <Link to='/reset-password'>Восстановить</Link></p></div>
                <div className="v-offset-small col-12"><p>Нет аккаунта? <Link to='/registration'>Создать</Link></p></div>
            </div>
        </div>
    )
}
