import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars';

export default index => {
    return (
        <div key={index} className="col-12 col-lg-5 gid-card">
            <Link to={`/gids/id=${index}`}>
                <div className="row">
                    <div className="col-12 col-md-4"><div style={{ backgroundColor: '#494949', width: '100%', height: '100%' }} src="#" alt="gidPhoto" /></div>
                    <div className="col-10 offset-1 col-md-6">
                        <div className="row align-center">
                            <div className="col-8">
                                <p className="small bold">Имя</p>
                                <p className="small secondary">Город, страна</p>
                            </div>
                            <div className="col-4"><p className="small"><span>1000р/час</span></p></div>
                        </div>
                        <div className="row gid-description">
                            <p className="small">Комментарий к посту</p>
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
