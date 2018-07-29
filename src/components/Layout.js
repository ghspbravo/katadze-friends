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
import Navbar from './Navbar';
import About from './About';
import Contacts from './Contacts';
import FAQ from './FAQ';
import PartnersContainer from '../containers/PartnersContainer';
import EventsContainer from '../containers/EventsContainer'
import EventInfo from './EventInfo'

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => true} />
                        <Route path="/partners" render={() => Navbar('dark')} />
                        <Route path="/events" render={() => Navbar('dark')} />

                        <Route render={() => Navbar('light')} />
                    </Switch>

                    <Route exact path='/' component={Menu} />
                    <Route exact path='/partners' component={PartnersContainer} />
                    <Route exact path='/events' component={EventsContainer} />
                    <Route path='/events/:id' component={EventInfo} />

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