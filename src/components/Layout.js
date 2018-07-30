import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import '../bootstrap-grid.min.css';
import '../reset.css';
import '../styles/Styles.css';

import Menu from './Menu'
import Footer from './Footer'
import About from './About';
import Contacts from './Contacts';
import FAQ from './FAQ';
import PartnersContainer from '../containers/PartnersContainer';
import EventsContainer from '../containers/EventsContainer'
import InfoEventContainer from '../containers/InfoEventContainer';
import NavbarContainer from '../containers/NavbarContainer';

export default class Layout extends Component {

    render() {
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => true} />
                        <Route component={NavbarContainer} />
                    </Switch>

                    <Route exact path='/' component={Menu} />
                    <Route exact path='/partners' component={PartnersContainer} />
                    <Route exact path='/events' component={EventsContainer} />
                    <Route path='/events/:id' component={InfoEventContainer} />

                    <Route path='/about' component={About} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/FAQ' component={FAQ} />

                    <Switch>
                        <Route exact path="/" render={() => true} />
                        <Route component={Footer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}