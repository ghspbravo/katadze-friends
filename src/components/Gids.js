import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import GidsList from '../fakeServer/GidsList'
import Stars from './Stars';

export default class Gids extends Component {

    handleSearch = () => {
        let searchString = document.querySelector('#searchGid').value
        searchString === ""
            ? false
            : this.props.history.push(`/gids/search=${searchString}`)
    }

    componentDidMount() {
        document.querySelector('#searchGid').onkeydown = e => {
            if (e.key === 'Enter') this.handleSearch()
        }
        document.querySelector('#searchButton').onclick = this.handleSearch

        this.props.fetchGids(GidsList)
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
                        <div className="col-lg-4">
                            <h1 className="upper">Найти гида</h1>
                            <div className="row searchBox">
                                <div className="col-8"><input id="searchGid" type="text" /></div>
                                <div className="col-4"><button id="searchButton"><p className="small">
                                    Искать
                                </p></button></div>
                            </div>
                            <p className="small" >Например: Екатеринбург</p>
                        </div>
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
                        <div className="col-12 gid-card justify-center">
                            <ul className="row col-12 todo-list v-offset-small justify-space-around">
                                <li>Создай профиль гида</li>
                                <li>Покажи места, которые знаешь</li>
                                <li>Заработай денег</li>
                            </ul>
                            <button className="col-md-2 lead">Стать гидом</button>
                        </div>
                    </div>
                    <div className="row justify-center">
                        <button className="col-md-2 lead">Показать больше гидов</button>
                    </div>
                </section>
            </div>
        )
    }
}
