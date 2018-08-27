import React from 'react'
import { Link } from 'react-router-dom'

export default (tour, index) => {
    return (
        <Link key={index} className="col-12 col-md-6 col-xl-4" to={`/tours/${tour.id}`} style={window.innerWidth > 1200 && index < 3
        || window.innerWidth < 1200 && window.innerWidth > 576 && index < 2 ? {} : {marginTop: '20px'}}>
            <div className="row justify-center align-center tour-preview" style={{ backgroundImage: 'url(http://via.placeholder.com/300x300)' }} >
                <div className="text-center">
                    <p>{tour.name}</p>
                    <p>{tour.price} руб.</p>
                </div>
            </div>
        </Link>
    )
}
