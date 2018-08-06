import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars';

export default class SearchGid extends Component {
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = "#E8EFFC"
    }

    componentWillUnmount() {
        document.querySelector('body').style.backgroundColor = "white"
    }
    render() {
        return (
            <div>
                <section id="gids-header" className="vh-100">
                    <div className="row justify-center">
                        <h1 className="upper">{this.props.match.params.search}</h1>
                    </div>
                </section>
                <section>
                    <h1 className="text-center"><span>Поможем найти гида</span></h1>
                    <div className="offset-md-1 col-md-10 row justify-center">
                        {[...Array(10)].map((e, i) =>
                            <div key={i} className="col-md-5 gid-card">
                                <Link to="/tours/1">
                                    <div className="row">
                                        <div className="col-4"><div style={{ backgroundColor: '#494949', width: '100%', height: '100%' }} src="#" alt="gidPhoto" /></div>
                                        <div className="offset-1 col-6">
                                            <div className="row">
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
                        )}
                    </div>
                    <div className="row justify-center">
                        <button className="col-md-2 lead">Показать больше гидов</button>
                    </div>
                </section>
            </div>
        )
    }
}
