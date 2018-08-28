import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Switch,
} from 'react-router'

import { list } from '../actions/partner'
import { partner } from '../actions/partner'

import listPartners from '../components/partners/list';
import info from '../components/partners/info';
import about from '../components/partners/about';
import faq from '../components/partners/faq';
import contacts from '../components/partners/contacts'

class Partners extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerId: this.props.match.params && this.props.match.params.id,
            showPartnerForm: false
        }
    }

    showPartnerFormHandler = () => this.setState({ showPartnerForm: true })

    componentDidMount() {
        switch (this.props.match.path) {
            case '/partners':
                this.props.fetchPartnerList()
                break;

            case '/partners/id=:id':
                this.props.fetchPartner(this.props.match.params.id)
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/partners" render={() => listPartners(
                    this.props.partners,
                    this.state.showPartnerForm,
                    this.showPartnerFormHandler
                )} />
                <Route exact path="/partners/id=:id" render={() => info(
                    this.props.partners
                )} />
                <Route exact path="/partners/about" component={about} />
                <Route exact path="/partners/faq" component={faq} />
                <Route exact path="/partners/contacts" component={contacts} />
            </Switch>
        )
    }
}


const mapStateToProps = state => ({
    partners: state.partner,
});

const mapDispatchToProps = dispatch => ({
    fetchPartnerList: page => dispatch(list(page)),
    fetchPartner: id => dispatch(partner(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Partners)
