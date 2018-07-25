import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    componentDidMount() {
        let z1 = document.getElementById("z1")
        let z2 = document.getElementById("z2")
        let z3 = document.getElementById("z3")
        let z4 = document.getElementById("z4")

        let initPos = {
            top: z1.offsetTop,
            left: z1.offsetLeft
        }

        // frame1

        function frame1() {
            document.getElementsByClassName('loader')[0].style.opacity = 1;
        }

        // frame2

        function frame2() {
            z2.style.top = `${initPos.top - 20}px`;
            z2.style.left = `${initPos.left + 30}px`;

            z3.style.top = `${initPos.top - 40}px`;
            z3.style.left = `${initPos.left + 60}px`;

            z4.style.top = `${initPos.top - 60}px`;
            z4.style.left = `${initPos.left + 90}px`;
        }

        // frame 3

        function frame3() {
            z1.style.top = `25%`;
            z1.style.left = `15%`;

            z2.style.top = `25%`;
            z2.style.left = `40%`;

            z3.style.top = `25%`;
            z3.style.left = `65%`;

            z4.style.top = `25%`;
            z4.style.left = `85%`;
        }

        // frame 4

        function frame4() {
            document.getElementsByClassName('loader')[0].style.opacity = 0;
            let menu = document.querySelector('.menu')
            menu.style.display = 'flex';
        }

        // frame5

        function frame5() {
            let menu = document.querySelector('.menu')
            menu.style.opacity = 1
        }

        let Frames = { 1: frame1, 2: frame2, 3: frame3, 4: frame4, 5: frame5 }
        let currentFrame = 1;
        let frameAmount = Object.keys(Frames).length;

        requestAnimationFrame(function frame() {
            Frames[currentFrame]()
            currentFrame += 1
            if (currentFrame < frameAmount + 1) setTimeout(requestAnimationFrame, 1000, frame)
        })

    }

    render() {
        return (
            <div>
                <div className="loading">
                    <div className="loader">
                        <div id="z1" className="z-logo">Z</div>
                        <div id="z2" className="z-logo">Z</div>
                        <div id="z3" className="z-logo">Z</div>
                        <div id="z4" className="z-logo">Z</div>
                    </div>
                    <div className="menu">
                        <a id="gids" href="#" className="project-card-wrapper">
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
                                <div className="project-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, tempora.</p>
                                </div>
                            </div>
                        </a>
                        <a id="events" href="#" className="project-card-wrapper">
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
                                <div className="project-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, mollitia!</p>
                                </div>
                            </div>
                        </a>
                        <a id="partners" href="#" className="project-card-wrapper">
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
                                <div className="project-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, placeat.</p>
                                </div>
                            </div>
                        </a>
                        {/* <a id="about" href="#" className="project-card-wrapper"> */}
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
                                <div className="project-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quaerat.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
