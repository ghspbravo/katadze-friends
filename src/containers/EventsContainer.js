import { connect } from 'react-redux'
import { list } from '../actions/event'
import Events from '../components/Events';

const mapStateToProps = state => ({
    events: state.event,
});

const mapDispatchToProps = dispatch => ({
    fetchEventList: page => dispatch(list(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
