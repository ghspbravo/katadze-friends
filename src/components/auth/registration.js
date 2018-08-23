import React from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage';

export default (submitHandler, inputHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="first_name" autoComplete="name" type='text' placeholder='Имя' onChange={inputHandler} required />
                    {errorMessage(errors, 'first_name')}
                    <input name="last_name" autoComplete="surname" type='text' placeholder='Фамилия' onChange={inputHandler} required />
                    {errorMessage(errors, 'last_name')}
                    <div className="row align-bottom no-margin">
                        <label className="col-6" htmlFor="date_birth"><p className="small">Дата рождения</p></label>
                        <input className="col-6" id="date_birth" name="date_birth" autoComplete="birthdate" type='date' onChange={inputHandler} required />
                    </div>
                    {errorMessage(errors, 'date_birth')}
                    <select name="gender" onChange={inputHandler} required>
                        <option value="" disabled selected hidden>Пол</option>
                        <option value="0">Мужчина</option>
                        <option value="1">Женщина</option>
                    </select>
                    {errorMessage(errors, 'gender')}
                    <input name="residence" autoComplete="city" type='text' placeholder='Город' onChange={inputHandler} required />
                    {errorMessage(errors, 'residence')}
                    <input name="username" autoComplete="login" type='text' placeholder='Имя пользователя' onChange={inputHandler} required />
                    {errorMessage(errors, 'username')}
                    <input name="email" autoComplete="email" type="email" placeholder='Email' onChange={inputHandler} required />
                    {errorMessage(errors, 'email')}
                    <input name="password" autoComplete="password" type="password" placeholder='Пароль' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    {errorMessage(errors)}
                    <button type="submit">Регистрация</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p></div>
            </div>
        </div>
    )
}
