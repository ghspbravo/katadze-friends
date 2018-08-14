import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <form action="">
                <select className='col-5 bordered' id='application-filter'>
                    <option value="male">Все заявки (0)</option>
                    <option value="male">Непрочитанные (0)</option>
                    <option value="male">Бронирования (0)</option>
                    <option value="male">Заявки на рассмотрении (0)</option>
                </select>
            </form>
            <section className="jumbotron v-offset-small">
                <div className="content">
                    <div className="v-offset-small text-center">
                        <p className="bold">Заявок пока нет.</p>
                    </div>
                    <div className="v-offset-small text-center">
                        <p>Когда вы выберете тур, смотрите ответы гидов здесь.</p>
                    </div>
                    <div className="v-offset-mid row justify-center">
                        <div className="col-lg-5">
                            <Link to='/gids'>
                                <button className="lead">Найти гида</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
