import React from 'react'
import { Route } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

export default (currentState, openNavHandler, user) => {
    return (
        <div className={`navbar navbar-${currentState} no-select`}>
            <div className="navbar-inner col-12">
                <div className="row align-center" style={{ position: 'relative', zIndex: '5' }}>
                    <Link to="/" className="offset-1 col-md-1 col-3 logo" />
                    <div className="d-none d-lg-block col-lg-8">
                        <ul className="row justify-space-around">
                            <li>
                                <Switch>
                                    <Route path="/partners" render={() => <NavLink to="/partners" activeClassName="active-nav">Партнеры</NavLink>} />
                                    <Route path="/guide" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />
                                    <Route path="/events" render={() => <NavLink to="/events" activeClassName="active-nav">Мероприятия</NavLink>} />
                                    <Route path="/tours" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />
                                    <Route path="/profile" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />


                                    <Route render={() => <NavLink to="/guide">Гиды</NavLink>} />
                                </Switch>
                            </li>
                            <Switch>
                                {/* <Route path="/partners" render={() => <NavLink to="/partners/about" activeClassName="active-nav">О нас</NavLink>} /> */}
                                {/* <Route path="/events" render={() => <NavLink to="/events/about" activeClassName="active-nav">О нас</NavLink>} /> */}
                                <Route path="/partners" render={() => null} />
                                <Route path="/events" render={() => null} />
                                <Route render={() => <li>
                                    <NavLink to="/guide/about" activeClassName="active-nav">О нас</NavLink>
                                </li>} />
                            </Switch>
                            <li>
                                <Switch>
                                    <Route path="/partners" render={() => <NavLink to="/partners/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                                    <Route path="/events" render={() => <NavLink to="/events/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                                    <Route render={() => <NavLink to="/guide/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                                </Switch>
                            </li>
                            <li>
                                <Switch>
                                    <Route path="/partners" render={() => <NavLink to="/partners/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                                    <Route path="/events" render={() => <NavLink to="/events/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                                    <Route render={() => <NavLink to="/guide/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                                </Switch>
                            </li>
                            <li>
                                {/* <NavLink to="/profile" activeClassName="active-nav">
                                    {user ? <div>Мой профиль<img src="http://via.placeholder.com/80x80" width='25' height='25' style={{borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)'}} alt="userPic"/></div> : 'регистрация/вход'}
                            </NavLink> */}
                                {user
                                    ? <NavLink to="/profile" activeClassName="active-nav">
                                        <div>Мой профиль<img src={user} width='25' height='25' style={{ borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)' }} alt="userPic" /></div>
                                    </NavLink>
                                    : <NavLink to="/login" activeClassName="active-nav">регистрация/вход</NavLink>

                                }
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <div className="d-block d-lg-none offset-2 offset-md-6 col-md-3 col-6 row">
                            {/* <NavLink to="/profile" activeClassName="active-nav" style={{fontSize: '20px'}}>
                                {user ? <div>Мой профиль<img src="http://via.placeholder.com/80x80" width='25' height='25' style={{borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)'}} alt="userPic"/></div> : 'регистрация/вход'}
                        </NavLink> */}
                            {user
                                ? <NavLink to="/profile" activeClassName="active-nav">
                                    <div>Мой профиль<img src={user} width='25' height='25' style={{ borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)' }} alt="userPic" /></div>
                                </NavLink>
                                : <NavLink to="/login" activeClassName="active-nav">регистрация/вход</NavLink>

                            }
                        </div>} />
                        <Route render={() =>
                            <div className="d-block d-lg-none offset-5 offset-md-8 col-1 row">
                                <button onClick={openNavHandler}>
                                    <svg width="25" height="25">
                                        <line id="top-line" className="burger-line" x1="0" y1="5" x2="25" y2="5" style={{ strokeWidth: 1 }} />
                                        <line id="mid-line" className="burger-line" x1="0" y1="15" x2="25" y2="15" style={{ strokeWidth: 1 }} />
                                        <line id="bot-line" className="burger-line" x1="0" y1="24" x2="25" y2="24" style={{ strokeWidth: 1 }} />
                                    </svg>
                                </button>
                            </div>} />
                    </Switch>
                </div>
            </div>
            <div className="d-lg-none navbar mobile-nav">
                <ul className="row justify-space-around">
                    <li>
                        <Switch>
                            <Route path="/partners" render={() => <NavLink to="/partners" activeClassName="active-nav">Партнеры</NavLink>} />
                            <Route path="/events" render={() => <NavLink to="/events" activeClassName="active-nav">Мероприятия</NavLink>} />
                            <Route path="/guide" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />
                            <Route path="/tours" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />
                            <Route path="/profile" render={() => <NavLink to="/guide" activeClassName="active-nav">Гиды</NavLink>} />


                            <Route render={() => <NavLink to="/guide">Гиды</NavLink>} />
                        </Switch>
                    </li>
                    <Switch>
                        {/* <Route path="/partners" render={() => <NavLink to="/partners/about" activeClassName="active-nav">О нас</NavLink>} /> */}
                        {/* <Route path="/events" render={() => <NavLink to="/events/about" activeClassName="active-nav">О нас</NavLink>} /> */}
                        <Route path="/partners" render={() => null} />
                        <Route path="/events" render={() => null} />
                        <Route render={() => <li>
                            <NavLink to="/guide/about" activeClassName="active-nav">О нас</NavLink>
                        </li>} />
                    </Switch>
                    <li>
                        <Switch>
                            <Route path="/partners" render={() => <NavLink to="/partners/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                            <Route path="/events" render={() => <NavLink to="/events/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                            <Route render={() => <NavLink to="/guide/faq" activeClassName="active-nav">Вопросы</NavLink>} />
                        </Switch>
                    </li>
                    <li>
                        <Switch>
                            <Route path="/partners" render={() => <NavLink to="/partners/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                            <Route path="/events" render={() => <NavLink to="/events/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                            <Route render={() => <NavLink to="/guide/contacts" activeClassName="active-nav">Контакты</NavLink>} />
                        </Switch>
                    </li>
                    <li>
                        {/* <NavLink to="/profile" activeClassName="active-nav">
                            {user ? <div>Мой профиль<img src="http://via.placeholder.com/80x80" width='25' height='25' style={{borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)'}} alt="userPic"/></div> : 'регистрация/вход'}
                        </NavLink> */}
                        {user
                            ? <NavLink to="/profile" activeClassName="active-nav">
                                <div>Мой профиль<img src={user} width='25' height='25' style={{ borderRadius: '50%', marginLeft: '20px', transform: 'translateY(15%)' }} alt="userPic" /></div>
                            </NavLink>
                            : <NavLink to="/login" activeClassName="active-nav">регистрация/вход</NavLink>

                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
