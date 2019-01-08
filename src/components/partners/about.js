import React from 'react'
import { Link } from 'react-router-dom'

import achieveIcon from '../../resourses/LogoBlack.png'

export default () => {
    return (
        <div>
            <section id="about-main" className="row vh-50">
                <div className="offset-lg-2 offset-1 col-lg-4">
                    <h1 className="lead">KATADZE friends:</h1>
                    <h1><span>Дружба - это продуктивно</span></h1>
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
                    Cоздаем условия для доступного активного отдыха и занятий спортом. Наши многочисленные крутые друзья предоставляют скидки и выгодные предложения для катадзян: зимой — прокат горнолыжного оборудования, летом — велосипедов, а круглый год — полеты в аэротрубе, батутный парк и другие активности для энергичного lifestyle.
<br/><br/>
<Link to='/profile' className="small link">Вступай</Link> в клуб KatadZe и с удовольствием используй наши возможности.
<br/><br/>
Становись другом KatadZe и привлеки к себе студенческую аудиторию!
                    </p>
                </div>
            </section>
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
