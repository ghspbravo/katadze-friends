import React from 'react'
import achieveIcon from '../../resourses/LogoBlack.png'
import tourCard from './tourCard';
import review from './review';

export default (gid) => {
    return (
        gid && gid.profile
            ? <div className="row justify-center">
                <div className="col-10 col-lg-3">
                    <div className="row column-direction">
                        <section className="d-lg-none jumbotron">
                            <div className="content">
                                <p>{`Привет, меня зовут ${gid.last_name} ${gid.first_name}!`}</p>
                                <p className="small secondary">{gid.profile.keyphrase}</p>
                                <hr className="v-offset-small" />
                                <p className="small v-offset-small">{gid.profile.bio}</p>
                                <hr className="v-offset-small" />
                                <p className="v-offset-small text-center"><span>Из {gid.residence} - {gid.date_birth.split('-')[0]} года рождения</span></p>
                            </div>
                        </section>
                        <img src={gid.img_photo} alt="avatar" />
                        <section className="jumbotron v-offset-small">
                            <div className="head"><p className="small">Подтвержденная информация</p></div>
                            <div className="content no-padding">
                                <ul>
                                    <li className="row align-center v-offset-small">
                                        <div className="col-9 ">
                                            <p className="small">Адрес электронной почты</p>
                                        </div>
                                        <div className="icon"><img src={achieveIcon} alt="z" /></div>
                                    </li>
                                    <li className="row align-center v-offset-small">
                                        <div className="col-9 ">
                                            <p className="small">Номер телефона</p>
                                        </div>
                                        <div className="icon"><img src={achieveIcon} alt="z" /></div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="jumbotron">
                            <div className="head"><p className="small">Связанные аккаунты</p></div>
                            <div className="content no-padding">
                                <ul>
                                    <li className="row align-center v-offset-small">
                                        <div className="col-9 ">
                                            <p className="small">Facebook</p>
                                        </div>
                                        <div className="icon"><img src={achieveIcon} alt="z" /></div>
                                    </li>
                                    <li className="row align-center v-offset-small">
                                        <div className="col-9 ">
                                            <a href="https://vk.com/" target="blank"><p className="small">Вконтакте</p></a>
                                        </div>
                                        <div className="icon"><img src={achieveIcon} alt="z" /></div>
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
                                        <p className="small">{gid.profile.languages.map(language => `${language.name} `)}</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={`${window.innerWidth < 992 ? '' : 'l-offset-mid'} col-10 col-lg-7 col-xl-6`}>
                    <section className="d-none d-lg-block jumbotron">
                        <div className="content">
                            <p>{`Привет, меня зовут ${gid.first_name} ${gid.last_name}!`}</p>
                            <p className="small secondary">{gid.profile.keyphrase}</p>
                            <hr className="v-offset-small" />
                            <p className="small">{gid.profile.bio}</p>
                            <hr className="v-offset-small" />
                            <p className="v-offset-small text-center"><span>Из {gid.residence} - {gid.date_birth.split('-')[0]} года рождения</span></p>
                        </div>
                    </section>
                    <section className="jumbotron no-padding">
                        <div className="head no-margin"><p>Мои туры</p></div>
                        <div className="row">
                            {gid.tours.map((tour, i) => tourCard(tour, i))}
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
            : <h1>Loading...</h1>
    )
}
