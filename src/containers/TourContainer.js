import { connect } from 'react-redux'
import { fetchTour } from '../actions/ToursAction'
import TourInfo from '../components/TourInfo';

const mapStateToProps = state => ({
    tour: state.tourReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchTour: tourApi => dispatch(fetchTour(tourApi))
})

export default connect(mapStateToProps, mapDispatchToProps)(TourInfo)
