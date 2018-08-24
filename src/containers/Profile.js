import React, { Component } from 'react'
import { connect } from 'react-redux'

import edit from '../components/profile/edit'
import applications from '../components/profile/applications'
import tours from '../components/profile/tours'
import becomeGid from '../components/profile/becomeGid'
import newTour from '../components/profile/newTour'

import { Route, Redirect, withRouter } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { isAuthenticated, userId } from '../reducers'
import { logout } from '../actions/auth'
import { userInfo, createGid } from '../actions/profile'
import { activate, activateConfirm } from '../actions/registration';

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bio: '',
			keyphrase: '',
			languages: [],
			level: [],
			hobbies: [],
			activities: [],
		}
	}

	componentDidMount() {
		this.props.fetchUser(this.props.userId)
	}

	handleInputChange = (event) => {
		const target = event.target,
			value = target.type ===
				'checkbox' ? target.checked : target.value,
			name = target.name
		this.setState({
			[name]: value
		});
	};

	hadleListChange = event => {
		let name = event.target.name
		let currentList = this.state[name]
		currentList.push(event.target.value)
		this.setState({ [name]: currentList })
	}

	onSubmit = (event) => {
		event.preventDefault()
		switch (this.props.location.pathname) {
			case '/profile/become-gid':
				let languages = []
				let hobbies = []
				let activities = []
				this.state.languages.forEach((language, i) => languages.push({ name: language, level: this.state.level[i] }))
				this.state.hobbies.forEach(hobbie => hobbies.push({ code: hobbie }))
				this.state.activities.forEach(activity => activities.push({ code: activity }))
				console.log(this.state.bio)
				this.props.onCreateGid(this.state.bio, this.state.keyphrase, languages, hobbies, activities)
				break;

			default:
				break;
		}
	};

	handleActivate = () => {
		let locationList = this.props.location.pathname.split('/')
		let uidb64 = locationList[2]
		let token = locationList[3]

		this.props.onActivateConfirm(token, uidb64)
	}


	render() {
		return (this.props.isAuthenticated
			? <div className="row no-margin">
				<div className="offset-xl-2 offset-lg-1 col-lg-3 col-xl-2 no-select">
					<div className="sticky profile-nav" style={window.innerWidth < 992 ? { textAlign: 'center' } : {}}>
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
							<button onClick={() => console.log(this.props.state)}><p>STATE</p></button>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<button onClick={this.props.onActivate}><p>ACTIVATE</p></button>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<button onClick={this.props.logout}><Link to='/login' >Выйти</Link></button>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-7">
					<Switch>
						<Route path='/profile/edit' render={() => edit(
							this.props.user
						)} />
						<Route path='/profile/applications' component={applications} />
						<Route path='/profile/tours' component={tours} />
						<Route path='/profile/become-gid' render={() => becomeGid(
							this.handleInputChange,
							this.hadleListChange,
							this.onSubmit
						)} />
						<Route path='/profile/create-tour' component={newTour} />
						<Route path='/activate/' render={() => {
							this.handleActivate()
							return <Redirect to='/profile' />
						}} />
					</Switch>
				</div>
			</div>
			: <Switch>
				<Route path='/activate/' render={() => {
							() => this.handleActivate()
							return <p>Activating</p>
						}} />
				<Route render={() => <Redirect to='/login' />} />
			</Switch>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.profile,
	isAuthenticated: isAuthenticated(state),
	userId: userId(state),
	state: state,
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchUser: id => dispatch(userInfo(id)),

	onCreateGid: (bio, keyphrase, languages, hobbies, activities) => {
		dispatch(createGid(bio, keyphrase, languages, hobbies, activities))
	},

	onActivate: () => {
		dispatch(activate())
	},

	onActivateConfirm: (token, uidb64) => {
		dispatch(activateConfirm(token, uidb64))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);