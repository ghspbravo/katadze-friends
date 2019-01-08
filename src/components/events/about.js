import React from 'react'
import { Link } from 'react-router-dom'

import achieveIcon from '../../resourses/LogoBlack.png'

export default () => {
    return (
        <div>
            <section id="about-main" className="row vh-50">
                <div className="offset-lg-2 offset-1 col-lg-4">
                    <h1 className="lead">KATADZE events:</h1>
                    <h1><span>Весь мир – площадка для событий</span></h1>
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
                <div className="col-12">
                    <p className="small">
                    Создаем свои события от региональных до Всероссийских и любим крутые инициативы.
<br/><br/>
— Массовый <Link to='/events/id=7' className="small link">
	KatadZe.START
</Link> на лучших ГЛК Урала!
<br/>
— Международный горнолыжный фестиваль <Link to='/events/id=6' className="small link">
	KatadZe.РКВ
</Link> (пос. Домбай)
<br/>
— Молодежный спортивно-образовательный лагерь <Link to='/events/id=3' className="small link">
	KatadZe.CAMP
</Link> (с. Архыз)
<br/>
— Выезд на фестиваль музыки и технологий <Link to='/events/id=2' className="small link">
	«Alfa Future People»
</Link>
                    </p>
                </div>
            </section>
            <section className="container">
                <div id="aboutus" className="row">
                    <div className="col-lg-6 align-center">
                        <h1 className="upper">
                            KATADZE
                    <span> events</span>
                        </h1>
                    </div>
                    <div className="col-lg-6" >
                        <p style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden' }}>
						<span>KatadZe.START</span>
<br/><br/>
Как сезон откроешь, так его и проведешь. KatadZe предпочитает делать это грандиозно! Традиционно мы проводим массовый выезд любителей зимнего спорта на горнолыжные склоны Уральских гор. В программе многочасовое катание, фотозоны, конкурсы, подарки и заряженная молодежная тусовка!
<br/>
Подробнее <a target="blank" href="vk.com/katadze_start" className="link">здесь</a>
<br/><br/>
<span>KatadZe.РКВ</span> — Международный горнолыжный фестиваль на курорте Домбай (Карачаево-Черкесская республика)
<br/><br/>
Это самый массовый и успешный проект нашей команды. Ежегодно он собирает несколько сотен участников со всей страны, влюбляя их в горы и горнолыжный отдых.
<br/>
В 2019 году проект отметит свой первый юбилей, 5 лет. Неделя катания на лыжах и сноубордах, знакомство с местной культурой, образовательные и развлекательные активности в кругу единомышленников – всё это ждёт участников Katadze РКВ в начале февраля! Надо ли говорить, что это будет ещё более грандиозно, чем когда-либо?
<br/>
Варианты путевок: <Link to='/events/id=6' className="link">
	посмотреть
</Link>
<br/>
Подробнее <a target="blank" href="vk.com/katadze_start" className="link">здесь</a>
<br/><br/>
<span>KatadZe.CAMP</span> — Горы. Спорт. Английский. Ты.
<br/><br/>
Летний лагерь для молодых, энергичных и жаждущих драйва людей. Место встречи — горный курорт Архыз. Неповторимые пейзажи гор, туристические активности, спорт на свежем воздухе и бесконечное саморазвитие (курсы английского, мастер-классы, networking). Участники со всей страны и энергичная тусовка на 7 дней. Мотивирующая атмосфера работы над собой на высоте 1450 метров над уровнем моря.
<br/>
Готов отдохнуть и стать лучше с KatadZe? Ждем встречи в июле!
<br/>
Подробнее <a target="blank" href="vk.com/katadze_camp" className="link">здесь</a>
<br/><br/>
<span>KatadZe.AFP</span>
<br/><br/>
В разгар лета мы активно поддерживаем Фестиваль электронной музыки и технологий «Alfa Future People». AFP объединяет выступления лучших мировых представителей электронной музыки, самые передовые технологии и прогрессивных зрителей — молодежь со всего мира. А клуб KatadZe является официальным партнером этого события и третий год подряд привезет на фестиваль свою делегацию.
<br/>
Подробнее <a target="blank" href="vk.com/katadze_afp" className="link">здесь</a>
						</p>
                        <div className="v-offset-small"><p className="small"><span>Листай вниз для просмотра подробной информации</span></p></div>
                    </div>
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
