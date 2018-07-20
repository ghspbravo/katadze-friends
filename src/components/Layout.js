import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'

import '../styles/App.css';
import '../bootstrap-grid.min.css';
import '../reset.css';

import Menu from './Menu'
import Footer from './Footer'
import Navbar from './Navbar';

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => true}/>
                        <Route component={Navbar}/>
                    </Switch>

                    <Route exact path='/' component={Menu} />

                    <Switch>
                        <Route exact path="/" render={() => true}/>
                        <Route component={Footer}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}