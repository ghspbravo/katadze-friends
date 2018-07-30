import { connect } from 'react-redux'
import { fetchEvents } from '../actions/index'
import Events from '../components/Events';

const mapStateToProps = state => ({
    events: state.eventsReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: eventsApi => dispatch(fetchEvents(eventsApi))
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
