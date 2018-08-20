import { Component } from 'react'
import { connect } from 'react-redux'
import { changeNavType } from '../actions/index'
import { NavbarTypes } from '../actions/index'

import desktopNavbar from '../components/Navbar'

class Navbar extends Component {
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
            return   
        }
        this.selectNav(this.props.location.pathname)
        window.onwheel = e => {
            if (window.pageYOffset / window.innerHeight > 0.5) {
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
                desktopNavbar(this.props.navState, this.props.appState)
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
