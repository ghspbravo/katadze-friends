import React from 'react'
import { formatToPhone, enforceFormat, formatToDate, showSuccess, showLoading } from '../../functions'
import errorMessage from '../errorMessage';
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';

export default (handeInput, handleSubmit, errors, status, fields, changeValue) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Увидимся в горах!')
        case STATUS_PROCESSING: return showLoading()

        default:
            return <section>
                <div className="container">
                    <h1 className="text-center">Заполни заявку на РКВ 2019!</h1>
                    <p>Если ты не хочешь оплачивать поездку сейчас</p>
                </div>
                <form action="POST" className="container" onSubmit={handleSubmit}>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="name"><p className="small">Ф.И.О. / Name, surname</p></label>
                        <input required onChange={handeInput} value={fields.name} name="name" id="name" className="offset-md-1 col-md-5 col-11" type="text" />
                        {errorMessage(errors, 'name')}
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="birth_date"><p className="small">Дата рождения / Date of Birth</p></label>
                        <input required onChange={e => changeValue('date_birth', formatToDate(e))} onKeyDown={enforceFormat} value={fields.date_birth} name="date_birth" onKeyDown={enforceFormat} name='date' id="birth_date" className="offset-md-1 col-md-5 col-11" type="text" />
                        {errorMessage(errors, 'date_birth')}
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="phone"><p className="small">Номер телефона / tel.№</p></label>
                        <input required onChange={(e) => changeValue('phone_number', formatToPhone(e))} onKeyDown={enforceFormat} value={fields.phone_number} name="phone_number" onFocus={() => fields.phone_number === '' || typeof fields.phone_number === 'undefined' ? changeValue('phone_number', '+7 ') : null} onBlur={() => fields.phone_number === '+7 ' ? changeValue('phones', '') : null} onKeyDown={enforceFormat} name="phone" id="phone" className="offset-md-1 col-md-5 col-11" type="tel" />
                        {errorMessage(errors, 'phone_number')}
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="social"><p className="small">Ссылка на ВК / Link to facebook</p></label>
                        <input required onChange={handeInput} value={fields.url_social} name="url_social" id="social" className="offset-md-1 col-md-5 col-11" type="text" />
                        {errorMessage(errors, 'url_social')}
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="city"><p className="small">Город проживания / City of residence</p></label>
                        <input required onChange={handeInput} value={fields.city} name="city" id="city" className="offset-md-1 col-md-5 col-11" type="text" />
                        {errorMessage(errors, 'city')}
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="university"><p className="small">ВУЗ/Место работы / university/work place</p></label>
                        <input required onChange={handeInput} value={fields.work_place} name="work_place" id="university" className="offset-md-1 col-md-5 col-11" type="text" />
                        {errorMessage(errors, 'work_place')}
                    </div>
                    <div className="row v-offset-small justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'} v-offset-small`} htmlFor="comeFrom"><p className="small">Откуда узнали о нас?</p></label>
                        <div className="offset-md-1 col-md-5">
                            <div className="row align-center">
                                <input onChange={() => changeValue('came_from', 'Университет')} className="col-1 justify-center" type="radio" name="came_from" id="radio-university" />
                                <label className="col-11 col-md-4" htmlFor="radio-university"><p className="small">Университет</p></label>
                            </div>
                            <div className="row align-center">
                                <input onChange={() => changeValue('came_from', 'Друзья')} className="col-1 justify-center" type="radio" name="came_from" id="radio-friends" />
                                <label className="col-11 col-md-4" htmlFor="radio-friends"><p className="small">Друзья</p></label>
                            </div>
                            <div className="row align-center">
                                <input onChange={() => changeValue('came_from', 'Интернет')} className="col-1 justify-center" type="radio" name="came_from" id="radio-web" />
                                <label className="col-11 col-md-4" htmlFor="radio-web"><p className="small">Интернет</p></label>
                            </div>
                            <div className="row align-center justify-center">
                                <input className="col-1 justify-center" type="radio" name="came_from" id="radio-another" />
                                <label className="col-11 col-md-4" htmlFor="another-input"><p className="small">Другое</p></label>
                                <input onChange={handeInput} className="col-11 col-md-7" id="another-input" onFocus={() => document.querySelector('#radio-another').checked = true} name="came_from" type="text" />
                            </div>
                        </div>
                    </div>
                    {errorMessage(errors, 'came_from')}
                    <div className="offset-md-10 col-md-2">
                        <button onClick={() => document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)}>Отправить</button>
                    </div>
                </form>
            </section>
    }
}