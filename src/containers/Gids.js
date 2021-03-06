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
import { gidList, gidInfo, tourInfo, gidsFilter, getCity, getGidComments } from '../actions/gids';
import faq from '../components/gids/faq';
import about from '../components/gids/about';
import contacts from '../components/gids/contacts';
import { contact } from '../actions/ticket';
import { resetStatus, getFiledErrors } from '../reducers';
import { forceRefresh, STATUS_SUCCESS } from '../actions';
import { createGidClaim } from '../actions/claim';
import Profile from '../components/gids/profile';
import { getUserPhotos } from '../actions/profile';

class Gids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            title: '',
            name: '',
            email: '',
            question: '',
            message_to_gid: ''
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

    handleClaim = (event) => {
        event.preventDefault()
        this.props.onClaim(this.props.match.params.id, this.state.message_to_gid)
        this.setState({ message_to_gid: '' })
    }

    handleSearch = () => this.state.search === ""
        ? null
        : this.props.history.push(`/guide/search=${this.state.search}`)

    handleContact = (event) => {
        event.preventDefault()
        this.props.onContact(this.state.title, this.state.name, this.state.email, this.state.question)
        this.setState({ title: '', name: '', email: '', question: '' })
    }

    componentDidMount() {
        this.props.resetStatus()
        switch (this.props.match.path) {
            case '/tours/:id':
                this.props.onFetchTour(this.props.match.params.id)
                break;

            case '/guide':
                this.props.gids && this.props.gids[0] ? null : this.props.onFetchList()
                break;

            case '/guide/id=:id':
                this.props.onFetchGid(this.props.match.params.id)
                this.props.onGetGidComments(this.props.match.params.id)
                this.props.onGetGidPhotos(this.props.match.params.id)
                break;

            case '/guide/search=:search':
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
                <Route exact path="/guide" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC";
                    return list(
                        this.props.gids,
                        this.handleInputChange,
                        this.handleSearch,
                        this.props.onFetchList,
                        this.props.next
                    )
                }} />
                <Route exact path="/guide/id=:id" render={() => <Profile
                    gidInfo={this.props.gid}
                    inputHandler={this.handleInputChange}
                    messageToGid={this.state.message_to_gid}
                    claimHandler={this.handleClaim}
                    claimStatus={this.props.claimStatus}
                    comments={this.props.comments}
                    photos={this.props.gidPhotos}
                />
                } />
                <Route exact path="/guide/search=:search" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return search(
                        this.props.match.params.search,
                        this.props.search,
                        this.props.city
                    )
                }} />
                <Route exact path="/tours/:id" render={() => {
                    document.body.style.backgroundColor = "white";
                    return tour(
                        this.props.tour
                    )
                }} />
                <Route exact path="/guide/about" component={about} />
                <Route exact path="/guide/faq" component={faq} />
                <Route exact path="/guide/contacts" render={() => contacts(
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
    next: state.gids.next,
    gid: state.gids.info,
    search: state.gids.search,
    tour: state.gids.tour,
    city: state.gids.city,
    status: state.ticket.status,
    claimStatus: state.claim.status,
    errors: getFiledErrors(state.ticket),
    resetStatus: () => resetStatus(state),

    comments: state.gids.comments,
    gidPhotos: state.profile.list

});

const mapDispatchToProps = dispatch => ({
    onFetchList: page => dispatch(gidList(page)),
    onFetchGid: id => dispatch(gidInfo(id)),
    onFetchTour: id => dispatch(tourInfo(id)),
    onFilterGids: location => {
        dispatch(getCity(location))
        dispatch(gidsFilter(location))
    },
    onContact: (title, name, email, question) => dispatch(contact(title, name, email, question)),
    onClaim: (id, message) => dispatch(createGidClaim(id, message)),

    forceRefresh: () => {
        dispatch(forceRefresh())
    },

    onGetGidComments: id => dispatch(getGidComments(id)),
    onGetGidPhotos: id => dispatch(getUserPhotos(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
