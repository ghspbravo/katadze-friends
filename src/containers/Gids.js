import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Switch,
} from 'react-router'

import list from '../components/gids/list'
import profile from '../components/gids/profile';
import search from '../components/gids/search';
import tour from '../components/gids/tour';
import { gidList, gidInfo, tourInfo, gidsFilter } from '../actions/gids';
import faq from '../components/gids/faq';
import about from '../components/gids/about';
import contacts from '../components/gids/contacts';
import { contact } from '../actions/ticket';
import { resetStatus, getFiledErrors } from '../reducers';
import { forceRefresh, STATUS_SUCCESS } from '../actions';

class Gids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            title: '',
            name: '',
            email: '',
            question: '',
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

    handleSearch = () => this.state.search === ""
        ? null
        : this.props.history.push(`/gids/search=${this.state.search}`)

    handleContact = (event) => {
        event.preventDefault()
        this.props.onContact(this.state.title, this.state.name, this.state.email, this.state.question)
        this.setState({title: '', name: '', email: '', question: ''})
    }

    componentDidMount() {
        switch (this.props.match.path) {
            case '/tours/:id':
                this.props.onFetchTour(this.props.match.params.id)
                break;

            case '/guids':
                this.props.onFetchList()
                break;

            case '/guids/id=:id':
                this.props.onFetchGid(this.props.match.params.id)
                break;

            case '/guids/search=:search':
                this.props.onFilterGids(this.props.match.params.search)
                break;

            default:
                break;
        }
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "white"
    }

    render() {
        return (
            <Switch>
                {this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ name: '', title: '', question: '', email: '' }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
                <Route exact path="/guids" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC";
                    return list(
                        this.props.gids,
                        this.handleInputChange,
                        this.handleSearch
                    )
                }} />
                <Route exact path="/guids/id=:id" render={() => {
                    document.body.style.backgroundColor = "white"
                    return profile(
                        this.props.gid
                    )
                }} />
                <Route exact path="/guids/search=:search" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return search(
                        this.props.match.params.search,
                        this.props.search
                    )
                }} />
                <Route exact path="/tours/:id" render={() => {
                    document.body.style.backgroundColor = "white";
                    return tour(
                        this.props.tour
                    )
                }} />
                <Route exact path="/guids/about" component={about} />
                <Route exact path="/guids/faq" component={faq} />
                <Route exact path="/guids/contacts" render={() => contacts(
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
    gids: state.gids.list,
    gid: state.gids.info,
    search: state.gids.search,
    tour: state.gids.tour,
    status: state.ticket.status,
    errors: getFiledErrors(state.ticket),
	resetStatus: () => resetStatus(state)
});

const mapDispatchToProps = dispatch => ({
    onFetchList: page => dispatch(gidList(page)),
    onFetchGid: id => dispatch(gidInfo(id)),
    onFetchTour: id => dispatch(tourInfo(id)),
    onFilterGids: location => dispatch(gidsFilter(location)),
    onContact: (title, name, email, question) => dispatch(contact(title, name, email, question)),

    forceRefresh: () => {
		dispatch(forceRefresh())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
