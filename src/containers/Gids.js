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

class Gids extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
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

    handleSearch = () => {
        this.state.search === ""
            ? false
            : this.props.history.push(`/gids/search=${this.state.search}`)
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "white"
    }

    render() {
        return (
            <Switch>
                <Route exact path="/gids" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return list(
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
                    document.body.style.backgroundColor = "white"
                    return search(
                        this.state.search
                    )
                }} />
                <Route path="/tours/:id" render={() => {
                    document.body.style.backgroundColor = "#E8EFFC"
                    return tour(

                    )
                }} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Gids)
