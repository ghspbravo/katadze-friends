import React, { Component } from 'react'
import { connect } from 'react-redux'
import { list, event } from '../actions/event'
import { acquiringEvent } from '../actions/commerce'

import about from '../components/events/about'
import faq from '../components/events/faq'
import contacts from '../components/events/contacts'

import {
    Route,
    Switch,
} from 'react-router'

import listEvents from '../components/events/list'
import info from '../components/events/info';
import { getFiledErrors, resetStatus, isAuthenticated } from '../reducers';
import { contact, rkv } from '../actions/ticket';
import { forceRefresh, STATUS_SUCCESS } from '../actions';

class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tariffIndex: undefined,
            tariffId: undefined,
            title: '',
            name: '',
            email: '',
            question: '',

            date_birth: '',
            phone_number: '',
            url_social: '',
            city: '',
            came_from: '',
            work_place: ''
        }
    }

    tariffChangeHandle = (index, id) => this.setState({ tariffIndex: index, tariffId: id })

    handleAcquiring = (tariffId, tariff_part = null) => {
        this.props.onAcquiring(tariffId, tariff_part)
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
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let date = this.state.date_birth.split('.')
        let phone = this.state.phone_number.replace(/\D/g, '')
        this.props.onRKV(this.state.name, date.length === 3 ? `${date[2]}-${date[1]}-${date[0]}` : '', `+${phone}`, this.state.url_social, this.state.city, this.state.work_place, this.state.came_from)
    }

    handleValueChange = (name, value) => this.setState({ [name]: value })
    
    componentDidMount() {
        switch (this.props.match.path) {
            case '/events':
                this.props.events && this.props.events[0] ? null : this.props.fetchEventList()
                break;

            case '/events/id=:id':
                this.props.fetchEvent(this.props.match.params.id)
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Switch>
                {this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ name: '', title: '', question: '', date_birth: '', phone_number: '', url_social: '', city: '', work_place: '', came_from: '', email: '' }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
                <Route exact path='/events' render={() =>
                    listEvents(
                        this.props.events
                    )
                } />
                <Route exact path='/events/id=:id' render={() => info(
                    this.props.event,
                    this.state.tariffIndex,
                    this.tariffChangeHandle,
                    this.handleAcquiring,

                    this.handleInputChange,
                    this.handleSubmit,
                    this.props.errors,
                    this.props.status,
                    this.state,
                    this.handleValueChange,

                    this.props.isAuthenticated
                )
                } />
                <Route exact path="/events/about" component={about} />
                <Route exact path="/events/faq" component={faq} />
                <Route exact path="/events/contacts" render={() => contacts(
                    this.handleInputChange,
                    this.handleContact,
                    this.props.errors,
                    this.props.status,
                    this.state
                )} />
            </ Switch>
        )
    }
}

const mapStateToProps = state => ({
    events: state.event.list,
    event: state.event.info,
    payment: state.commerce,
    status: state.ticket.status,
    errors: getFiledErrors(state.ticket),
    resetStatus: () => resetStatus(state),
    isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: id => dispatch(event(id)),
    fetchEventList: page => dispatch(list(page)),
    onAcquiring: (id, partId) => dispatch(acquiringEvent(id, partId)),

    onContact: (title, name, email, question) => dispatch(contact(title, name, email, question)),
    onRKV: (name, date_birth, phone_number, url_social, city, work_place, came_from) => dispatch(rkv(name, date_birth, phone_number, url_social, city, work_place, came_from)),

    forceRefresh: () => {
        dispatch(forceRefresh())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
