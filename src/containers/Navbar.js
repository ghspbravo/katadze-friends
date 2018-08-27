import { Component } from 'react'
import { connect } from 'react-redux'
import { changeNavType } from '../actions/index'
import { NavbarTypes } from '../actions/index'
import TimeLineMax from 'gsap/TimelineMax'
import TweenMax from 'gsap/TweenMax'
import { Expo } from 'gsap/EasePack'

import desktopNavbar from '../components/Navbar'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prevLocation: props.location.pathname,
            isNavOpen: false,
            isDrawing: false
        }
    }

    handleNavToggle = () => {
        if (this.state.isDrawing) return
        this.setState({ isDrawing: true })
        this.state.isNavOpen
            ? this.handleNavClose()
            : this.handleNavOpen()
    }


    handleNavOpen = () => {
        TweenMax.to('#top-line', 0.5, { attr: { y2: '25' } })
        TweenMax.to('#bot-line', 0.5, { attr: { y2: '5' } })
        TweenMax.to('#mid-line', 0.5, { attr: { x1: '15', x2: '15' } })

        let openScene = new TimeLineMax({ onComplete: () => this.setState({ isNavOpen: true, isDrawing: false }) })
        openScene.set('.mobile-nav', { display: 'block' })
            .to('.mobile-nav', 1, { top: '70px', ease: Expo.easeOut })

        document.querySelectorAll('.mobile-nav li').forEach(item => openScene.to(item, 0.1, { opacity: '1' }))
    }
    handleNavClose = () => {
        TweenMax.to('#top-line', 0.5, { attr: { y2: '5' } })
        TweenMax.to('#bot-line', 0.5, { attr: { y2: '25' } })
        TweenMax.to('#mid-line', 0.5, { attr: { x1: '0', x2: '30' } })

        let closeScene = new TimeLineMax({ onComplete: () => this.setState({ isNavOpen: false, isDrawing: false }) })

        document.querySelectorAll('.mobile-nav li').forEach(item => closeScene.to(item, 0.1, { opacity: '0' }))
        closeScene.to('.mobile-nav', 1, { top: '-300px' })
            .set('.mobile-nav', { display: 'none' })
    }

    selectNav = location => {
        let pathList = location.split('/')
        switch (pathList[1]) {
            case "partners":
                if (typeof pathList[2] !== 'undefined') {
                    this.props.changeNavType(NavbarTypes.BG_SMALL_STICKY)
                    break;
                }
            case "gids":
                if (typeof pathList[2] !== 'undefined') {
                    if (pathList[2].match(/^search=/)) {
                        this.props.changeNavType(NavbarTypes.BG_ALT_SMALL)
                        break;
                    }
                    if (pathList[2].match(/^id=/)) {
                        this.props.changeNavType(NavbarTypes.BG_SMALL_STICKY)
                        break;
                    }
                }
            case "events":
                this.props.changeNavType(NavbarTypes.TRANSPARENT_WHITE_LARGE)
                break
            case "profile":
            case "tours":
                this.props.changeNavType(NavbarTypes.BG_SMALL_STICKY)
                break;

            default:
                this.props.changeNavType(NavbarTypes.BG_LARGE)
                break;
        }
        this.setState({ prevLocation: location })
    }

    componentDidMount() {
        if (window.outerWidth < 992) {
            this.props.changeNavType(NavbarTypes.MOBILE)
            document.querySelectorAll('.mobile-nav a').forEach(link => link.onclick = this.handleNavToggle)
            return
        }
        this.selectNav(this.props.location.pathname)
        window.onscroll = e => {
            if (window.pageYOffset / window.innerHeight > 0.4 && window.pageYOffset / window.innerHeight < 0.5) null
            else if (window.pageYOffset / window.innerHeight > 0.5) {
                if (this.props.navState !== NavbarTypes.BG_SMALL
                    && this.props.navState !== NavbarTypes.BG_SMALL_STICKY
                    && this.props.navState !== NavbarTypes.BG_ALT_SMALL) this.props.changeNavType(NavbarTypes.BG_SMALL)
            }
            else if (this.props.navState === NavbarTypes.BG_SMALL) this.selectNav(this.props.location.pathname)
        }
    }

    componentDidUpdate() {
        if (window.outerWidth < 992) return
        if (this.props.location.pathname !== this.state.prevLocation) this.selectNav(this.props.location.pathname)
    }

    render() {
        return (
            desktopNavbar(this.props.navState, this.handleNavToggle)
        )
    }
}


const mapStateToProps = state => ({
    navState: state.navbar.navType,
    appState: state
});

const mapDispatchToProps = dispatch => ({
    changeNavType: navType => dispatch(changeNavType(navType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
