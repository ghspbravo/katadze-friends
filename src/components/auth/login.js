import React from 'react'
import { Link } from 'react-router-dom'

export default (submitHandler, inputHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="username" autoComplete="login" type='text' placeholder='username' onChange={inputHandler} />
                    <input name="password" autoComplete="password" type="password" placeholder='password' onChange={inputHandler} />
                    <button type="submit">Войти</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Забыли пароль? <Link to='/reset-password'>Восстановить</Link></p></div>
                <div className="v-offset-small col-12"><p>Нет аккаунта? <Link to='/registration'>Создать</Link></p></div>
                {typeof errors === 'undefined'
                    ? true
                    : Object.keys(errors).map((type, i) => <p key={i} >{errors[type][0]}</p>)
                }
            </div>
        </div>
    )
}
