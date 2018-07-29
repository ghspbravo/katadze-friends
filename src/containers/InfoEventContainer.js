import { connect } from 'react-redux'
import { fetchEvent, changeTariff } from '../actions/index'
import EventInfo from '../components/EventInfo';

const mapStateToProps = state => ({
    eventInfo: state.events,
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: eventApi => dispatch(fetchEvent(eventApi)),
    changeTariff: id => dispatch(changeTariff(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
