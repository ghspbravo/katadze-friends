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
import { gidList, gidInfo } from '../actions/gids';

class Gids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            gidId: this.props.match.params && this.props.match.params.id,
            searchQuery: this.props.match.params && this.props.match.params.search
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

    conponentDidMount() {
        if (typeof this.state.gidId !== 'undefined') this.props.onFetchGid(this.state.gidId)
        else if (typeof this.state.searchQuery !== 'undefined') null
        else this.props.onFetchList()
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "white"
    }

    render() {
        return (
            <Switch>
                {console.log(this.props)}
                <Route exact path="/gids" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return list(
                        this.props.gids,
                        this.handleInputChange,
                        this.handleSearch
                    )
                }} />
                <Route path="/gids/id=:id" render={() => {
                    document.body.style.backgroundColor = "white"
                    return profile(

                    )
                }} />
                <Route path="/gids/search=:search" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return search(
                        this.state.search
                    )
                }} />
                <Route path="/tours/:id" render={() => {
                    document.body.style.backgroundColor = "white"
                    return tour(

                    )
                }} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    gids: state.gids
});

const mapDispatchToProps = dispatch => ({
    onFetchList: dispatch(gidList()),
    onFetchGid: id => dispatch(gidInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
