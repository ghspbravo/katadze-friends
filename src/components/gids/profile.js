import React from 'react'
import achieveIcon from '../../resourses/LogoBlack.png'
import tourCard from './tourCard';
import review from './review';

export default () => {
    return (
        <div className="row">
            <div className="offset-lg-2 col-lg-2">
                <div className="row column-direction">
                    <img src="http://via.placeholder.com/300x300" alt="avatar" />
                    <section className="jumbotron v-offset-small">
                        <div className="head"><p className="small">Подтвержденная информация</p></div>
                        <div className="content no-padding">
                            <ul>
                                <li className="row align-center v-offset-small">
                                    <div className="col-10">
                                        <p className="small">Удостоверение личности гос. образца</p>
                                    </div>
                                    <div className="col-2"><img src={achieveIcon} alt="z" /></div>
                                </li>
                                <li className="row align-center v-offset-small">
                                    <div className="col-10">
                                        <p className="small">Адрес электронной почты</p>
                                    </div>
                                    <div className="col-2"><img src={achieveIcon} alt="z" /></div>
                                </li>
                                <li className="row align-center v-offset-small">
                                    <div className="col-10">
                                        <p className="small">Номер телефона</p>
                                    </div>
                                    <div className="col-2"><img src={achieveIcon} alt="z" /></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="jumbotron">
                        <div className="head"><p className="small">Связанные аккаунты</p></div>
                        <div className="content no-padding">
                            <ul>
                                <li className="row align-center v-offset-small">
                                    <div className="col-10">
                                        <p className="small">Facebook</p>
                                    </div>
                                    <div className="col-2"><img src={achieveIcon} alt="z" /></div>
                                </li>
                                <li className="row align-center v-offset-small">
                                    <div className="col-10">
                                        <p className="small">Вконтакте</p>
                                    </div>
                                    <div className="col-2"><img src={achieveIcon} alt="z" /></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="jumbotron">
                        <div className="head"><p className="small">Обо мне</p></div>
                        <div className="content no-padding">
                            <ul>
                                <li className="v-offset-small">
                                    <p className="small bold">Школа</p>
                                    <p className="small">Лицей №2</p>
                                </li>
                                <li className="v-offset-small">
                                    <p className="small bold">Работа</p>
                                    <p className="small">Профессиональный гид</p>
                                </li>
                                <li className="v-offset-small">
                                    <p className="small bold">Языки</p>
                                    <p className="small">Русский, English</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="l-offset-mid col-lg-6">
                <section className="jumbotron">
                    <div className="content">
                        <p>Здравствуйте, меня зовут Василий!</p>
                        <p className="small secondary">Привет! Я лучшие гид Екатеринбурга, выбирайте меня</p>
                        <hr className="v-offset-small" />
                        <p className="v-offset-small text-center"><span>Из Екатеринбурга, Россия - июнь 2018</span></p>
                    </div>
                </section>
                <section className="jumbotron no-padding">
                    <div className="head no-margin"><p>Мои туры</p></div>
                    <div className="row">
                        {[...Array(3)].map((e, i) => tourCard(i))}
                    </div>
                </section>
                <section className="jumbotron">
                    <div className="head"><p>Отзывы путешественников</p></div>
                    <div className="content reviews">
                        {[...Array(6)].map((e, i) => review(i))}
                    </div>
                </section>
            </div>
        </div>
    )
}
