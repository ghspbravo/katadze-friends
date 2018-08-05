import { connect } from 'react-redux'
import { fetchGids } from '../actions/GidsActions'
import Gids from '../components/Gids';

const mapStateToProps = state => ({
    gids: state.gidsReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchGids: gidsApi => dispatch(fetchGids(gidsApi))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
