import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

import logo from '../resourses/LogoBlackLabel.png'

export default () => {
    return (
        <div className="navbar">
            <div className="row align-center">
                <div className="col-lg-2 justify-right logo">
                    <Link to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <ul className="row justify-space-around">
                        <li>
                            Гиды
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
                    </ul>
                </div>
                <div className="col-lg-3 row justify-space-around">
                    Личный кабинет
                    <Link to="/">
                        <svg width="30" height="30">
                            <line x1="0" y1="5" x2="30" y2="5" style={{ stroke: 'black', strokeWidth: 1 }} />
                            <line x1="0" y1="15" x2="30" y2="15" style={{ stroke: 'black', strokeWidth: 1 }} />
                            <line x1="0" y1="25" x2="30" y2="25" style={{ stroke: 'black', strokeWidth: 1 }} />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
