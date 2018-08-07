import React, { Component } from 'react'
import Stars from './Stars';
import {Link} from 'react-router-dom'

export default class TourInfo extends Component {

    componentDidMount() {
        this.props.fetchTour('tourinfo')
    }

    render() {
        return (
            <div>
                <section id="gids-header" className="vh-100"></section>
                <div className="container v-offset-small">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <h1 className="col-10">Название тура</h1>
                                <Link to='/gids/id=1' className="col-2">
                                    <div className="profile-image-small">
                                        <img src="http://via.placeholder.com/80x80" alt="gidImage" />
                                    </div>
                                    <p className="text-center v-offset-small">Имя</p>
                                </Link>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold">Описание тура</p>
                                <p className="upper v-offset-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam commodi veritatis quaerat voluptatibus fuga. Accusantium soluta sequi accusamus earum corrupti harum molestiae hic minus sunt, nulla possimus consectetur temporibus nemo ipsum officia animi, reiciendis consequatur aliquam? Ea illum laudantium, culpa neque voluptates perferendis fuga ipsa et dolorem, voluptas laborum.</p>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold text-center">Перевести на русский</p>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold">Activities</p>
                                <div className="row">
                                    {[...Array(6)].map((e, i) =>
                                        <div key={i} className="col-md-6 row v-offset-small">
                                            <div className="col-3"><img src="http://via.placeholder.com/20x20" alt="icon" /></div>
                                            <div className="col-9">Sport</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="border-box v-offset-small">
                                <p className="bold">Языки</p>
                                <p className="v-offset-small">Русский, Английский</p>
                            </div>
                            <div className="v-offset-small">
                                <img src="http://via.placeholder.com/700x400" alt="video" />
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
                                    {[...Array(6)].map((e, i) =>
                                        <div key={i} className="row">
                                            <div className="col-2">
                                                <div className="profile-image-small">
                                                    <img src="http://via.placeholder.com/80x80" alt="userImage" />
                                                </div>
                                                <p className="secondary text-center small v-offset-small">Имя</p>
                                            </div>
                                            <div className="col-10 comment">
                                                <p>Самые приятные впечатления остались от общения с Алексеем. Встретил нашу беспокойную команду (очень активные дети 3 и 6 лет) в аэропорту, по дороге на все вопросы ответил, рассказал, довез до отеля. Через пару дней провел экскурсию по городу на машине, мальчишки довольны, я - тем более.</p>
                                                <p className="secondary v-offset-small">Из Екатеринбурга, Россия * июнь 2018</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="l-offset-small col-md-4">
                            <div className="col-12 border-box sticky">
                                <p className="bold">1000 руб. <span className="small">за час</span></p>
                                <div className="row">
                                    {Stars(5)}
                                    <span className="bold small">100</span>
                                </div>
                                <hr />
                                <p className="bold"><span className="small">Даты и время</span></p>
                                <div className="data-box">
                                    <div className="row">
                                        <span className="small">01.01.2018</span>
                                        <svg height="10px" width="140px">
                                            <line x1="20px" y1="7px" x2="120px" y2="7px"
                                                style={{ stroke: 'black', strokeWidth: 2 }} />
                                        </svg>
                                        <span className="small">18.01.2018</span>
                                    </div>
                                </div>
                                <div className="row justify-center v-offset-small">
                                    <button className="col-md-8 lead">Забронировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
