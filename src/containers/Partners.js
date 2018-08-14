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

class Partners extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerId: this.props.match.params && this.props.match.params.id,
            showPartnerForm: false
        }
    }

    showPartnerFormHandler = () => this.setState({showPartnerForm: true})

    componentDidMount() {
        if (typeof this.state.partnerId !== 'undefined') this.props.fetchPartner(this.state.partnerId)
        else this.props.fetchPartnerList()
    }

    render() {
        return (
            <Switch>
                <Route exact path="/partners" render={() => listPartners(
                    this.props.partners,
                    this.state.showPartnerForm,
                    this.showPartnerFormHandler
                )} />
                <Route path="/partners/:id" render={() => info(
                    this.props.partners
                )} />
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
