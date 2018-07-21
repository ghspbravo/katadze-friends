import React, { Component } from 'react'

import '../styles/FAQ.css'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <section id="faq-main" className="row container">
                    <div className="col-lg-6">
                        <h1>Ответы на все твои вопросы
                    <br /> <span>И не только</span>
                        </h1>
                    </div>
                </section>
                <section className="section-light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12">Вопрос номер какой-то?</div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row justify-center container">
                    <div>
                        <h1 className="secondary">Не нашел <span className="lead">ответ</span></h1>
                    </div>
                </section>
            </div>
        )
    }
}
