import React, { Component } from 'react'

import LogoWhite from '../resourses/LogoWhite.png'

export default class EventInfo extends Component {
    render() {
        return (
            <div>
                <section className="vh-50 col-12 header" style={{ backgroundImage: 'url(http://188.93.210.198:8000/media/media/upload/event_img/afp.jpg)' }}>
                    <h2>Title</h2>
                </section>
                <section className="eventSection one-page">
                    <div className="section-id">01</div>
                    <div className="offset-lg-6 col-lg-5">
                        <h1>Заголовок</h1>
                        <p>Фестиваль электронной музыки и технологий, который пройдет уже в пятый раз.
                             "Alfa Future People 2018" (AFP) объединяет выступления лучших мировых и российских представителей электронной музыки,
                             самые передовые технологии и зрителей - преимущественно прогрессивную и позитивную молодежь со всего мира.</p>
                    </div>
                </section>
                <section className="eventSection one-page">
                    <div className="offset-lg-1 col-lg-6">
                        <h1><span>Мы зарядим тебя эмоциями и сделаем поездку на Alfa Future People незабываемой!</span></h1>
                        <p className="small secondary v-offset-large">Для членов клуба доступны трансфер из Екатеринбурга, проживание в коттедже или кемпинге по специальным ценам.</p>
                    </div>
                    <div className="offset-lg-2 col-lg-3 one-page justify-center acsent-alt-bg">
                        <div className="col-lg-10">
                            <img src={LogoWhite} />
                        </div></div>
                </section>
                <section className="eventSection">
                    <div className="col-12">
                        <h1 className="text-center">Лайнап</h1>
                    </div>
                    <div className="container">
                        <div className="row justify-center row-box-3">
                            <div className="col-lg-3 acsent-box-small text-center v-offset-mid" >
                                <h1>Main Stage</h1>
                                <ul className="v-offset-small">
                                    <li>list1</li>
                                    <li>list2</li>
                                    <li>list3</li>
                                    <li>list4</li>
                                    <li>list5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <ul className="steps">
                            <li>
                                <span>01</span> Купи билет на сайте AFP
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="offset-1">
                        <h1 className="super"><span>Пакеты</span></h1>
                    </div>
                    <div className="container">
                        <div className="col-lg-3 text-center tarif-selector">
                            <button className="col-12 active"><p className="lead">
                                PRO
                            </p></button>
                            <button className="col-12"><p className="lead">
                                PRO
                            </p></button>
                            <button className="col-12"><p className="lead">
                                PRO
                            </p></button>
                        </div>
                        <div className="offset-lg-2 col-lg-7"></div>
                    </div>
                </section>
            </div>
        )
    }
}
