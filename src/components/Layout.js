import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router'

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
import TourContainer from '../containers/TourContainer'
import GidInfo from './GidInfo'
import Profile from '../containers/Profile';
import EventInfo from './EventInfo';
import rest from '../containers/rest'
import Login from './Login'

export default class Layout extends Component {

    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Route exact path="/" render={() => true} />
                    <Route component={NavbarContainer} />
                </Switch>
                <Route path='/POST' component={rest} />

                <Route render={() => { window.scrollTo(0, 0); return true }} />
                <Route exact path='/' component={Menu} />
                <Route exact path='/partners' component={PartnersContainer} />
                <Route exact path='/events' component={EventsContainer} />
                <Route exact path='/gids' component={GidsContainer} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Login} />
                <Route exact path='/reset-password' component={Login} />
                
                <Route path='/api/user/activate/:userId/:userToken/' render={() => <Redirect to='/login' />} />

                <Route path='/Profile' component={Profile} />
                <Route path='/events/:id' component={EventInfo} />
                <Route path='/partners/:id' component={PartnerInfo} />
                <Route path='/gids/search=:search' component={SearchGid} />
                <Route path='/gids/id=:search' component={GidInfo} />
                <Route path='/tours/:id' component={TourContainer} />

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