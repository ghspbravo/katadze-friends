import React, { Component } from 'react'
import { connect } from 'react-redux'
import { list } from '../actions/event'
import { event } from '../actions/event'

import about from '../components/events/about'
import faq from '../components/events/faq'
import contacts from '../components/events/contacts'

import {
    Route,
    Switch,
} from 'react-router'

import listEvents from '../components/events/list'
import info from '../components/events/info';

class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventId: this.props.match.params && this.props.match.params.id,
            tariffId: 0
        }
    }

    tariffChangeHandle = id => this.setState({ tariffId: id })

    componentDidMount() {
        switch (this.props.match.path) {
            case '/events':
                this.props.fetchEventList()
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
                <Route exact path='/events' render={() =>
                    listEvents(
                        this.props.events
                    )
                } />
                <Route exact path='/events/id=:id' render={() => info(
                    this.props.events,
                    this.state.tariffId,
                    this.tariffChangeHandle
                )
                } />
                <Route exact path="/events/about" component={about} />
                <Route exact path="/events/faq" component={faq} />
                <Route exact path="/events/contacts" component={contacts} />
            </ Switch>

        )
    }
}

const mapStateToProps = state => ({
    events: state.event,
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: id => dispatch(event(id)),
    fetchEventList: page => dispatch(list(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
