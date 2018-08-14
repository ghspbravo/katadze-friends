import React, { Component } from 'react'
import { connect } from 'react-redux'
import { list } from '../actions/event'
import { event } from '../actions/event'

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
        if (typeof this.state.eventId !== 'undefined') this.props.fetchEvent(this.state.eventId)
        else this.props.fetchEventList()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/events' render={() =>
                    listEvents(
                        this.props.events
                    )
                } />
                <Route path='/events/:id' render={() => info(
                    this.props.events,
                    this.state.tariffId,
                    this.tariffChangeHandle
                )
                } />
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
