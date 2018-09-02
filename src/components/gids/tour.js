import React from 'react'
import review from './review';
import Stars from './Stars'

import { Link } from 'react-router-dom'

import tourVideo from '../../resourses/Gids/video-preview.png'
import thumbnail from '../../resourses/Gids/person-thumbnail.png'

import { showPopup } from '../../functions'

export default (tour) => {
    return (
        <div>
            <section id="gids-header" className="vh-100"></section>
            <div className="container v-offset-small">
                {tour && tour.name
                    ? <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-8">
                                    <h1>{tour.name}</h1>
                                    <p className="small secondary">{tour.slogan}</p>
                                </div>
                                <Link to={`/guids/id=${tour.user}`} className="col-4 justify-center">
                                    <div className="profile-image-small">
                                        <img src={thumbnail} alt="gidImage" />
                                    </div>
                                    <p className="text-center v-offset-small col-12">Имя</p>
                                </Link>
                            </div>
                            <div className="col-12 border-box v-offset-small d-lg-none">
                                <p className="bold">{tour.price} руб. <span className="small">за час</span></p>
                                <div className="row">
                                    {Stars(5)}
                                    <span className="bold small">100</span>
                                </div>
                                <hr />
                                <p className="bold"><span className="small">Даты и время</span></p>
                                <div className="data-box" style={{ padding: '15px 0' }}>
                                    <div className="row">
                                        <span className="small col-4 text-right">{tour.date_from}</span>
                                        <svg className="col-4" height="10px" width="100%">
                                            <line x1="0" y1="7px" x2="100%" y2="7px"
                                                style={{ stroke: 'black', strokeWidth: 2 }} />
                                        </svg>
                                        <span className="small col-4">{tour.date_to}</span>
                                    </div>
                                </div>
                                <p className="small bold v-offset-small">Место проведения</p>
                                <p className="small">{tour.location}</p>
                                <div className="row justify-center v-offset-small">
                                    <button className="col-8 col-md-4 lead">Добавить в закладки</button>
                                </div>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold">Описание тура</p>
                                <p className="upper v-offset-small">{tour.description}</p>
                            </div>
                            {/* <div className="border-box v-offset-small">
                            <p className="bold text-center">Перевести на русский</p>
                        </div> */}
                            {/* <div className="border-box v-offset-small">
                            <p className="bold">Activities</p>
                            <div className="row">
                                {[...Array(6)].map((e, i) =>
                                    <div key={i} className="col-md-6 row v-offset-small">
                                        <div className="col-3"><img src="http://via.placeholder.com/20x20" alt="icon" /></div>
                                        <div className="col-9">Sport</div>
                                    </div>
                                )}
                            </div>
                        </div> */}
                            <div className="border-box v-offset-small">
                                <p className="bold">Детали</p>
                                <p>В стоимость тура включено: {tour.inclusion}</p>
                                <p className="v-offset-small bold small">Место встречи</p>
                                <p>{tour.meeting_details}</p>
                                <p className="v-offset-small bold small">Маршрут</p>
                                <p>{tour.route}</p>
                                <p className="v-offset-small bold small">Транспорт</p>
                                <p>{tour.transport}</p>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold">Дополнительная информация</p>
                                <p className="v-offset-small">{tour.extra_info}</p>
                                {tour.extra_options ? <p className="v-offset-small small bold">Дополнительные возможности</p> : null}
                                <p className="small">{tour.extra_options}</p>
                                <p className="small">Дополнительные расходы: {tour.expenses}</p>
                            </div>
                            <div className="v-offset-small">
                                <img src={tourVideo} alt="video" />
                            </div>
                            <div className="tour-rating v-offset-small">
                                <div className="row">
                                    <p className="bold">100 Отзывов</p>
                                    <div className="l-offset-small align-center">
                                        {Stars(5)}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <p className="col-5">Точность</p>
                                            <div className="col-7 align-center">
                                                {Stars(5)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <p className="col-5">Цена/качество</p>
                                            <div className="col-7 align-center">
                                                {Stars(5)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <p className="col-5">Общение</p>
                                            <div className="col-7 align-center">
                                                {Stars(5)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <p className="col-5">Маршрут</p>
                                            <div className="col-7 align-center">
                                                {Stars(5)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="reviews">
                                    {[...Array(6)].map((e, i) => review(i))}
                                </div>
                            </div>
                        </div>
                        <div className="l-offset-small d-none d-lg-block col-lg-4">
                            <div className="col-12 border-box sticky">
                                <p className="bold">{tour.price} руб. <span className="small">за час</span></p>
                                <div className="row">
                                    {Stars(5)}
                                    <span className="bold small">100</span>
                                </div>
                                <hr />
                                <p className="bold"><span className="small">Даты и время</span></p>
                                <div className="data-box">
                                    <div className="row">
                                        <span className="small col-md-5 col-xl-4 text-right">{tour.date_from}</span>
                                        <svg className="col-xl-4 col-md-2" height="10px" width="100%">
                                            <line x1="0" y1="7px" x2="100%" y2="7px"
                                                style={{ stroke: 'black', strokeWidth: 2 }} />
                                        </svg>
                                        <span className="small col-md-5 col-xl-4">{tour.date_to}</span>
                                    </div>
                                </div>
                                <p className="small bold v-offset-small">Место проведения</p>
                                <p className="small">{tour.location}</p>
                                <div className="row justify-center v-offset-small">
                                    <button onClick={() => showPopup('tourAlert')} className="col-md-8 lead">Добавить в закладки</button>
                                    <div className="popupMessage" id="tourAlert"><h1>Бронирование временно недоступно!</h1><p>Мы ждем пока нас станет чуть чуть больше...</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h1>Loading...</h1>}
            </div>
        </div>
    )
}
