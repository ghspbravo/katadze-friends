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
                    <h1 className="lead">KATADZE guide:</h1>
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
                            KATADZE
                    <span> guids</span>
                        </h1>
                    </div>
                    <div className="col-lg-6" >
                        <p style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden' }}>Отправляясь в путешествие, ты уже заранее представляешь, что тебя там ждет. В Париже увидишь Эйфелеву башню, в Венеции прокатишься на гондоле по каналам, в Москве посетишь Красную площадь. Будешь передвигаться по маршрутам, составленным предыдущими путешественниками. И, бесспорно, ты получишь удовольствие и найдешь то, что тебе понравится и запомниться. А представь, что от твоего взора туриста скрыта вторая часть города, доступная только местным жителям, которые знают про уютные улочки и скверы, про кафе с самой вкусной едой, про маршруты, по которым путешественники никогда не пойдут в одиночку. В этом раскрывается истинное лицо города, с его особенностями и фишками, с его тайнами и удивительными местами.
<br />
                            Не важно, что ты любишь больше – музеи или достопримечательности, природу или уличную культуру, вечеринки или экстрим, теперь у тебя есть возможность получить от своего путешествия максимум, стоит всего лишь выбрать нужного гида и «настроить» своё путешествие на свой лад. В этом тебе поможет Katadze-guide.
<br /><br />
                            Что такое Katadze-guide?
<br />
                            Katadze-guide объединяет местных жителей, которые влюблены в свой город и которым не терпится поделиться своими знаниями и впечатлениями с путешественниками. Каждый может создать или выбрать свой уникальный маршрут и активности для интересного времяпрепровождения, заранее связавшись с гидом и обсудив все детали.
<br />
                            Встреча и знакомство с катадзе-гидом – это не только импровизированная, интересная и удивляющая прогулка по городу, это ещё и новый друг в другом городе или стране. Многие из нас стремятся расширять свои границы, и Katadze-guide справляется с этой задачей на 100 процентов!
<br />
                            Планируя путешествие, многие из нас всегда испытывают волнение, возникают вопросы «а как я буду общаться с местными жителями?», «как я найду интересные места?», «а вдруг я потеряюсь?» или «а вдруг там будет скучно и мне не понравится?». Имея возможность заранее связаться и договориться провести время с местным жителем, эти вопросы становятся не актуальны. Ты полностью свободен в своем выборе и уже не боишься пойти не туда или сказать что-то не так.
<br />
                            А какими далекими и неизведанными кажутся нам города и страны, в которых мы никогда не были? Прогуливаясь по городу вместе с гидом ты можешь, не задумываясь свернуть на неизвестную улочку, зайти в маленькое местное кафе и попробовать самое вкусное блюдо местной кухни. И вот, ты уже знаток культуры, архитектуры и истории города, который посетил.
<br />
                            Katadze-guide объединяет людей, которые открыты к общению, которые хотят показать то, что они сами любят больше всего, людей, которые сделают ваше путешествие незабываемым. Благодаря бесплатному сервису вы имеете доступ к местными жителям со всего мира! Единственное, что вас отделяет это несколько кликов на вашем гаджете.
<br />
                            Регистрируйся и наслаждайся!</p>
                        <div className="v-offset-small"><p className="small"><span>Листай вниз для просмотра подробной информации</span></p></div>
                    </div>
                </div>
            </section>
            <section id="howitworks" className="container">
                <h1 className="upper text-center">Как это<span> работает </span>?</h1>
                <div className="col-12 acsent-box v-offset-small">
                    <ul>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step1} alt="step1" />
                            <p className="col-md-10 col-sm-8" style={{ color: 'white' }}>Выбери страну/ город: Введи название города в строке поиска</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step2} alt="step2" />
                            <p className="col-md-10 col-sm-8" style={{ color: 'white' }}>Найди гида или тур: Выбери гида или тур, который тебе понравился и отправь запрос!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step3} alt="step3" />
                            <p className="col-md-10 col-sm-8" style={{ color: 'white' }}>Общайся с гидом: Обсуди с гидом детали предстоящей встречи!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step4} alt="step4" />
                            <p className="col-md-10 col-sm-8" style={{ color: 'white' }}>Наслаждайся путешествием: Путешествуй вместе с гидом, узнавай новое!</p>
                        </li>
                        <li className="row align-center v-offset-small">
                            <img className="col-md-2 col-sm-4" src={step5} alt="step5" />
                            <p className="col-md-10 col-sm-8" style={{ color: 'white' }}>Поделись своим опытом: Поставь оценку своему гиду, напиши отзыв, расскажи о нас в соц.сетях</p>
                        </li>
                    </ul>
                    <button style={{ backgroundColor: 'white' }} className="lead v-offset-small offset-lg-4 col-lg-4"><Link to='/guids' style={{ color: '#41BFEF' }}>Найти гида</Link></button>
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
