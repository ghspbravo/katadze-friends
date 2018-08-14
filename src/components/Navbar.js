import React from 'react'
import { Route } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

export default (currentState, appState) => {
    return (
        <div className={`navbar navbar-${currentState} no-select`}>
            <div className="row align-center">
                <Link to="/" className="offset-lg-1 col-lg-1 logo" />
                <div className="col-lg-8">
                    <ul className="row justify-space-around">
                        <li>
                            <Switch>
                                <Route path="/partners" render={() => <NavLink to="/partners" activeClassName="active-nav">Партнеры</NavLink>} />
                                <Route path="/events" render={() => <NavLink to="/events" activeClassName="active-nav">Мероприятия</NavLink>} />
                                <Route path="/gids" render={() => <NavLink to="/gids" activeClassName="active-nav">Гиды</NavLink>} />
                                <Route path="/tours" render={() => <NavLink to="/gids" activeClassName="active-nav">Гиды</NavLink>} />


                                <Route render={() => <NavLink to="/">Главная</NavLink>} />
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
                            <NavLink to="/profile" activeClassName="active-nav">
                                Личный кабинет
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-1 row justify-space-around">
                    <button onClick={() => console.log(appState)}>
                        <svg width="30" height="30">
                            <line className="burger-line" x1="0" y1="5" x2="30" y2="5" style={{ strokeWidth: 1 }} />
                            <line className="burger-line" x1="0" y1="15" x2="30" y2="15" style={{ strokeWidth: 1 }} />
                            <line className="burger-line" x1="0" y1="25" x2="30" y2="25" style={{ strokeWidth: 1 }} />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
