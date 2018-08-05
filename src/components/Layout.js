import React, { Component } from 'react';
import {
    HashRouter as Router,
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
import PartnerInfo from './PartnerInfo';
import GidsContainer from '../containers/GidsContainer';
import SearchGid from './SearchGid';
import TourInfo from './TourInfo'
import GidInfo from './GidInfo'

export default class Layout extends Component {

    render() {
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => true} />
                        <Route component={NavbarContainer} />
                    </Switch>

                    <Route render={() => {window.scrollTo(0, 0); return true}} />
                    <Route exact path='/' component={Menu} />
                    <Route exact path='/partners' component={PartnersContainer} />
                    <Route exact path='/events' component={EventsContainer} />
                    <Route exact path='/gids' component={GidsContainer} />

                    <Route path='/events/:id' component={InfoEventContainer} />
                    <Route path='/partners/:id' component={PartnerInfo} />
                    <Route path='/gids/search=:search' component={SearchGid} />
                    <Route path='/gids/id=:search' component={GidInfo} />
                    <Route path='/tours/:id' component={TourInfo} />

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