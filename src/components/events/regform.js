import React, { Component } from 'react'
import { formatToPhone, enforceFormat, formatToDate } from '../../functions'

export default class regform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phone: '+7 ',
            date: ''
        }
    }

    render() {
        return (
            <section>
                <h1 className="text-center">Заполни заявку на РКВ 2019!</h1>
                <form action="POST" className="container">
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="name"><p className="small">Ф.И.О. / Name, surname</p></label>
                        <input id="name" className="offset-md-1 col-md-5 col-11" type="text" />
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="birth_date"><p className="small">Дата рождения / Date of Birth</p></label>
                        <input onChange={(e) => this.setState({date: formatToDate(e)})} onKeyDown={enforceFormat} value={this.state.date}  name='date' id="birth_date" className="offset-md-1 col-md-5 col-11" type="text" />
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="phone"><p className="small">Номер телефона / tel.№</p></label>
                        <input onChange={(e) => this.setState({phone: formatToPhone(e)})} onKeyDown={enforceFormat} value={this.state.phone} name="phone" id="phone" className="offset-md-1 col-md-5 col-11" type="tel" />
                    </div>{console.log(this.state)}
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="social"><p className="small">Ссылка на ВК / Link to facebook</p></label>
                        <input id="social" className="offset-md-1 col-md-5 col-11" type="text" />
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="city"><p className="small">Город проживания / City of residence</p></label>
                        <input id="city" className="offset-md-1 col-md-5 col-11" type="text" />
                    </div>
                    <div className="row v-offset-small align-center justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'}`} htmlFor="university"><p className="small">ВУЗ/Место работы / university/work place</p></label>
                        <input id="university" className="offset-md-1 col-md-5 col-11" type="text" />
                    </div>
                    <div className="row v-offset-small justify-center">
                        <label className={`col-12 col-lg-4 col-md-6 ${window.innerWidth < 576 ? '' : 'text-right'} v-offset-small`} htmlFor="comeFrom"><p className="small">Откуда узнали о нас?</p></label>
                        <div className="offset-md-1 col-md-5">
                            <div className="row align-center">
                                <input className="col-1 justify-center" type="radio" name="radio" id="radio-university" />
                                <label className="col-11 col-md-4" htmlFor="radio-university"><p className="small">Университет</p></label>
                            </div>
                            <div className="row align-center">
                                <input className="col-1 justify-center" type="radio" name="radio" id="radio-friends" />
                                <label className="col-11 col-md-4" htmlFor="radio-friends"><p className="small">Друзья</p></label>
                            </div>
                            <div className="row align-center">
                                <input className="col-1 justify-center" type="radio" name="radio" id="radio-web" />
                                <label className="col-11 col-md-4" htmlFor="radio-web"><p className="small">Интернет</p></label>
                            </div>
                            <div className="row align-center justify-center">
                                <input className="col-1 justify-center" type="radio" name="radio" id="radio-another" />
                                <label className="col-11 col-md-4" htmlFor="radio-another"><p className="small">Другое</p></label>
                                <input className="col-11 col-md-7" name="another" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-10 col-md-2">
                        <button className="">Отправить</button>
                    </div>
                </form>
            </section>
        )
    }
}
