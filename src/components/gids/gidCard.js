import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars';

export default (gid, index) => {
    return (
        <div key={index} className="col-12 col-xl-5 gid-card">
            <Link to={`/guide/id=${gid.id}`}>
                <div className="row">
                    <div className="col-12 col-md-4" style={{ height: '250px' }}>
                        <img style={{
                            width: '100%',
                            height: '250px',
                            objectFit: window.innerWidth < 568 ? 'contain' : 'cover'
                        }}
                            src={gid.thumb || gid.avatar} alt="gidPhoto" />
                    </div>
                    <div className="col-10 offset-1 col-md-6" style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px', height: '250px' }}>
                        <div className="row align-center">
                            <div className="col-8">
                                <p className="small bold">{gid.first_name}</p>
                                <p className="small secondary">{gid.residence}</p>
                            </div>
                            <div className="col-4"><p className="small"><span>{gid.profile.price == 0 ? 'БЕСПЛАТНО' : `${gid.profile.price.split('.')[0]} руб`}</span></p></div>
                        </div>
                        <div className="row gid-description align-center" style={{ height: '50%', overflowY: 'auto' }}>
                            <p className="small" style={{ maxHeight: '100%', padding: '10px 0' }}>{gid.profile.keyphrase}</p>
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
