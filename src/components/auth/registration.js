import React from 'react'
import { Link } from 'react-router-dom'

export default (submitHandler, inputHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="username" autoComplete="login" type='text' placeholder='username' onChange={inputHandler} />
                    <input name="email" autoComplete="email" type="email" placeholder='email' onChange={inputHandler} />
                    <input name="password" autoComplete="password" type="password" placeholder='password' onChange={inputHandler} />
                    <button type="submit">Регистрация</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p></div>
                {typeof errors === 'undefined'
                    ? true
                    : Object.keys(errors).map((type, i) => <p key={i}>{errors[type][0]}</p>)
                }
            </div>
        </div>
    )
}
