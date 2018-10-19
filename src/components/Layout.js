import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Route,
    Switch,
    withRouter
} from 'react-router'

import '../bootstrap-grid.min.css';
import '../reset.css';
import '../styles/Styles.css';

import Menu from './Menu'
import Footer from './Footer'

import Gids from '../containers/Gids';
import Profile from '../containers/Profile';
import Auth from '../containers/Auth';
import Events from '../containers/Events';
import Partners from '../containers/Partners'
import Navbar from '../containers/Navbar';

import { getErrors, resetErrors, getMessages, resetMessages } from '../reducers';
import { forceRefresh } from '../actions';

class Layout extends Component {

    componentWillMount() {
        if (typeof sessionStorage.getItem('isFirstVisit') === 'undefined') sessionStorage.setItem('isFirstVisit', true);
    }

    render() {
        return (
            <div className="app-container">
                <div className="container errors-alert" style={this.props.errors !== '' ? { opacity: '1', top: '30px' } : { opacity: '0', top: '-1000px' }}>
                    <div className="row justify-center">
                        <div className="col-12 col-md-8">
                            <button className="close-button" onClick={() => {this.props.resetErrors(); this.props.forceRefresh()}}>X</button>
                            <p className="small">{this.props.errors}</p>
                        </div>
                    </div>
                </div>
                <div className="container messages-alert" style={this.props.messages.length > 0 ? { opacity: '1', top: '30px' } : { opacity: '0', top: '-1000px' }}>
                    <div className="row justify-center">
                        <div className="col-12 col-md-8">
                            <button className="close-button" onClick={() => {this.props.resetMessages(); this.props.forceRefresh()}}>X</button>
                            <p className="small">{this.props.messages}</p>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={window.innerWidth <= 992 ? Navbar : null} />
                    <Route component={Navbar} />
                </Switch>

                <Route exact path='/' component={Menu} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/registration' component={Auth} />
                <Route exact path='/reset-password' component={Auth} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/guide' component={Gids} />
                <Route exact path='/partners' component={Partners} />

                <Route exact path='/guide/faq' component={Gids} />
                <Route exact path='/guide/about' component={Gids} />
                <Route exact path='/guide/contacts' component={Gids} />

                <Route exact path='/partners/faq' component={Partners} />
                <Route exact path='/partners/about' component={Partners} />
                <Route exact path='/partners/contacts' component={Partners} />

                <Route exact path='/events/faq' component={Events} />
                <Route exact path='/events/about' component={Events} />
                <Route exact path='/events/contacts' component={Events} />

                <Route exact path='/profile/contacts' component={Events} />

                <Route exact path='/login/vk' component={Auth} />

                <Route exact path='/profile' component={Profile} />
                <Route exact path='/profile/edit' component={Profile} />
                <Route exact path='/profile/applications' component={Profile} />
                <Route exact path='/profile/tours' component={Profile} />
                <Route exact path='/profile/become-gid' component={Profile} />
                <Route exact path='/profile/create-tour' component={Profile} />
                <Route exact path='/profile/live/:uuid/:id' component={Profile} />

                <Route exact path='/partners/id=:id' component={Partners} />
                <Route exact path='/events/id=:id' component={Events} />
                <Route exact path='/guide/id=:id' component={Gids} />
                <Route exact path='/guide/search=:search' component={Gids} />
                <Route exact path='/tours/:id' component={Gids} />
                <Route path='/activate/' component={Profile} />
                <Route path='/reset/' component={Auth} />

                <Switch>
                    <Route exact path="/" render={() => null} />
                    <Route component={Footer} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: getErrors(state),
    resetErrors: () => resetErrors(state),
    messages: getMessages(state),
    resetMessages: () => resetMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
    forceRefresh: () => {
        dispatch(forceRefresh())
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))