import React from 'react'
import achieveIcon from '../../resourses/LogoBlack.png'
import tourCard from './tourCard';
import review from './review';

import createClaim from './createClaim';

let showPopup = () => {
    document.querySelector('.popupMessage').style.display = 'block'
    document.querySelector("body").style.overflow = "hidden";
}

let hidePopup = () => {
    document.querySelector('.popupMessage').style.display = 'none'
    document.querySelector("body").style.overflow = "auto";
}

export default (gid, handleInput, messageToGid, handleSubmit, claimStatus) => {
    const hobbiesList = [
        'Искусство',
        'Еда',
        'Экстрим',
        'Мода',
        'Путешествия',
        'Музыка',
        'Фильмы',
        'Спорт',
        'Литература',
        'Автомобили',
        'Фотография',
        'Hand-made',
        'История',
        'Культура',
        'Шоппинг',
        'Языки'
    ]

    const activitiesList = [
        'Встреча и сопровождение',
        'Обзорная экскурсия',
        'Знакомство с историей и культурой',
        'Посещение музеев',
        'Посещение кафе и ресторанов',
        'Осмотр достопримечательностей',
        'Шопинг',
        'Спорт и экстрим'
    ]
    return (
        gid && gid.profile
            ? <div className="row justify-center">
                <div className="col-10 col-lg-3">
                    <div className="row column-direction">
                        <section className="d-lg-none jumbotron">
                            <div className="content">
                                <div className="price-popup"><p style={{ color: 'white' }}>{gid.profile.price == 0 ? 'БЕСПЛАТНО' : `${gid.profile.price} руб`}</p></div>
                                <p>{`Привет, меня зовут ${gid.last_name} ${gid.first_name}!`}</p>
                                <p className="small secondary">{gid.profile.keyphrase}</p>
                                <hr className="v-offset-small" />
                                <p className="small v-offset-small">{gid.profile.bio}</p>
                                <hr className="v-offset-small" />
                                <p className="v-offset-small text-center"><span>Из г. {gid.residence} - {gid.date_birth.split('-')[0]} года рождения</span></p>
                                <button onClick={() => showPopup()} className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
                            </div>
                        </section>
                        <img style={{ height: '450px', objectFit: 'cover' }} src={gid.img_photo} alt="avatar" />
                        <section className="jumbotron v-offset-small">
                            <div className="head"><p className="small">Обо мне</p></div>
                            <div className="content no-padding">
                                <ul>
                                    {gid.profile.occupation
                                        ? <li className="v-offset-small">
                                            <p className="small bold">Род деятельности</p>
                                            <p className="small">{gid.profile.occupation}</p>
                                        </li>
                                        : null}
                                    <li className="v-offset-small">
                                        <p className="small bold">Увлечения</p>
                                        <p className="small">{gid.profile.hobbies.map((hobbies, i) => `${hobbiesList[hobbies.code]}${i + 1 === gid.profile.hobbies.length ? '.' : ', '}`)}</p>
                                    </li>
                                    <li className="v-offset-small">
                                        <p className="small bold">Активности</p>
                                        <p className="small">{gid.profile.activities.map((activity, i) => `${activitiesList[activity.code]}${i + 1 === gid.profile.activities.length ? '.' : ', '}`)}</p>
                                    </li>
                                    <li className="v-offset-small">
                                        <p className="small bold">Языки</p>
                                        <p className="small">{gid.profile.languages.map(language => `${language.name} `)}</p>
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
                    </div>
                </div>
                <div className={`${window.innerWidth < 992 ? '' : 'l-offset-mid'} col-10 col-lg-7 col-xl-6`}>
                    <section className="d-none d-lg-block jumbotron">
                        <div className="content">
                            <div className="price-popup"><p style={{ color: 'white' }}>{gid.profile.price == 0 ? 'БЕСПЛАТНО' : `${gid.profile.price.split('.')[0]} руб`}</p></div>
                            <p>{`Привет, меня зовут ${gid.first_name} ${gid.last_name}!`}</p>
                            <p className="small secondary">{gid.profile.keyphrase}</p>
                            <hr className="v-offset-small" />
                            <p className="small" style={{ whiteSpace: 'pre-line' }}>{gid.profile.bio}</p>
                            <hr className="v-offset-small" />
                            <p className="v-offset-small text-center"><span>Из г. {gid.residence} - {gid.date_birth.split('-')[0]} года рождения</span></p>
                            <button onClick={() => showPopup()} className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
                        </div>
                    </section>
                    {gid.tours.length > 0
                        ? <section className="jumbotron no-padding">
                            <div className="head no-margin"><p>Мои туры</p></div>
                            <div className="row">
                                {gid.tours.map((tour, i) => tourCard(tour, i))}
                            </div>
                        </section>
                        : null}
                    <section className="jumbotron">
                        <div className="head"><p>Отзывы путешественников</p></div>
                        <div className="content reviews">
                            {/*[...Array(6)].map((e, i) => review(i))*/}
                        </div>
                    </section>
                </div>
                <div className="popupMessage" style={{ display: 'none' }}>
                    <div onClick={(e) => {
                        if (e.target === document.querySelector(".popup-wrapper")) hidePopup();
                    }} className='popup-wrapper'>
                        <div className="popup container">
                            <div onClick={hidePopup} className="close-popup">X</div>
                            {createClaim(handleInput, handleSubmit, messageToGid, claimStatus)}
                        </div>
                    </div>
                </div>
            </div>
            : <h1>Loading...</h1>
    )
}
