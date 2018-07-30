import { connect } from 'react-redux'
import Partners from '../components/Partners'
import { fetchPartnersCategories } from '../actions/index'

// import fetchPartners from '../actions/PartnersAction'

// const mapStateToProps = state => ({
//     partners: state.partners.items,
//     loading: state.partners.loading,
//     error: state.partners.error
// });

const mapStateToProps = state => ({
    partners: state.partnersReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchPartnersCategories: partnersCategoriesApi => dispatch(fetchPartnersCategories(partnersCategoriesApi))
})

export default connect(mapStateToProps, mapDispatchToProps)(Partners)
