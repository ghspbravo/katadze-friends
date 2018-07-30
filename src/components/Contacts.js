import React, { Component } from 'react'

import cityImage from '../resourses/Contacts/pass.png'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <section id="contacts-main" className="row vh-50">
                    <div className="offset-lg-2 col-lg-4">
                        <h1 className="lead">У тебя остался вопрос?</h1>
                        <h1><span>Свяжись с нами</span></h1>
                        <div className="col-lg-12 contact-form">
                            <form className="justify-space-between row" action="">
                                <input className="col-12" type="text" placeholder="Меня интересует" name="theme" id="theme" />
                                <input className="col-12 col-lg-5" type="text" placeholder="Имя" name="name" id="name" />
                                <input className="col-12 offset-lg-1 col-lg-6" type="email" placeholder="Электронная почта" name="email" id="email" />
                                <input className="col-12" type="text" placeholder="Ваш вопрос (желательно)" name="question" id="question" />
                                <button type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="writeus" className="light-bg">
                    <div className="row justify-center align-center vh-50">
                        <p className="secondary lead col-12 text-center">Напишите нам</p>
                        <h1 className="col-12 text-center">info@katadze.com</h1>
                    </div>
                </section>
                <section id="adress" className="container">
                    <div className="justify-center">
                        <div className="adress-img"><img src={cityImage} alt="cityImage" /></div>
                    </div>
                    <div className="adress justify-center">
                        <h1 className="col-12">Город</h1>
                        <p className="secondary">
                            Улица, Страна <br />
                            почтовый индекс <br />
                            <span className="tel-number">+7 (000) 000-00-00</span>
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}
