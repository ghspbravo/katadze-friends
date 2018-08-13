import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { NavbarTypes } from '../actions/index'


export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prevLocation: props.location.pathname
        }
    }


    selectNav = location => {
        let pathList = location.split('/')
        switch (pathList[1]) {
            case "partners":
                if (typeof pathList[2] !== 'undefined') {
                    this.props.changeNavType(NavbarTypes.BG_LARGE)
                    break;
                }
            case "gids":
                if (typeof pathList[2] !== 'undefined') {
                    if (pathList[2].match(/^search=/)) {
                        this.props.changeNavType(NavbarTypes.BG_ALT_SMALL)
                        break;
                    }
                    if (pathList[2].match(/^id=/)) {
                        this.props.changeNavType(NavbarTypes.BG_SMALL)
                        break;
                    }
                }
            case "events":
                this.props.changeNavType(NavbarTypes.TRANSPARENT_WHITE_LARGE)
                break
            case "tours":
                this.props.changeNavType(NavbarTypes.BG_SMALL)
                break;

            default:
                this.props.changeNavType(NavbarTypes.BG_LARGE)
                break;
        }
        this.setState({ prevLocation: location })
    }

    componentDidMount() {
        this.selectNav(this.props.location.pathname)
        window.onwheel = e => {
            if (window.pageYOffset / window.innerHeight > 0.5) {
                if (this.props.navState !== NavbarTypes.BG_SMALL
                    && this.props.navState !== NavbarTypes.BG_ALT_SMALL) this.props.changeNavType(NavbarTypes.BG_SMALL)
            }
            else if (this.props.navState === NavbarTypes.BG_SMALL
                && this.state.prevLocation.split('/')[1] !== "tours"
                && this.state.prevLocation.split('/')[1] !== "profile") this.selectNav(this.props.location.pathname)
        }
    }

    componentDidUpdate() {
        if (this.props.location.pathname !== this.state.prevLocation) this.selectNav(this.props.location.pathname)
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
                        <button onClick={() => console.log(this.props)}>
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
