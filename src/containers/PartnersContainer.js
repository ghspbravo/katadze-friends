import { connect } from 'react-redux'
import Partners from '../components/Partners'
import fetchPartners from '../actions/PartnersAction'

// const mapStateToProps = state => ({
//     partners: state.partners.items,
//     loading: state.partners.loading,
//     error: state.partners.error
// });

const mapStateToProps = state => ({
    partners: state.partners.items,
    loading: state.partners.loading,
    error: state.partners.error
})

export default connect(mapStateToProps, fetchPartners)(Partners)
