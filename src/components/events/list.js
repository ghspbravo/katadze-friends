import React from 'react'
import { Link } from 'react-router-dom'

export default events => {
    return (
        <div>
            <section id="events-header" className="vh-100 col-12 text-center" style={{paddingTop: '20vh', paddingBottom: '20vh'}}>
                <h2>katadze.events</h2>
            </section>
            <section className="container">
                {
                    events
                        ? events.map(event =>
                            <div key={event.id} className="row list-card">
                                <div className="col-lg-6 order-fix">
                                    <h1>{event.name}</h1>
                                    <button className="more-button"><Link to={`/events/id=${event.id}`}>Подробнее</Link></button>
                                </div>
                                <div className="col-lg-6 justify-center align-center">
                                    <img className="list-card-pic" src={event.img} style={{width: '100%'}} alt="project-pic" />
                                </div>
                            </div>
                        )
                        : <h1>Loading, please wait...</h1>
                }
            </section>
        </div>
    )
}
