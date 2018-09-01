import React from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage';

import { formatToPhone, formatToDate, enforceFormat } from '../../functions'

// import thumbnail from '../../resourses/Gids/person-thumbnail.png'

export default (submitHandler, inputHandler, fileHandler, errors, changeValue, fields) => {
    return (
        <div>
            <div className="container">
                <form name="registration" className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="first_name" autoComplete="on" type='text' placeholder='Имя' onChange={inputHandler} required />
                    {errorMessage(errors, 'first_name')}
                    <input name="last_name" autoComplete="on" type='text' placeholder='Фамилия' onChange={inputHandler} required />
                    {errorMessage(errors, 'last_name')}
                    <input value={fields.date_birth} onKeyDown={enforceFormat} name="date_birth" placeholder="Дата рождения" autoComplete="on" type='text' onChange={e => changeValue('date_birth', formatToDate(e))} required />
                    {errorMessage(errors, 'date_birth')}
                    <select name="gender" onChange={inputHandler} required>
                        <option value="" disabled selected hidden>Пол</option>
                        <option value="0">Мужчина</option>
                        <option value="1">Женщина</option>
                    </select>
                    {errorMessage(errors, 'gender')}
                    <input name="residence" autoComplete="on" type='text' placeholder='Город' onChange={inputHandler} required />
                    {errorMessage(errors, 'residence')}
                    <input name="phones" value={fields.phones} onKeyDown={enforceFormat} autoComplete="on" type='tel' onFocus={() => fields.phones === '' || typeof fields.phones === 'undefined' ? changeValue('phones', '+7 ') : null} onBlur={() => fields.phones === '+7 ' ? changeValue('phones', '') : null} placeholder='Номер телефона' onChange={(e) => changeValue('phones', formatToPhone(e))} required />
                    {errorMessage(errors, 'phones')}
                    <input name="username" autoComplete="on" type='text' placeholder='Имя пользователя' onChange={inputHandler} required />
                    {errorMessage(errors, 'username')}
                    <input name="email" autoComplete="on" type="email" placeholder='Email' onChange={inputHandler} required />
                    {errorMessage(errors, 'email')}
                    <input name="password" autoComplete="on" type="password" placeholder='Пароль' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    <div className="row v-offset-small">
                        <div className="col-md-4 col-12 avatar-container justify-center"><img src={fields.thumbnail} alt="ava" /></div>
                        <div className="offset-md-1 col-md-6 col-12 align-center">
                            <p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
                            <label className="file v-offset-small" htmlFor="reg-photo"><p>Загрузить фото</p></label>
                        </div>
                        <input id="reg-photo" className=" offset-md-2 col-md-6 col-12" name="img_photo" type="file" accept=".jpg, .jpeg, .png" onChange={fileHandler} />
                    </div>
                    {errorMessage(errors, 'img_photo')}
                    <div className="v-offset-small">
                        <p className="small secondary">Регистрируясь, Вы соглашаетесь на обработку Ваших персональных данных и подтверждаете, что Вам не менее 18 лет. </p>
                    </div>
                    <button type="submit">Регистрация</button>
                </form>
            </div>
            <div className="container">
                <div className="v-offset-small col-12"><p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p></div>
            </div>
        </div>
    )
}
