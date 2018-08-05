import { connect } from 'react-redux'
import { fetchEvent } from '../actions/index'
import EventInfo from '../components/EventInfo';

const mapStateToProps = state => ({
    eventInfo: state.eventsReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: eventApi => dispatch(fetchEvent(eventApi)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
