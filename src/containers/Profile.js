import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditProfile from '../components/EditProfile'

import { Route, Redirect } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { isAuthenticated } from '../reducers'
import { logout } from '../actions/auth'

class Profile extends Component {
	render() {
		return ( this.props.isAuthenticated
			? <div className="row">
				<div className="offset-lg-2 col-lg-3 sticky profile-nav">
					<div className="col-12 v-offset-small">
						<NavLink activeClassName='profile-current' to='/Profile/edit' >Редактировать профиль</NavLink>
					</div>
					<div className="col-12 v-offset-small">
						<NavLink activeClassName='profile-current' to='/Profile/messages'  >Сообщения</NavLink>
					</div>
					<div className="col-12 v-offset-small">
						<NavLink activeClassName='profile-current' to='/Profile/tours' >Мои туры</NavLink>
					</div>
					<div className="col-12 v-offset-small">
						<NavLink activeClassName='profile-current' to='/Profile/become-gid' >Стать гидом</NavLink>
					</div>
					<div className="col-12 v-offset-small">
						<button onClick={this.props.logout}><h1>Выйти</h1></button>
					</div>
				</div>
				<div className="col-lg-5">
					<Switch>
						<Route path='/Profile/edit' component={EditProfile} />
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