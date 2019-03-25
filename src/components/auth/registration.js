import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import errorMessage from '../errorMessage';

import { formatToPhone, formatToDate, enforceFormat } from '../../functions'

export default class registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 1,
            passwordRepeat: ''
        }
    }

    handleNextStep = (e) => {
        e.preventDefault()
        if (this.state.passwordRepeat !== this.props.fields.password) return
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    handlePreviousStep = (e) => {
        this.setState({
            currentStep: this.state.currentStep - 1,
            passwordRepeat: ''
        })
    }

    render() {
        switch (this.state.currentStep) {
            case 1:
                return (<div className="auth-container">
                    <form name="registration" className='auth-container-form form registration-form' action="POST" autoComplete="off" onSubmit={this.handleNextStep}>
                        <p className="small registration-form-steps">Шаг 1 из 3</p>
                        <input name="username" autoComplete="username" type='text' placeholder='Имя пользователя' onChange={this.props.inputHandler} value={this.props.fields.username} required />
                        {errorMessage(this.props.errors, 'username')}
                        <input name="email" autoComplete="on" type="email" placeholder='Email' onChange={this.props.inputHandler} value={this.props.fields.email} required />
                        {errorMessage(this.props.errors, 'email')}
                        <input name="password" autoComplete="on" type="password" placeholder='Пароль' onChange={this.props.inputHandler} required />
                        {errorMessage(this.props.errors, 'password')}
                        <p className="small">Пароль должен быть минимум 8 символов</p>
                        <input name="passwordRepeat" autoComplete="on" type="password" placeholder='Повторите пароль'
                            onChange={event => this.setState({ passwordRepeat: event.target.value })} required />
                        {this.state.passwordRepeat
                            ? this.state.passwordRepeat === this.props.fields.password
                                ? <p className="small">Пароли совпадают</p>
                                : <p style={{ color: 'red' }} className="small">Пароли НЕ совпадают</p>
                            : null
                        }
                        <div className="row no-gutters">
                            <button className="auth-container-form-submit" type="submit">Дальше</button>
                        </div>
                    </form>
                    <div className="v-offset-small col-12"><p className="small">Уже есть аккаунт? <Link className="small" to='/login' style={{ textDecoration: 'underline' }}>Войти</Link></p></div>
                </div>)

            case 2:
                return (
                    <div className="auth-container">
                        <form name="registration" className='auth-container-form form registration-form' action="POST" autoComplete="off" onSubmit={this.handleNextStep}>
                            <p className="small registration-form-steps">Шаг 2 из 3</p>
                            <input name="first_name" autoComplete="on" type='text' placeholder='Имя' onChange={this.props.inputHandler} value={this.props.fields.first_name} required />
                            {errorMessage(this.props.errors, 'first_name')}
                            <input name="last_name" autoComplete="on" type='text' placeholder='Фамилия' onChange={this.props.inputHandler} value={this.props.fields.last_name} required />
                            {errorMessage(this.props.errors, 'last_name')}
                            <input value={this.props.fields.date_birth} onKeyDown={enforceFormat} name="date_birth" placeholder="Дата рождения" autoComplete="on" type='text' onChange={e => this.props.changeValue('date_birth', formatToDate(e))} required />
                            {errorMessage(this.props.errors, 'date_birth')}
                            <select value={this.props.fields.gender} name="gender" onChange={this.props.inputHandler} required>
                                <option value="" disabled selected hidden>Пол</option>
                                <option value="0">Мужской</option>
                                <option value="1">Женский</option>
                            </select>
                            {errorMessage(this.props.errors, 'gender')}
                            <input value={this.props.fields.residence} name="residence" autoComplete="on" type='text' placeholder='Город' onChange={this.props.inputHandler} required />
                            {errorMessage(this.props.errors, 'residence')}
                            <input name="phones" value={this.props.fields.phones} onKeyDown={enforceFormat} autoComplete="on" type='tel' placeholder='Номер телефона' onChange={(e) => this.props.changeValue('phones', formatToPhone(e))} required />
                            {errorMessage(this.props.errors, 'phones')}
                            <div className="row no-gutters">
                                <button type='button' onClick={() => this.handlePreviousStep()} >Назад</button>
                                <button className="auth-container-form-submit" type="submit">Дальше</button>
                            </div>
                        </form>
                        <div className="v-offset-small col-12"><p className="small">Уже есть аккаунт? <Link className="small" to='/login' style={{ textDecoration: 'underline' }}>Войти</Link></p></div>
                    </div>
                )

            case 3:
                return (
                    <div className="auth-container">
                        <form name="registration" className='auth-container-form form registration-form' action="POST" autoComplete="off" onSubmit={(e) => {
                            this.setState({currentStep: 1})
                            this.props.submitHandler(e)
                            }}>
                            <p className="small registration-form-steps">Шаг 3 из 3</p>
                            <div className="row no-gutters v-offset-small">
                                <div id="avatar-container" className="col-12 avatar-container justify-center">
                                    <img src={this.props.fields.thumbnail} alt="ava" /></div>
                                <div className="col-12 align-center">
                                    <p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
                                    <label className="file v-offset-small" htmlFor="reg-photo"><p>Загрузить фото</p></label>
                                </div>
                                <input id="reg-photo" className=" offset-md-2 col-md-6 col-12" name="img_photo" type="file" accept=".jpg, .jpeg, .png" onChange={this.props.fileHandler} />
                            </div>
                            {errorMessage(this.props.errors, 'avatar')}
                            <div className="v-offset-small">
                                <p className="small secondary registration-form-accept">Регистрируясь, Вы соглашаетесь на обработку Ваших персональных данных и подтверждаете, что Вам не менее 18 лет. </p>
                            </div>
                            <div className="row no-gutters">
                                <button type='button' onClick={() => this.handlePreviousStep()} >Назад</button>
                                <button className="auth-container-form-submit" type="submit">Регистрация</button>
                            </div>
                        </form>
                        <div className="v-offset-small col-12"><p className="small">Уже есть аккаунт? <Link className="small" to='/login' style={{ textDecoration: 'underline' }}>Войти</Link></p></div>
                    </div>
                )

            default:
                break;
        }
        // return (
        //     <div className="auth-container">
        //         <form name="registration" className='auth-container-form form' action="POST" autoComplete="off" onSubmit={this.props.submitHandler}>
        //             <input name="first_name" autoComplete="on" type='text' placeholder='Имя' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'first_name')}
        //             <input name="last_name" autoComplete="on" type='text' placeholder='Фамилия' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'last_name')}
        //             <input value={this.props.fields.date_birth} onKeyDown={enforceFormat} name="date_birth" placeholder="Дата рождения" autoComplete="on" type='text' onChange={e => this.props.changeValue('date_birth', formatToDate(e))} required />
        //             {errorMessage(this.props.errors, 'date_birth')}
        //             <select name="gender" onChange={this.props.inputHandler} required>
        //                 <option value="" disabled selected hidden>Пол</option>
        //                 <option value="0">Мужской</option>
        //                 <option value="1">Женский</option>
        //             </select>
        //             {errorMessage(this.props.errors, 'gender')}
        //             <input name="residence" autoComplete="on" type='text' placeholder='Город' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'residence')}
        //             <input name="phones" value={this.props.fields.phones} onKeyDown={enforceFormat} autoComplete="on" type='tel' placeholder='Номер телефона' onChange={(e) => this.props.changeValue('phones', formatToPhone(e))} required />
        //             {errorMessage(this.props.errors, 'phones')}
        //             <input name="username" autoComplete="on" type='text' placeholder='Имя пользователя' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'username')}
        //             <input name="email" autoComplete="on" type="email" placeholder='Email' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'email')}
        //             <input name="password" autoComplete="on" type="password" placeholder='Пароль' onChange={this.props.inputHandler} required />
        //             {errorMessage(this.props.errors, 'password')}
        //             <div className="row v-offset-small">
        //                 <div className="col-md-4 col-12 avatar-container justify-center"><img src={this.props.fields.thumbnail} alt="ava" /></div>
        //                 <div className="offset-md-1 col-md-6 col-12 align-center">
        //                     <p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
        //                     <label className="file v-offset-small" htmlFor="reg-photo"><p>Загрузить фото</p></label>
        //                 </div>
        //                 <input id="reg-photo" className=" offset-md-2 col-md-6 col-12" name="img_photo" type="file" accept=".jpg, .jpeg, .png" onChange={this.props.fileHandler} />
        //             </div>
        //             {errorMessage(this.props.errors, 'img_photo')}
        //             <div className="v-offset-small">
        //                 <p className="small secondary">Регистрируясь, Вы соглашаетесь на обработку Ваших персональных данных и подтверждаете, что Вам не менее 18 лет. </p>
        //             </div>
        //             <button type="submit">Регистрация</button>
        //         </form>
        //         <div className="v-offset-small col-12"><p className="small">Уже есть аккаунт? <Link className="small" to='/login' style={{ textDecoration: 'underline' }}>Войти</Link></p></div>
        //     </div>
        // )
    }
}
