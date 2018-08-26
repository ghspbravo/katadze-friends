import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Route,
    Switch,
} from 'react-router'

import '../bootstrap-grid.min.css';
import '../reset.css';
import '../styles/Styles.css';

import Menu from './Menu'
import Footer from './Footer'
import About from './About';
import Contacts from './Contacts';
import FAQ from './FAQ';

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
        window.onresize = () => window.location.reload()
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
                    <Route exact path="/" render={() => true} />
                    <Route component={Navbar} />
                </Switch>

                <Route exact path='/' component={Menu} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/registration' component={Auth} />
                <Route exact path='/reset-password' component={Auth} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/partners' component={Partners} />

                <Route path='/partners/:id' component={Partners} />
                <Route path='/events/:id' component={Events} />
                <Route path='/gids' component={Gids} />
                <Route path='/tours' component={Gids} />
                <Route path='/activate/' component={Profile} />
                <Route path='/reset/' component={Auth} />
                <Route path='/profile' component={Profile} />

                <Route path='/about' component={About} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/FAQ' component={FAQ} />


                <Switch>
                    <Route exact path="/" render={() => true} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)