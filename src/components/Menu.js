import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TimelineMax from 'gsap/TimelineMax'
import attr from 'gsap/AttrPlugin'
import { Expo } from 'gsap/EasePack'

import main from '../resourses/Menu/main.jpg'
import partners from '../resourses/Menu/partners.jpg'
import gids from '../resourses/Menu/gids.jpg'
import events from '../resourses/Menu/events.jpg'

export default class Menu extends Component {

    handleItemHover = target => {
        let id = target.id
        let hoverTimeLine = new TimelineMax()

        hoverTimeLine.to(`#${id} .knockout-text-bg`, 2, { attr: { y: '0' }, ease: Expo.easeOut })
        .from(`#${id} .homepage-item-inner-title`, 1, { opacity: '0', top: '60%' })
    }

    handleItemLeft = target => {
        let id = target.id
        let leaveTimeLine = new TimelineMax()

        leaveTimeLine.set(`#${id} .knockout-text-bg`, { attr: { y: `-${window.innerHeight}` } })
        // .set(`#${id} .homepage-item-inner-title`, { opacity: '0'})
    }

    componentDidMount() {
        document.querySelectorAll('.homepage-item').forEach(item => {
            item.onmouseenter = () => this.handleItemHover(item)
            item.onmouseleave = () => this.handleItemLeft(item)
        })
    }

    render() {
        return (
            <div>
                <div className="homepage">
                    <div className="brand">KATADZE</div>
                    <div className="background" style={{ backgroundImage: `url(${main})` }}>
                        <span className="credits">made by katadze digital studio</span>
                    </div>
                    <div className="homepage-item-wrapper">
                        <div id="partners" className="homepage-item">
                            <div className="title">Скидки.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${partners})` }}>
                                <span className="credits">made by katadze digital studio</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">Скидки</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, dicta.</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/partners">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-0" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">%</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-0)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                        <div id="gids" className="homepage-item">
                            <div className="title">Гиды.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${gids})` }}>
                                <span className="credits">made by katadze digital studio</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">Сеть гидов</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, dicta.</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/partners">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-1" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">❖</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-1)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                        <div id="events" className="homepage-item">
                            <div className="title">Мероприятия.</div>
                            <div className="homepage-item-image" style={{ backgroundImage: `url(${events})` }}>
                                <span className="credits">made by katadze digital studio</span>
                            </div>
                            <div className="homepage-item-inner">
                                <div className="homepage-item-inner-title">Весь мир</div>
                                <div className="homepage-item-inner-subtext">
                                    <div className="homepage-item-inner-subtext-subtitle">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, dicta.</p>
                                    </div>
                                    <Link className="homepage-item-inner-subtext-link" to="/partners">Перейти</Link>
                                </div>
                                <div className="homepage-mask-wrapper">
                                    <svg width="100%" height="100%"> <defs> <mask id="knockout-text-3" x="0" y="0" width="100%" height="100%"> <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect> <text className="svg-text-home" dy=".25em" x="50%" y="50%" textAnchor="middle">✈</text> </mask> </defs> <rect className="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y={`-${window.innerHeight}`} fillOpacity="0.5" mask="url(#knockout-text-3)"></rect> </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
