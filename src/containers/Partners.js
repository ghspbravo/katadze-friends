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
import { getFiledErrors, resetStatus } from '../reducers';
import { contact, becomePartnerRequest } from '../actions/ticket';
import { forceRefresh, STATUS_SUCCESS } from '../actions';
import Info from '../components/partners/info';

class PartnersContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerId: this.props.match.params && this.props.match.params.id,
            showPartnerForm: false,
            title: '',
            name: '',
            email: '',
            question: '',
            organization: '',
            comment: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name
        this.setState({
            [name]: value
        });
    };

    handleContact = (event) => {
        event.preventDefault()
        this.props.onContact(this.state.title, this.state.name, this.state.email, this.state.question)
        this.setState({ title: '', name: '', email: '', question: '' })
    }

    handleBecomePartner = (event) => {
        event.preventDefault()
        this.props.onBecomePartner(this.state.organization, this.state.name, this.state.email, this.state.comment)
    }

    showPartnerFormHandler = () => this.setState({ showPartnerForm: true })

    componentDidMount() {
        switch (this.props.match.path) {
            case '/partners':
                this.props.partners && this.props.partners[0] ? null : this.props.fetchPartnerList()
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
                {this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ name: '', title: '', question: '', email: '', organization: '', comment: '', showPartnerForm: false }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
                {/* <Route exact path="/partners" render={() => listPartners(
                    this.props.partners,
                    this.state.showPartnerForm,
                    this.showPartnerFormHandler,

                    this.handleInputChange,
                    this.handleBecomePartner,
                    this.props.errors,
                    this.props.status,
                    this.state
                )} /> */}
                <Route exact path="/partners/id=:id" render={() => <Info
                    partner={this.props.partner}
                />} />
                <Route exact path="/partners/about" component={about} />
                <Route exact path="/partners/faq" component={faq} />
                <Route exact path="/partners/contacts" render={() => contacts(
                    this.handleInputChange,
                    this.handleContact,
                    this.props.errors,
                    this.props.status,
                    this.state
                )} />
            </Switch>
        )
    }
}


const mapStateToProps = state => ({
    partners: state.partner.list,
    partner: state.partner.info,
    status: state.ticket.status,
    errors: getFiledErrors(state.ticket),
    resetStatus: () => resetStatus(state),
});

const mapDispatchToProps = dispatch => ({
    fetchPartnerList: page => dispatch(list(page)),
    fetchPartner: id => dispatch(partner(id)),
    onContact: (title, name, email, question) => dispatch(contact(title, name, email, question)),
    onBecomePartner: (organization, name, email, comment) => dispatch(becomePartnerRequest(organization, name, email, comment)),

    forceRefresh: () => {
        dispatch(forceRefresh())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer)
