import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    componentDidMount() {
        let menu = document.querySelector('.menu')
        menu.style.opacity = 1
    }

    render() {
        return (
            <div className="menu">
                <Link to="/gids" id="gids" className="project-card-wrapper">
                    <div className="project-card">
                        <h2 className="project-title">
                            <span>Гиды</span>
                            <svg width="100%" height="100%" x="0px" y="0px">
                                <defs>
                                    <mask id="mask1" x="0" y="0" width="100%" height="100%">
                                        <rect id="alpha" x="0" y="0" width="1000%" height="100%" />
                                        <text x="18rem" y="50%" className="st0 st1">Гиды</text>
                                        <text x="18rem" y="30%" className="st0 st1 logo">Z</text>
                                    </mask>
                                </defs>
                                <rect id="base" x="0" y="0" width="100%" height="100%" mask="url(#mask1)" />
                            </svg>
                        </h2>
                    </div>
                </Link>
                <Link to="/events" id="events" className="project-card-wrapper">
                    <div className="project-card">
                        <h2 className="project-title">
                            <span>Мероприятия</span>
                            <svg width="100%" height="100%" x="0px" y="0px">
                                <defs>
                                    <mask id="mask2" x="0" y="0" width="100%" height="100%">
                                        <rect id="alpha" x="0" y="0" width="1000%" height="100%" />
                                        <text x="16rem" y="50%" className="st0 st1">Мероприятия</text>
                                        <text x="16rem" y="30%" className="st0 st1 logo">Z</text>
                                    </mask>
                                </defs>
                                <rect id="base" x="0" y="0" width="100%" height="100%" mask="url(#mask2)" />
                            </svg>
                        </h2>
                    </div>
                </Link>
                <Link to="/partners" id="partners" className="project-card-wrapper">
                    <div className="project-card">
                        <h2 className="project-title">
                            <span>Партнеры</span>
                            <svg width="100%" height="100%" x="0px" y="0px">
                                <defs>
                                    <mask id="mask3" x="0" y="0" width="100%" height="100%">
                                        <rect id="alpha" x="0" y="0" width="1000%" height="100%" />
                                        <text x="15rem" y="50%" className="st0 st1">Партнеры</text>
                                        <text x="15rem" y="30%" className="st0 st1 logo">Z</text>
                                    </mask>
                                </defs>
                                <rect id="base" x="0" y="0" width="100%" height="100%" mask="url(#mask3)" />
                            </svg>
                        </h2>
                    </div>
                </Link>
                <Link to="/about" id="about" className="project-card-wrapper">
                    <div className="project-card">
                        <h2 className="project-title">
                            <span>О нас</span>
                            <svg width="100%" height="100%" x="0px" y="0px">
                                <defs>
                                    <mask id="mask4" x="0" y="0" width="100%" height="100%">
                                        <rect id="alpha" x="0" y="0" width="1000%" height="100%" />
                                        <text x="13rem" y="50%" className="st0 st1">О нас</text>
                                        <text x="13rem" y="30%" className="st0 st1 logo">Z</text>
                                    </mask>
                                </defs>
                                <rect id="base" x="0" y="0" width="100%" height="100%" mask="url(#mask4)" />
                            </svg>
                        </h2>
                    </div>
                </Link>
            </div>
        )
    }
}
