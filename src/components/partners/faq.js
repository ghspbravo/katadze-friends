import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div>
            <section id="faq-main" className="row vh-50">
                <div className="offset-1 offset-lg-2 col-lg-4">
                    <h1 className="lead">Ответы на все твои вопросы</h1>
                    <h1><span>И не только</span></h1>
                </div>
            </section>
            <section className="light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 question-wrapper">
                            <div className="question col-12"><h1>
                                Как стать Другом?
                                </h1></div>
                            <div className="answer col-12">
                                <p>Все просто: для связи с нашими специалистами достаточно просто заполнить первоначальную <Link to='/partners' className="bold small">заявку</Link>. Дальше мы все сделаем за вас сами.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 question-wrapper">
                            <div className="question col-12"><h1>
                            Какие организации интересны вам в разрезе партнерства?
                                </h1></div>
                            <div className="answer col-12">
                                <p>Как и в случае с нашими клиентами – мы не ставим никаких барьеров. Вы производите машинное масло? – мы ездим на автомобилях. Ваш продукт – уроки английского? – завтра мы будем покорять Эверест – пригодится!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 question-wrapper">
                            <div className="question col-12"><h1>
                            Моя компания – тоже туроператор. Как сотрудничать?
                                </h1></div>
                            <div className="answer col-12">
                                <p>Прекрасно! Создадим коллаборацию туроператоров. Сделаем совместный тур. Поделимся опытом. Заполняйте <Link to='/partners' className='bold small' >заявку</Link> – мы найдем, где применить Ваш талант.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 question-wrapper">
                            <div className="question col-12"><h1>
                            Моя организация не из Екатеринбурга, есть смысл сотрудничать?
                                </h1></div>
                            <div className="answer col-12">
                                <p>Есть. Хотя бы потому что наш идейный вдохновитель – с Кавказа. А креативный менеджер – из Киргизии. А наши планы – охватить весь мир. Вместе с Вами</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <Link to='contacts'>
                    <h1 className="secondary text-center">Не нашел <span className="lead">ответ</span></h1>
                </Link>
            </section>
        </div>
    )
}
