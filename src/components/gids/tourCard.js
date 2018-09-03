import React from 'react'
import { Link } from 'react-router-dom'

import thumbnail from '../../resourses/Gids/tour-thumbnail.jpg'

export default (tour, index) => {
    return (
        <Link key={index} className="col-12 col-md-6 col-xl-4" to={`/tours/${tour.id}`} style={window.innerWidth > 1200 && index < 3
        || window.innerWidth < 1200 && window.innerWidth > 576 && index < 2 ? {} : {marginTop: '20px'}}>
            <div className="row justify-center align-center tour-preview" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover' }} >
                <div className="text-center">
                    <p style={{color: 'white'}}>{tour.name}</p>
                    <p style={{color: 'white'}}>{tour.price} руб.</p>
                </div>
            </div>
        </Link>
    )
}
