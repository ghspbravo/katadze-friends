import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TimelineMax from 'gsap/TimelineMax'
import { Expo } from 'gsap/EasePack'

import main from '../resourses/Menu/main.jpg'
import partners from '../resourses/Menu/partners.jpg'
import gids from '../resourses/Menu/gids.jpg'
import events from '../resourses/Menu/events.jpg'

export default class Menu extends Component {
    handleItemHover = (target, scene) => {
        let id = target.id

        scene.add('start')
            .set(`#${id} .homepage-item-inner`, { opacity: '1' })
            .set(`#${id} .homepage-item-image`, { opacity: '1' })
            .set('.background', { opacity: '0' })
            .to(`#${id} .homepage-item-image`, 0.5, { transform: 'scale(1)' })
            .to(`#${id} .knockout-text-bg`, 1, { attr: { y: '0' }, ease: Expo.easeOut }, 'start')
            .to(`#${id} .homepage-item-inner-title`, 0.2, { opacity: '1' }, 'start+=0.6')
            .to(`#${id} .homepage-item-inner-subtext-subtitle`, 0.2, { opacity: '1' }, 'start+=0.8')
            .to(`#${id} .homepage-item-inner-subtext-link`, 0.2, { opacity: '1' }, 'start+=1')
    }

    handleItemLeft = (target, scene) => {
        let id = target.id
        scene.clear()

        scene.set(`#${id} .knockout-text-bg`, { attr: { y: `-${window.innerHeight}` } })
            .set(`#${id} .homepage-item-image`, { transform: 'scale(1.05)' })
            .set(`#${id} .homepage-item-image`, { opacity: '0' })
            .set(`#${id} .homepage-item-inner`, { opacity: '0' })
            .set(`#${id} .homepage-item-inner-title`, { opacity: '0' })
            .set(`#${id} .homepage-item-inner-subtext-subtitle`, { opacity: '0' })
            .set(`#${id} .homepage-item-inner-subtext-link`, { opacity: '0' })
            .set('.background', { opacity: '1' })
    }

    componentDidMount() {
        if (sessionStorage.getItem('isFirstVisit') === 'false') {
            document.querySelector('.preloader').style.display = 'none'
            document.querySelectorAll('.homepage-item').forEach(item => {
                let hoverScene = new TimelineMax()

                item.onmouseover = () => this.handleItemHover(item, hoverScene)
                item.onmouseleave = () => this.handleItemLeft(item, hoverScene)
            })
            document.querySelector('.homepage-item-wrapper').onmouseover = () => {
                document.querySelector('.homepage-item-wrapper').classList.add('hidden-lines')
            }
            document.querySelector('.homepage-item-wrapper').onmouseleave = () => {
               if (document.querySelector('.homepage-item-wrapper')) document.querySelector('.homepage-item-wrapper').classList.remove('hidden-lines')
            }
        }
        else {
            if (window.innerWidth > 992) {
                let loaderScene = new TimelineMax({
                    onComplete: () => {
                        sessionStorage.setItem('isFirstVisit', 'false');
                        document.querySelectorAll('.homepage-item').forEach(item => {
                            let hoverScene = new TimelineMax()

                            item.onmouseover = () => this.handleItemHover(item, hoverScene)
                            item.onmouseleave = () => this.handleItemLeft(item, hoverScene)
                        })
                        document.querySelector('.homepage-item-wrapper').onmouseover = () => {
                            document.querySelector('.homepage-item-wrapper').classList.add('hidden-lines')
                        }
                        document.querySelector('.homepage-item-wrapper').onmouseleave = () => {
                            document.querySelector('.homepage-item-wrapper').classList.remove('hidden-lines')
                        }
                    }
                })

                loaderScene.staggerFrom('.preloader .logo span', 0.5, { opacity: '0' }, 0.3, '+=1.5')
                    .to('#loader-part-1', 1.5, { y: `-${window.innerHeight}`, ease: Expo.easeIn })
                    .to('#loader-part-2', 1.2, { y: `-${window.innerHeight}`, ease: Expo.easeIn }, '-=1')
                    .to('#loader-part-3', 1, { y: `-${window.innerHeight}`, ease: Expo.easeIn }, '-=0.8')
                    .from('.background', 0.3, { transform: 'scale(1.1)' }, '-=1')
                    .to('.preloader .logo', 1, { opacity: '0' })
                    .set('.brand', { opacity: '0' }, '-=1')
                    .to('.brand', 1, { opacity: '0.5' }, '-=1')
                    .staggerFrom('.homepage-item .title', 0.3, { opacity: '0' }, 0.2, '-=1')
                    .set('.preloader .logo', { display: 'none' })
            } else {
                let loaderScene = new TimelineMax({
                    onComplete: () => sessionStorage.setItem('isFirstVisit', 'false')
                })

                loaderScene.staggerFrom('.preloader .logo span', 0.5, { opacity: '0' }, 0.3, '+=1.5')
                    .to('#loader-big', 1.5, { y: `-${window.innerHeight + 200}`, ease: Expo.easeIn })
                    .to('.preloader .logo', 1, { opacity: '0' })
                    .from('.brand', 1, { opacity: '0' }, '-=1')
                    .staggerFrom('.homepage-item .title', 0.3, { opacity: '0' }, 0.2, '-=1')
                    .set('.preloader .logo', { display: 'none' })

            }
        }

        document.querySelector('a.scroll-to').onclick = e => {
            e.preventDefault()
            let target = e.target.hash
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="preloader">
                    <div className="preloader-inner">
                        <span id="loader-part-1" className="d-none d-lg-block"></span>
                        <span id="loader-part-2" className="d-none d-lg-block"></span>
                        <span id="loader-part-3" className="d-none d-lg-block"></span>
                        <span id="loader-big" className="d-lg-none"></span>
                    </div>
                    <div className="logo">
                        <span>K</span>
                        <span>A</span>
                        <span>T</span>
                        <span>A</span>
                        <span>D</span>
                        <span>Z</span>
                        <span>E</span>
                    </div>
                </div>
                <div className="d-none d-lg-block homepage">
                    <div className="brand">KATADZE</div>
                    <div className="background" style={{ backgroundImage: `url(${main})` }}>
                        <span className="credits">made by katadze digital studio
                        <br />На сайте используются cookies</span>
                    </div>
                    <div className="homepage-item-wrapper">
                        <div id="events" className="homepage-item">
                            <div className="title">События.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${events})` }}>
                                <span className="credits">made by katadze digital studio
                                <br />На сайте используются cookies</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">События</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Объединяя людей по всему миру, мы создаем уникальные проекты самой разной направленности. Присоединяйся: погнали Katadze</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/events">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-3" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">✈</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-3)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                        <div id="gids" className="homepage-item">
                            <div className="title">Гиды.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${gids})` }}>
                                <span className="credits">made by katadze digital studio
                                <br />На сайте используются cookies</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">Гиды</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Удобный и быстрый сервис для поиска гида и ярких впечатлений. Регистрируйся и наслаждайся!.</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/guide">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-1" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">❉</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-1)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                        <div id="partners" className="homepage-item">
                            <div className="title">Друзья.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${partners})` }}>
                                <span className="credits">made by katadze digital studio
                                <br />На сайте используются cookies</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">Друзья</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Создавать пространство для возможностей - наша цель. Добиваться её нам помогают наши партнеры: постоянные скидки и бонусы от Друзей Katadze.</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/partners">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-0" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">%</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-0)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none mobile-homepage">
                    <a href="#content" className="scroll-to"><span></span>SCROLL</a>
                    <div className="brand">KATADZE</div>
                    <div className="background" style={{ backgroundImage: `url(${main})` }}></div>
                    <div id="content" className="homepage-item-inner">
                        <div className="homepage-item-image" style={{ backgroundImage: `url(${events})` }}></div>
                        <div className="homepage-item-inner-title">События</div>
                        <div className="homepage-item-inner-subtext">
                            <div className="homepage-item-inner-subtext-subtitle">
                                <p>Объединяя людей по всему миру, мы создаем уникальные проекты самой разной направленности. Присоединяйся: погнали Katadze</p>
                            </div>
                            <Link className="homepage-item-inner-subtext-link" to="/events">Перейти</Link>
                        </div>
                        <div className="homepage-mask-wrapper">
                            <svg width="100%" height="100%"> <defs> <mask id="knockout-text-6" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">✈</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y="0" fillOpacity="0.5" mask="url(#knockout-text-6)"></rect> </svg>
                        </div>
                    </div>
                    <div className="homepage-item-inner">
                        <div className="homepage-item-image" style={{ backgroundImage: `url(${gids})` }}></div>
                        <div className="homepage-item-inner-title">Гиды</div>
                        <div className="homepage-item-inner-subtext">
                            <div className="homepage-item-inner-subtext-subtitle">
                                <p>Удобный и быстрый сервис для поиска гида и ярких впечатлений. Регистрируйся и наслаждайся!.</p>
                            </div>
                            <Link className="homepage-item-inner-subtext-link" to="/guide">Перейти</Link>
                        </div>
                        <div className="homepage-mask-wrapper">
                            <svg width="100%" height="100%"> <defs> <mask id="knockout-text-5" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle" style={{transformOrigin: 'center', transform: 'rotate(180deg)'}}>✼</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y="0" fillOpacity="0.5" mask="url(#knockout-text-5)"></rect> </svg>
                        </div>
                    </div>
                    <div className="homepage-item-inner">
                        <div className="homepage-item-image" style={{ backgroundImage: `url(${partners})`, backgroundPositionX: '25%' }}></div>
                        <div className="homepage-item-inner-title">Друзья</div>
                        <div className="homepage-item-inner-subtext">
                            <div className="homepage-item-inner-subtext-subtitle">
                                <p>Создавать пространство для возможностей - наша цель. Добиваться её нам помогают наши партнеры: постоянные скидки и бонусы от Друзей Katadze.</p>
                            </div>
                            <Link className="homepage-item-inner-subtext-link" to="/partners">Перейти</Link>
                        </div>
                        <div className="homepage-mask-wrapper">
                            <svg width="100%" height="100%"> <defs> <mask id="knockout-text-4" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">%</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y="0" fillOpacity="0.5" mask="url(#knockout-text-4)"></rect> </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
