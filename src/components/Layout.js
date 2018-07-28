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

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => true} />
                        <Route path="/partners" render={() => Navbar('dark')} />

                        <Route render={() => Navbar('light')} />
                    </Switch>

                    <Route exact path='/' component={Menu} />
                    <Route path='/partners' component={PartnersContainer} />

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