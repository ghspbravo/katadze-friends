import React, { Component } from 'react'

import cityImage from '../resourses/Contacts/pass.png'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <section id="contacts-main" className="container">
                    <h1>У тебя остался вопрос?
                <br /><span>Свяжись с нами</span></h1>
                    <div className="col-lg-6 contact-form">
                        <form className="justify-space-between" action="">
                            <input type="text" placeholder="Меня интересует" name="theme" id="theme" />
                            <input className="d-input" type="text" placeholder="Имя" name="name" id="name" />
                            <input className="d-input" type="email" placeholder="Электронная почта" name="email" id="email" />
                            <input type="text" placeholder="Ваш вопрос (желательно)" name="question" id="question" />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </section>
                <section id="writeus" className="section-light-bg">
                    <div className="row justify-center align-center vh-50">
                        <p className="secondary write-label">Напишите нам
            <br /><span className="mail">info@katadze.com</span></p>
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
