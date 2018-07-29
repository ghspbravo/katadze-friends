import React from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default type => {
    return (
        <div className={`navbar navbar-${type}`}>
            <div className="row align-center">
                <Link to="/" className="offset-lg-1 col-lg-1 logo" />
                <div className="col-lg-8">
                    <ul className="row justify-space-around">
                        <li>
                            <Switch>
                                <Route path="/partners" render={() => <NavLink to="/partners" activeClassName="active-nav">Партнеры</NavLink>}/>
                                <Route path="/events" render={() => <NavLink to="/events" activeClassName="active-nav">Мероприятия</NavLink>}/>
                                
                                <Route render={() => <NavLink to="/">Главная</NavLink>}/>
                            </Switch> 
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active-nav">
                                О нас
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/FAQ" activeClassName="active-nav">
                                Вопросы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" activeClassName="active-nav">
                                Контакты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" activeClassName="active-nav">
                            Личный кабинет
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-1 row justify-space-around">
                    <Link to="/">
                        <svg width="30" height="30">
                            <line className="burger-line" x1="0" y1="5" x2="30" y2="5" style={{ strokeWidth: 1 }} />
                            <line className="burger-line" x1="0" y1="15" x2="30" y2="15" style={{ strokeWidth: 1 }} />
                            <line className="burger-line" x1="0" y1="25" x2="30" y2="25" style={{ strokeWidth: 1 }} />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
