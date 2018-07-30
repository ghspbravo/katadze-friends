import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Navbar)
