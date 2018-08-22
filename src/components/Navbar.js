import React from 'react'
import { Route } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

export default (currentState, openNavHandler) => {
    return (
        <div className={`navbar navbar-${currentState} no-select`}>
            <div className="navbar-inner col-12">
                <div className="row align-center" style={{position: 'relative', zIndex: '5'}}>
                    <Link to="/" className="offset-1 col-md-1 col-3 logo" />
                    <div className="d-none d-lg-block col-lg-8">
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
                    <div className="d-block d-lg-none offset-5 offset-md-8 col-1 row">
                        <button onClick={openNavHandler}>
                            <svg width="30" height="30">
                                <line id="top-line" className="burger-line" x1="0" y1="5" x2="30" y2="5" style={{ strokeWidth: 1 }} />
                                <line id="mid-line" className="burger-line" x1="0" y1="15" x2="30" y2="15" style={{ strokeWidth: 1 }} />
                                <line id="bot-line" className="burger-line" x1="0" y1="25" x2="30" y2="25" style={{ strokeWidth: 1 }} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-lg-none navbar mobile-nav">
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
        </div>
    )
}
