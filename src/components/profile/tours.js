import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <form action="">
                <select className='col-5 bordered' id='application-filter'>
                    <option value="allTours">Все туры (0)</option>
                    <option value="favourites">Избранные (0)</option>
                    <option value="feature">В планах (0)</option>
                    <option value="completed">Завершенные (0)</option>
                    <option value="myTours">Мои туры (0)</option>
                </select>
            </form>
            <section className="jumbotron v-offset-small">
                <div className="content">
                    <div className="v-offset-small text-center">
                        <p className="bold">Туров пока нет.</p>
                    </div>
                    <div className="v-offset-small text-center">
                        <p>Когда вы выберете тур, или создадите свой, найдете его здесь.</p>
                    </div>
                    <div className="v-offset-mid row justify-center">
                        <div className="col-lg-5">
                            <Link to='/gids'>
                                <button className="lead">Найти тур</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
