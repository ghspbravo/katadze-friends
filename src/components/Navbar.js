import React from 'react'
import '../styles/Navbar.css'

import logo from '../resourses/LogoBlackLabel.png'

export default () => {
    return (
        <div className="navbar">
            <div className="row align-center">
                <div className="col-lg-2 justify-right logo">
                    <a href="#">
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>
                <div className="col-lg-6">
                    <ul className="row justify-space-around">
                        <li>
                            <a href="#">Гиды</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Вопросы</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 row justify-space-around">
                    <a href="#">Личный кабинет</a>
                    <svg width="30" height="30">
                        <line x1="0" y1="5" x2="30" y2="5" style={{stroke: 'black', strokeWidth:1}} />
                        <line x1="0" y1="15" x2="30" y2="15" style={{stroke: 'black', strokeWidth:1}} />
                        <line x1="0" y1="25" x2="30" y2="25" style={{stroke: 'black', strokeWidth:1}} />
                    </svg>
                </div>
            </div>
        </div>
    )
}
