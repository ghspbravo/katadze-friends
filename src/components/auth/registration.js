import React from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage';

export default (submitHandler, inputHandler, fileHandler, errors) => {
    return (
        <div>
            <div className="container">
                <form name="registration" className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="first_name" autoComplete="name" type='text' placeholder='Имя' onChange={inputHandler} required />
                    {errorMessage(errors, 'first_name')}
                    <input name="last_name" autoComplete="last_name" type='text' placeholder='Фамилия' onChange={inputHandler} required />
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
                    <input name="phones" autoComplete="tel" type='tel' placeholder='Номер телефона' onChange={inputHandler} required />
                    <p className="small secondary">Важно, чтобы номер телефона начинался с +7</p>
                    {errorMessage(errors, 'phones')}
                    <input name="username" autoComplete="login" type='text' placeholder='Имя пользователя' onChange={inputHandler} required />
                    {errorMessage(errors, 'username')}
                    <input name="email" autoComplete="email" type="email" placeholder='Email' onChange={inputHandler} required />
                    {errorMessage(errors, 'email')}
                    <input name="password" autoComplete="password" type="password" placeholder='Пароль' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    <div className="row v-offset-small">
                        <div className="col-md-4 col-12 avatar-container justify-center"><img src="http://via.placeholder.com/250x250/ffffff" alt="ava" /></div>
                        <div className="offset-md-1 col-md-6 col-12 align-center">
                            <p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
                            <label className="file v-offset-small" htmlFor="reg-photo"><p>Загрузить фото</p></label>
                        </div>
                        <input id="reg-photo" className=" offset-md-2 col-md-6 col-12" name="img_photo" type="file" accept=".jpg, .jpeg, .png" onChange={fileHandler} />
                    </div>
                    {errorMessage(errors, 'img_photo')}
                    <button type="submit">Регистрация</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p></div>
            </div>
        </div>
    )
}
