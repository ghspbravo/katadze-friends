import React from 'react'
import { Link } from 'react-router-dom'

import teamMember from '../../resourses/About/team-member.png'
import achieveIcon from '../../resourses/LogoBlack.png'

import step1 from '../../resourses/About/step1.svg'
import step2 from '../../resourses/About/step2.svg'
import step3 from '../../resourses/About/step3.svg'
import step4 from '../../resourses/About/step4.svg'
import step5 from '../../resourses/About/step5.svg'

export default () => {
    return (
        <div>
            <section id="about-main" className="row vh-50">
                <div className="offset-lg-2 offset-1 col-lg-4">
                    <h1 className="lead">Katadze-guide:</h1>
                    <h1><span>СОЗДАЙ СВОЮ ИСТОРИЮ</span></h1>
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
                        <p>Бренд Katadze пропагандирует и продвигает атрибуты: молодость, развитие, движение. Быть с Катадзе, значит быть в движении, вдохновляться и наполнять свой каждый день новыми эмоциями.
<br /><br />
                            Katadze-guide полностью соответствует всем ценностям бренда и объединяет энергичных и амбициозных людей со всего мира в стремлении наполнять жизнь эмоциями и дарить эмоции другим людям..</p>
                    </div>
                </div>
            </section>
            <section id="howitworks" className="container">
                <h1 className="upper text-center">Как это<span> работает </span>?</h1>
                <div className="col-12 acsent-box v-offset-small">
                    <ul>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step1} alt="step1"/>
                            <p className="col-md-10 col-sm-8" style={{color: 'white'}}>Выбери страну/ город: Введи название города в строке поиска</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step2} alt="step2"/>
                            <p className="col-md-10 col-sm-8" style={{color: 'white'}}>Найди гида или тур: Выбери гида или тур, который тебе понравился и отправь запрос!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step3} alt="step3"/>
                            <p className="col-md-10 col-sm-8" style={{color: 'white'}}>Общайся с гидом: Обсуди с гидом детали предстоящей встречи!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step4} alt="step4"/>
                            <p className="col-md-10 col-sm-8" style={{color: 'white'}}>Наслаждайся путешествием: Путешествуй вместе с гидом, узнавай новое!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step5} alt="step5"/>
                            <p className="col-md-10 col-sm-8" style={{color: 'white'}}>Поделись своим опытом: Поставь оценку своему гиду, напиши отзыв, расскажи о нас в соц.сетях</p>
                        </li>
                    </ul>
                    <button style={{backgroundColor: 'white'}} className="lead v-offset-small offset-lg-4 col-lg-4"><Link to='/gids' style={{color: '#41BFEF'}}>Стать гидом</Link></button>
                </div>

                {/* <div className="row">
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
                                как этот проект работает в виде схемы</p>
                        </div>
                    </div>
                </div> */}
            </section>
            {/* <section id="achievments" className="container">
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
            </section> */}
            <section id="social" className="container">
                <div>
                    <Link to='contacts'>
                        <h1 className="secondary text-center">
                            <span className="lead">Хочу</span> пообщаться</h1>
                    </Link>
                </div>
            </section>
        </div>
    )
}
