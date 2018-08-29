import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars';

export default (gid, index) => {
    return (
        <div key={index} className="col-12 col-lg-5 gid-card">
            <Link to={`/gids/id=${gid.id}`}>
                <div className="row">
                    <div className="col-12 col-md-4"><img src={gid.img_photo} alt="gidPhoto" /></div>
                    <div className="col-10 offset-1 col-md-6">
                        <div className="row align-center">
                            <div className="col-8">
                                <p className="small bold">{gid.first_name}</p>
                                <p className="small secondary">{gid.residence}</p>
                            </div>
                            <div className="col-4"><p className="small"><span>{ gid.profile.price == 0 ? 'БЕСПЛАТНО' : `${gid.profile.price} руб`}</span></p></div>
                        </div>
                        <div className="row gid-description">
                            <p className="small">{gid.profile.keyphrase}</p>
                        </div>
                        <div className="row text-center">
                            <div className="col-5"><p className="small secondary">Отзывы</p>
                                <p className="small secondary">0</p>
                            </div>
                            <div className="col-7 row justify-center">
                                <p className="small secondary col-12">Рейтинг</p>
                                {Stars(5)}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
