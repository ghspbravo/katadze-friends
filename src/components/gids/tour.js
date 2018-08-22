import React from 'react'
import review from './review';
import Stars from './Stars'

import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <section id="gids-header" className="vh-100"></section>
            <div className="container v-offset-small">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <h1 className="col-9">Название тура</h1>
                            <Link to='/gids/id=1' className="col-3 justify-center">
                                <div className="profile-image-small">
                                    <img src="http://via.placeholder.com/80x80" alt="gidImage" />
                                </div>
                                <p className="text-center v-offset-small col-12">Имя</p>
                            </Link>
                        </div>
                        <div className="col-12 border-box v-offset-small d-lg-none">
                            <p className="bold">1000 руб. <span className="small">за час</span></p>
                            <div className="row">
                                {Stars(5)}
                                <span className="bold small">100</span>
                            </div>
                            <hr />
                            <p className="bold"><span className="small">Даты и время</span></p>
                            <div className="data-box" style={{padding: '15px 0'}}>
                                <div className="row">
                                    <span className="small col-4 text-right">01.01.2018</span>
                                    <svg className="col-4" height="10px" width="100%">
                                        <line x1="0" y1="7px" x2="100%" y2="7px"
                                            style={{ stroke: 'black', strokeWidth: 2 }} />
                                    </svg>
                                    <span className="small col-4">18.01.2018</span>
                                </div>
                            </div>
                            <div className="row justify-center v-offset-small">
                                <button className="col-8 col-md-4 lead">Забронировать</button>
                            </div>
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
                                {[...Array(6)].map((e, i) => review(i))}
                            </div>
                        </div>
                    </div>
                    <div className="l-offset-small d-none d-lg-block col-lg-4">
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
                                    <span className="small col-md-5 col-xl-4 text-right">01.01.2018</span>
                                    <svg className="col-xl-4 col-md-2" height="10px" width="100%">
                                        <line x1="0" y1="7px" x2="100%" y2="7px"
                                            style={{ stroke: 'black', strokeWidth: 2 }} />
                                    </svg>
                                    <span className="small col-md-5 col-xl-4">18.01.2018</span>
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
