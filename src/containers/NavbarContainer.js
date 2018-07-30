import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { changeNavType } from '../actions/index'

const mapStateToProps = state => ({
    navState: state.navReducer.navType
});

const mapDispatchToProps = dispatch => ({
    changeNavType: navType => dispatch(changeNavType(navType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
