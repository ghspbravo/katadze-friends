import React from 'react'
import { Link } from 'react-router-dom'

export default events => {
    return (
        <div>
            <section id="events-header" className="vh-50 col-12 text-center">
                <h2>Мероприятия</h2>
            </section>
            <section className="container">
                {
                    events && events.results
                        ? events.results.map(event =>
                            <div key={event.id} className="row list-card">
                                <div className="col-lg-6 order-fix">
                                    <h1>{event.name}</h1>
                                    <button className="more-button"><Link to={`/events/${event.id}`}>Подробнее</Link></button>
                                </div>
                                <div className="col-lg-6 justify-center align-center">
                                    <img className="list-card-pic" src={event.img} alt="project-pic" />
                                </div>
                            </div>
                        )
                        : <h1>Loading, please wait...</h1>
                }
            </section>
        </div>
    )
}
