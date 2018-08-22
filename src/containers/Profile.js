import React, { Component } from 'react'
import { connect } from 'react-redux'

import edit from '../components/profile/edit'
import applications from '../components/profile/applications'
import tours from '../components/profile/tours'
import becomeGid from '../components/profile/becomeGid'
import newTour from '../components/profile/newTour'

import { Route, Redirect } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { isAuthenticated } from '../reducers'
import { logout } from '../actions/auth'

class Profile extends Component {

	render() {
		return ( this.props.isAuthenticated
			? <div className="row no-margin">
				<div className="offset-xl-2 offset-lg-1 col-lg-3 col-xl-2 no-select">
					<div className="sticky profile-nav" style={window.innerWidth < 992 ? {textAlign: 'center'} : {}}>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/edit' >Редактировать профиль</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/applications'  >Заявки</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/tours' >Мои туры</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/become-gid' >Стать гидом</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/create-tour' >Создать тур</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<button onClick={this.props.logout}><Link to='/login' >Выйти</Link></button>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-7">
					<Switch>
						<Route path='/profile/edit' component={edit} />
						<Route path='/profile/applications' component={applications} />
						<Route path='/profile/tours' component={tours} />
						<Route path='/profile/become-gid' component={becomeGid} />
						<Route path='/profile/create-tour' component={newTour} />
					</Switch>
				</div>
			</div>
			: <Redirect to='/login' />
		)
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);