import React from 'react'
import { Link } from 'react-router-dom'

export default index => {
    return (
        <Link key={index} className="col-12 col-md-6 col-xl-4" to={`/tours/${index}`} style={window.innerWidth > 1200 && index < 3
        || window.innerWidth < 1200 && window.innerWidth > 576 && index < 2 ? {} : {marginTop: '20px'}}>
            <div className="row justify-center align-center tour-preview" style={{ backgroundImage: 'url(http://via.placeholder.com/300x300)' }} >
                <div className="text-center">
                    <p>Название тура</p>
                    <p>1000 руб.</p>
                </div>
            </div>
        </Link>
    )
}
