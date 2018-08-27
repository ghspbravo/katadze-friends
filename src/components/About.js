import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import teamMember from '../resourses/About/team-member.png'
import achieveIcon from '../resourses/LogoBlack.png'

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about-main" className="row vh-50">
                    <div className="offset-lg-2 offset-1 col-lg-4">
                        <h1 className="lead">О проекте:</h1>
                        <h1><span>Намного больше
                            <br />Чем ты думаешь</span></h1>
                        <div className="read-more">
                            <a href="#aboutus">Читать дальше</a>
                        </div>
                    </div>
                </section>
                <section id="aboutus" className="container">
                    <div className="row">
                        <div className="col-lg-6 align-center">
                            <h1 className="upper">
                                Katadze
                    <span> friends</span>
                            </h1>
                        </div>
                        <div className="col-lg-6">
                            <p>Sed ut perspiciatis, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas
                                molestias excepturi sint, quae ab illo inventore eritatis et quasi architecto beatae vitae dicta sunt,
                                explicabo?Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut
                                odit aut fugit.</p>
                        </div>
                    </div>
                </section>
                <section id="howitworks" className="container">
                    <div className="row">
                        <div className="col-lg-7 order-fix">
                            <div className="acsent-box">
                                <ul className="todo-list">
                                    <li>Создай профиль гида</li>
                                    <li>Покажи места, которые знаешь</li>
                                    <li>Заработай денег</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 align-center">
                            <div className="header">
                                <h1 className="upper">Как это
                        <span> работает </span>?</h1>
                                <p className="secondary">Иструкция о том,
                                как этот проект работает в виде схемы справа</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="achievments" className="container">
                    <h1 className="upper">
                        <span>Наши</span> достижения</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row align-center">
                                <div className="achieve-icon col-3"><img src={achieveIcon} alt="achieveIcon" /></div>
                                <div className="achieve-description col-9">Мы добились много чего 1000</div>
                            </div>
                            <div className="row align-center">
                                <div className="achieve-icon col-3"><img src={achieveIcon} alt="achieveIcon" /></div>
                                <div className="achieve-description col-9">Мы добились много чего 1000</div>
                            </div>
                            <div className="row align-center">
                                <div className="achieve-icon col-3"><img src={achieveIcon} alt="achieveIcon" /></div>
                                <div className="achieve-description col-9">Мы добились много чего 1000</div>
                            </div>
                            <div className="row align-center">
                                <div className="achieve-icon col-3"><img src={achieveIcon} alt="achieveIcon" /></div>
                                <div className="achieve-description col-9">Мы добились много чего 1000</div>
                            </div>
                        </div>
                        <div className="col-lg-6 achieve-details justify-center align-center">
                            <h1>666</h1>
                            <p>Мы сделали вот это</p>
                        </div>
                    </div>
                </section>
                <section id="team" className="container">
                    <div className="row">
                        <div className="member-card col-12 col-lg-6">
                            <div className="member-photo justify-center">
                                <div className="col-lg-8">
                                    <img src={teamMember} alt="member" />
                                </div>
                            </div>
                            <div className="member-name"><h1>Имя Фамилия</h1></div>
                            <div className="member-status"><p className="secondary small">должность, название</p></div>
                        </div>
                        <div className="member-card col-12 col-lg-6">
                            <div className="member-photo justify-center">
                                <div className="col-lg-8">
                                    <img src={teamMember} alt="member" />
                                </div>
                            </div>
                            <div className="member-name"><h1>Имя Фамилия</h1></div>
                            <div className="member-status"><p className="secondary small">должность, название</p></div>
                        </div>
                        <div className="member-card col-12 col-lg-6">
                            <div className="member-photo justify-center">
                                <div className="col-lg-8">
                                    <img src={teamMember} alt="member" />
                                </div>
                            </div>
                            <div className="member-name"><h1>Имя Фамилия</h1></div>
                            <div className="member-status"><p className="secondary small">должность, название</p></div>
                        </div>
                        <div className="member-card col-12 col-lg-6">
                            <div className="member-photo justify-center">
                                <div className="col-lg-8">
                                    <img src={teamMember} alt="member" />
                                </div>
                            </div>
                            <div className="member-name"><h1>Имя Фамилия</h1></div>
                            <div className="member-status"><p className="secondary small">должность, название</p></div>
                        </div>
                    </div>
                </section>
                <section id="social" className="container">
                    <div>
                        <Link to='/contacts'>
                            <h1 className="secondary text-center">
                                <span className="lead">Хочу</span> пообщаться</h1>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}
