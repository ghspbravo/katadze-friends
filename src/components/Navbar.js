import React, { Component } from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

import { NavbarTypes } from '../actions/index'


export default class Navbar extends Component {

    selectNav = location => {
        switch (location.split('/')[1]) {
            case "partners":
            case "events":
                this.props.changeNavType(NavbarTypes.TRANSPARENT_WHITE_LARGE)
                break

            default:
                this.props.changeNavType(NavbarTypes.BG_LARGE)
                break;
        }
    }

    componentDidMount() {
        this.selectNav(this.props.location.pathname)
        window.onwheel = e => {
            if (window.pageYOffset / window.innerHeight > 0.5) {if (this.props.navState !== NavbarTypes.BG_SMALL) this.props.changeNavType(NavbarTypes.BG_SMALL)}
            else if (this.props.navState === NavbarTypes.BG_SMALL) this.selectNav(this.props.location.pathname)    
        }
    }

    render() {
        return (
            <div className={`navbar navbar-${this.props.navState}`}>
                <div className="row align-center">
                    <Link to="/" className="offset-lg-1 col-lg-1 logo" />
                    <div className="col-lg-8">
                        <ul className="row justify-space-around">
                            <li>
                                <Switch>
                                    <Route path="/partners" render={() => <NavLink to="/partners" activeClassName="active-nav">Партнеры</NavLink>} />
                                    <Route path="/events" render={() => <NavLink to="/events" activeClassName="active-nav">Мероприятия</NavLink>} />

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
                                <NavLink to="#" activeClassName="active-nav">
                                    Личный кабинет
                        </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-1 row justify-space-around">
                        <button onClick={() => console.log(this.props)} to="/">
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
}
