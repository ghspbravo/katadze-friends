import React, { Component } from 'react';
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

export default class Layout extends Component {

    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Route exact path="/" render={() => true} />
                    <Route component={Navbar} />
                </Switch>

                <Route render={() => { window.scrollTo(0, 0); return true }} />
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