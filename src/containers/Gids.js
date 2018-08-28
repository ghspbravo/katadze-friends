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
import { gidList, gidInfo, tourInfo } from '../actions/gids';
import faq from '../components/gids/faq';
import about from '../components/gids/about';
import contacts from '../components/partners/contacts';

class Gids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
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

    componentDidMount() {
        switch (this.props.match.path) {
            case '/tours/:id':
                this.props.onFetchTour(this.props.match.params.id)
                break;

            case '/gids':
                this.props.onFetchList()
                break;

            case '/gids/id=:id':
                this.props.onFetchGid(this.props.match.params.id)
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
                <Route exact path="/gids" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC";
                    return list(
                        this.props.gids,
                        this.handleInputChange,
                        this.handleSearch
                    )
                }} />
                <Route exact path="/gids/id=:id" render={() => {
                    document.body.style.backgroundColor = "white"
                    return profile(
                        this.props.gids
                    )
                }} />
                <Route exact path="/gids/search=:search" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return search(
                        this.props.match.params.search,
                        {}
                    )
                }} />
                <Route exact path="/tours/:id" render={() => {
                    document.body.style.backgroundColor = "white";
                    return tour(
                        this.props.gids
                    )
                }} />
                <Route exact path="/gids/about" component={about} />
                <Route exact path="/gids/faq" component={faq} />
                <Route exact path="/gids/contacts" component={contacts} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    gids: state.gids
});

const mapDispatchToProps = dispatch => ({
    onFetchList: page => dispatch(gidList(page)),
    onFetchGid: id => dispatch(gidInfo(id)),
    onFetchTour: id => dispatch(tourInfo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
