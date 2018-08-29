import React from 'react'
import { Link } from 'react-router-dom'

export default (tours) => {
    return (
        <div>
            <form action="">
                <select className='col-5 bordered' id='application-filter'>
                    <option value="allTours">Все туры ({tours.length})</option>
                    <option disabled value="favourites">Избранные (0)</option>
                    <option disabled value="feature">В планах (0)</option>
                    <option disabled value="completed">Завершенные (0)</option>
                    <option disabled value="myTours">Мои туры (0)</option>
                </select>
            </form>
            {tours.length === 0
                ? <section className="jumbotron v-offset-small">
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
                : <div>
                    {tours.filter(tour => tour.is_accepted).map((tour, i) => <div key={i}>
                            <Link to={`/tours/${tour.id}`}>
                                <section className="jumbotron v-offset-small no-padding">
                                    <div className="col-12" style={{height: '175px', backgroundColor: 'dimgray'}}>
                                        <div style={{position: 'absolute', backgroundColor: '#41BFEF', padding: '5px 20px', top: '20px', right: 0}}><p style={{color: 'white'}}>{tour.price} руб</p></div>
                                        <div className="col-10 offset-1" style={{paddingTop: '75px'}}>
                                            <p className="lead text-center" style={{color: 'white'}}>{tour.name}</p>
                                            <p className="text-center" style={{color: 'white'}}>{tour.location}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="col-10 offset-1">
                                            <p>{tour.slogan}</p>
                                            <p className="small">{tour.description}</p>
                                        </div>
                                    </div>
                                </section>
                            </Link>
                        </div>)}
                </div>}
        </div>
    )
}
