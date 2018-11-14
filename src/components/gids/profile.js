import React, { Component } from 'react'
import achieveIcon from '../../resourses/LogoBlack.png'
import tourCard from './tourCard';
import review from './review';

import createClaim from './createClaim';

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

let showPopup = () => {
    document.querySelector('.popupMessage').style.display = 'block'
    document.querySelector("body").style.overflow = "hidden";
}

let hidePopup = () => {
    document.querySelector('.popupMessage').style.display = 'none'
    document.querySelector("body").style.overflow = "auto";
}

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photosLoaded: false
        }
    }

    componentWillMount() {
        document.body.style.backgroundColor = "white"
    }

    componentDidUpdate() {
        if (this.props.photos.length && !this.state.photosLoaded) {
            setTimeout(() => window.$('.photos-container').slick({
                dots: true,
                arrows: true,
            }), 300)
            this.setState({
                photosLoaded: true
            })
        }
    }
    componentWillUnmount() {
        window.$('.photos-container').slick('unslick')
    }

    render() {
        if (this.props.gidInfo && this.props.gidInfo.profile)
            return (<div className="row justify-center">
                <div className="col-10 col-lg-3">
                    <div className="row column-direction">
                        <section className="d-lg-none jumbotron">
                            <div className="content">
                                <div className="price-popup"><p style={{ color: 'white' }}>{this.props.gidInfo.profile.price == 0 ? 'БЕСПЛАТНО' : `${this.props.gidInfo.profile.price} руб`}</p></div>
                                <p>{`Привет, меня зовут ${this.props.gidInfo.last_name} ${this.props.gidInfo.first_name}!`}</p>
                                <p className="small secondary">{this.props.gidInfo.profile.keyphrase}</p>
                                <hr className="v-offset-small" />
                                <p className="small v-offset-small">{this.props.gidInfo.profile.bio}</p>
                                <hr className="v-offset-small" />
                                <p className="v-offset-small text-center"><span>Из г. {this.props.gidInfo.residence} - {this.props.gidInfo.date_birth.split('-')[0]} года рождения</span></p>
                                <button onClick={() => showPopup()} className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
                            </div>
                        </section>

                        <div className="photos-container">
                            {this.props.photos.length
                                ? this.props.photos.map(photo =>
                                    <img
                                        key={photo.id}
                                        src={photo.img}
                                        alt=""
                                        style={{ height: '450px', objectFit: 'cover' }}
                                    />
                                )
                                : <div style={{ backgroundColor: 'gray', height: '450px', width: '100%' }}></div>
                            }
                            {/* <img style={{ height: '450px', objectFit: 'cover' }} src={this.props.gidInfo.avatar} alt="avatar" /> */}
                        </div>

                        <section className="jumbotron v-offset-small">
                            <div className="head"><p className="small">Обо мне</p></div>
                            <div className="content no-padding">
                                <ul>
                                    {this.props.gidInfo.profile.occupation
                                        ? <li className="v-offset-small">
                                            <p className="small bold">Род деятельности</p>
                                            <p className="small">{this.props.gidInfo.profile.occupation}</p>
                                        </li>
                                        : null}
                                    <li className="v-offset-small">
                                        <p className="small bold">Увлечения</p>
                                        <p className="small">{this.props.gidInfo.profile.hobbies.map((hobbies, i) => `${hobbiesList[hobbies.code]}${i + 1 === this.props.gidInfo.profile.hobbies.length ? '.' : ', '}`)}</p>
                                    </li>
                                    <li className="v-offset-small">
                                        <p className="small bold">Активности</p>
                                        <p className="small">{this.props.gidInfo.profile.activities.map((activity, i) => `${activitiesList[activity.code]}${i + 1 === this.props.gidInfo.profile.activities.length ? '.' : ', '}`)}</p>
                                    </li>
                                    <li className="v-offset-small">
                                        <p className="small bold">Языки</p>
                                        <p className="small">{this.props.gidInfo.profile.languages.map(language => `${language.name} `)}</p>
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
                            <div className="price-popup"><p style={{ color: 'white' }}>{this.props.gidInfo.profile.price == 0 ? 'БЕСПЛАТНО' : `${this.props.gidInfo.profile.price.split('.')[0]} руб`}</p></div>
                            <p>{`Привет, меня зовут ${this.props.gidInfo.first_name} ${this.props.gidInfo.last_name}!`}</p>
                            <p className="small secondary">{this.props.gidInfo.profile.keyphrase}</p>
                            <hr className="v-offset-small" />
                            <p className="small" style={{ whiteSpace: 'pre-line' }}>{this.props.gidInfo.profile.bio}</p>
                            <hr className="v-offset-small" />
                            <p className="v-offset-small text-center"><span>Из г. {this.props.gidInfo.residence} - {this.props.gidInfo.date_birth.split('-')[0]} года рождения</span></p>
                            <button onClick={() => showPopup()} className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
                        </div>
                    </section>
                    {this.props.gidInfo.tours.length > 0
                        ? <section className="jumbotron no-padding">
                            <div className="head no-margin"><p>Мои туры</p></div>
                            <div className="row">
                                {this.props.gidInfo.tours.map((tour, i) => tourCard(tour, i))}
                            </div>
                        </section>
                        : null}
                    <section className="jumbotron">
                        <div className="head"><p>Отзывы путешественников</p></div>
                        <div className="content reviews">
                            {this.props.comments && this.props.comments.length
                                ? this.props.comments.map((comment, i) => review(comment, i))
                                : <p className="small">Никто еще не оценил данного гида</p>
                            }
                        </div>
                    </section>
                </div>
                <div className="popupMessage" style={{ display: 'none' }}>
                    <div onClick={(e) => {
                        if (e.target === document.querySelector(".popup-wrapper")) hidePopup();
                    }} className='popup-wrapper'>
                        <div className="popup container">
                            <div onClick={hidePopup} className="close-popup">X</div>
                            {createClaim(this.props.inputHandler, this.props.claimHandler, this.props.messageToGid, this.props.claimStatus)}
                        </div>
                    </div>
                </div>
            </div>)
        else return (<h1>Loading...</h1>)
        // (<div className="row justify-center">
        //     <div className="col-10 col-lg-3">
        //         <div className="row column-direction">
        //             <section className="d-lg-none jumbotron">
        //                 <div className="content">
        //                     <div className="price-popup"><p style={{ color: 'white' }}></p></div>
        //                     <p>{`Привет, меня зовут …!`}</p>
        //                     <p className="small secondary"></p>
        //                     <hr className="v-offset-small" />
        //                     <p className="small v-offset-small"></p>
        //                     <hr className="v-offset-small" />
        //                     <p className="v-offset-small text-center"><span>Из г.  -  года рождения</span></p>
        //                     <button disabled className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
        //                 </div>
        //             </section>

        //             <div className="photos-container">
        //                 <div style={{ backgroundColor: 'gray', height: '450px', width: '100%' }}></div>
        //             </div>

        //             <section className="jumbotron v-offset-small">
        //                 <div className="head"><p className="small">Обо мне</p></div>
        //                 <div className="content no-padding">
        //                     <ul>
        //                         <li className="v-offset-small">
        //                             <p className="small bold">Увлечения</p>
        //                             <p className="small"></p>
        //                         </li>
        //                         <li className="v-offset-small">
        //                             <p className="small bold">Активности</p>
        //                             <p className="small"></p>
        //                         </li>
        //                         <li className="v-offset-small">
        //                             <p className="small bold">Языки</p>
        //                             <p className="small"></p>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </section>
        //             <section className="jumbotron">
        //                 <div className="head"><p className="small">Связанные аккаунты</p></div>
        //                 <div className="content no-padding">
        //                     <ul>
        //                         <li className="row align-center v-offset-small">
        //                             <div className="col-9 ">
        //                                 <p className="small">Facebook</p>
        //                             </div>
        //                             <div className="icon"><img src={achieveIcon} alt="z" /></div>
        //                         </li>
        //                         <li className="row align-center v-offset-small">
        //                             <div className="col-9 ">
        //                                 <a href="https://vk.com/" target="blank"><p className="small">Вконтакте</p></a>
        //                             </div>
        //                             <div className="icon"><img src={achieveIcon} alt="z" /></div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </section>
        //             <section className="jumbotron">
        //                 <div className="head"><p className="small">Подтвержденная информация</p></div>
        //                 <div className="content no-padding">
        //                     <ul>
        //                         <li className="row align-center v-offset-small">
        //                             <div className="col-9 ">
        //                                 <p className="small">Адрес электронной почты</p>
        //                             </div>
        //                             <div className="icon"><img src={achieveIcon} alt="z" /></div>
        //                         </li>
        //                         <li className="row align-center v-offset-small">
        //                             <div className="col-9 ">
        //                                 <p className="small">Номер телефона</p>
        //                             </div>
        //                             <div className="icon"><img src={achieveIcon} alt="z" /></div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </section>
        //         </div>
        //     </div>
        //     <div className={`${window.innerWidth < 992 ? '' : 'l-offset-mid'} col-10 col-lg-7 col-xl-6`}>
        //         <section className="d-none d-lg-block jumbotron">
        //             <div className="content">
        //                 <div className="price-popup"><p style={{ color: 'white' }}></p></div>
        //                 <p>{`Привет, меня зовут !`}</p>
        //                 <p className="small secondary"></p>
        //                 <hr className="v-offset-small" />
        //                 <p className="small" style={{ whiteSpace: 'pre-line' }}></p>
        //                 <hr className="v-offset-small" />
        //                 <p className="v-offset-small text-center"><span>Из г.  - года рождения</span></p>
        //                 <button disabled className="offset-md-4 offset-2 v-offset-small col-8 col-md-4 lead">Забронировать</button>
        //             </div>
        //         </section>
        //         <section className="jumbotron">
        //             <div className="head"><p>Отзывы путешественников</p></div>
        //             <div className="content reviews">
        //             </div>
        //         </section>
        //     </div>
        // </div>)
    }
}