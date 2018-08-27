import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <section id="faq-main" className="row vh-50">
                    <div className="offset-1 offset-lg-2 col-lg-4">
                        <h1 className="lead">Ответы на все твои вопросы</h1>
                        <h1><span>И не только</span></h1>
                    </div>
                </section>
                <section className="light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 question-wrapper">
                                <div className="question col-12"><h1>
                                    Вопрос номер какой-то?
                                </h1></div>
                                <div className="answer col-12">
                                    <p>Ответ на этот вопрос состоящий из нескольких предложений, а может быть и из одного предложения, все зависит от контент-менеджера.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <Link to='/contacts'>
                        <h1 className="secondary text-center">Не нашел <span className="lead">ответ</span></h1>
                    </Link>
                </section>
            </div>
        )
    }
}
