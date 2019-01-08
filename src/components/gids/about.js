import React from 'react'
import { Link } from 'react-router-dom'

import achieveIcon from '../../resourses/LogoBlack.png'

import how_to_become_gid from '../../resourses/About/how_to_become_gid.jpg'

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
            <div className="container">
                <div className="col-12">
                    <p className="small">
                    KatadZe — это клуб активного образа жизни для молодежи Урала и России. Это удобная площадка для совершенствования, интеллектуального роста, путешествий и ярких впечатлений! А также официальный туроператор Единого федерального реестра.
<br/><br/>
Лови возможности:
<br/>
* Масштабные фестивали и лучшие горнолыжные курорты — <Link to='/events' className="small link">KatadZe.EVENTS</Link>
<br/>
* Активный отдых и lifestyle в любой сезон — <Link to='/partners' className="small link">
    KatadZe.FRIENDS
</Link>
<br/>
* Путешествия по миру с личным гидом — <Link to='/guide' className="small link">
    KatadZe.GUIDE
</Link>
<br/>
А также сотни единомышленников по России и не только!
                    </p>
                </div>
            </div>
            <section className="container">
                <div id="aboutus" className="row">
                    <div className="col-lg-6 align-center">
                        <h1 className="upper">
                            KATADZE
                    <span> guide</span>
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
                    <img src={how_to_become_gid} alt="how it work"/>
                    <button style={{ backgroundColor: 'white', marginBottom: 0 }} className="lead v-offset-small offset-lg-4 col-lg-4"><Link to='/guide' style={{ color: '#41BFEF' }}>Найти гида</Link></button>
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
            <section className="container">
                <div className="col-12">
                    <p className="small">
                    Объединяем путешественников по всему миру!
<br/><br/>
Надоели банальные туры по любимым городам и странам? Толпы людей и завышенные цены? Персональный экскурсовод от оператора рассказывает то же самое, что и группам?
<br/><br/>
Лучшее решение — местный гид. Он даст увидеть любой город глазами его жителей. Расскажет легенды и покажет места, каких нет в туристических буклетах. Познакомит с настоящей кухней и истинной культурой страны, став интересным собеседником или даже другом.
<br/><br/>
KatadZe.GUIDE — это уникальная безвозмездная платформа для путешествий, познания мира и новых знакомств. Теперь КАЖДЫЙ может найти местного гида в любой точке планеты или стать гидом сам по желаемой цене. Достаточно <Link to='/profile' className="small link">
    зарегистрироваться
</Link> на нашей платформе!
                    </p>
                </div>
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
            </section> */}
            <section id="team" className="container">
            <h1 className="upper text-center">KatadZe.<span>TEAM</span></h1>
                <div className="row">
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src='https://pp.userapi.com/c604831/v604831898/e566/WzwfENyAMPU.jpg' alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Аслан Кагиев</h1></div>
                        <div className="member-status"><p className="secondary small">Вдохновляю</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src='https://pp.userapi.com/c846416/v846416170/cb495/3qDkusXYp_c.jpg' alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Анастасия Преснякова</h1></div>
                        <div className="member-status"><p className="secondary small">Руковожу</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c630530/v630530182/2aaee/z-_dCMQkoOw.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Ойбек Партов</h1></div>
                        <div className="member-status"><p className="secondary small">Креативлю</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c626324/v626324411/58f3a/fZLJRKMyf5M.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Юлия Махрова</h1></div>
                        <div className="member-status"><p className="secondary small">Руковожу проектами</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c841033/v841033155/79853/WZfeNfVC89M.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Михаил Кочнев</h1></div>
                        <div className="member-status"><p className="secondary small">Нахожу друзей</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c844320/v844320802/40493/ofkfp7zgMUw.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Владислав Сафронов</h1></div>
                        <div className="member-status"><p className="secondary small">Реализую партнерство</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c848732/v848732033/c9aa1/7s4J0BnYmLs.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Екатерина Витюк</h1></div>
                        <div className="member-status"><p className="secondary small">Объединяю путешественников</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c852124/v852124595/2d48d/25Qrgn8X9to.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Екатерина Агафонова</h1></div>
                        <div className="member-status"><p className="secondary small">Продвигаю возможности</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c850336/v850336215/a64be/VyJqUwg2P3Q.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Наталия Севостьянова</h1></div>
                        <div className="member-status"><p className="secondary small">Создаю стиль</p></div>
                    </div>
                    <div className="member-card col-12 col-lg-6">
                        <div className="member-photo justify-center">
                            <div className="col-lg-8">
                                <img src="https://pp.userapi.com/c631527/v631527804/3bfde/TBb3wrg6HJg.jpg" alt="member" />
                            </div>
                        </div>
                        <div className="member-name"><h1>Никита Зотов</h1></div>
                        <div className="member-status"><p className="secondary small">Развиваю digital</p></div>
                    </div>
                </div>
            </section>
            <section id="social" className="container">
                <div className="contact-link">
                    <Link to='contacts'>
                        <h1 className="secondary text-center">
                            <span className="lead">Хочу</span> пообщаться</h1>
                    </Link>
                </div>
            </section>
        </div>
    )
}
