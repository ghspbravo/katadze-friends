import React from 'react'
import { Link } from 'react-router-dom'

import Claims from './Claims'

export default (claims, isGid) => {
    if (claims && claims.count > 0)
        return (
            <div>
                <form action="">
                    <select className='col-12 col-md-5 bordered' id='application-filter'>
                        <option>Все заявки ({claims.count})</option>
                        <option disabled>Непрочитанные (0)</option>
                        <option disabled>Бронирования (0)</option>
                        <option disabled>Заявки на рассмотрении (0)</option>
                    </select>
                </form>
                <Claims list={claims} isGid={isGid} />
            </div>
        )
    else return (
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
    )
}