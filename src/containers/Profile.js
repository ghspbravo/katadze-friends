import React, { Component } from 'react'
import { connect } from 'react-redux'

import edit from '../components/profile/edit'
import applications from '../components/profile/applications'
import tours from '../components/profile/tours'
import becomeGid from '../components/profile/becomeGid'
import newTour from '../components/profile/newTour'

import { Route, Redirect } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { isAuthenticated, userId, getFiledErrors, resetStatus } from '../reducers'
import { logout } from '../actions/auth'
import { userInfo, createGid, createTour } from '../actions/profile'
import { activate, activateConfirm } from '../actions/registration';
import { forceRefresh, STATUS_SUCCESS } from '../actions'
import { getClaimList } from '../actions/claim';
import Chat from '../components/profile/Chat';

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bio: '',
			keyphrase: '',
			languages: {},
			// level: [],
			hobbies: {},
			activities: {},

			inclusion: '',
			price: '',
			slogan: '',
			transport: '',
			route: '',
			meeting_details: '',
			description: '',
			name: '',
			location: '',
			date_from: '',
			date_to: '',
			expenses: '',
			extra_options: '',
			extra_info: '',
			max_tourists: '',

			hobbiesList: [
				'Искусство',
				'Еда',
				'Экстрим',
				'Мода',
				'Путешествия',
				'Музыка',
				'Фильмы',
				'Спорт',
				'Литература',
				'Автомобили',
				'Фотография',
				'Hand-made',
				'История',
				'Культура',
				'Шоппинг',
				'Языки'
			],

			activitiesList: [
				'Встреча и сопровождение',
				'Обзорная экскурсия',
				'Знакомство с историей и культурой',
				'Посещение музеев',
				'Посещение кафе и ресторанов',
				'Осмотр достопримечательностей',
				'Шопинг',
				'Спорт и экстрим'
			],

			languagesList: [
				'Русский',
				'Английский'
			]
		}
	}

	componentDidMount() {
		this.props.fetchUser(this.props.userId)
		this.hobbiesListConst = [
			'Искусство',
			'Еда',
			'Экстрим',
			'Мода',
			'Путешествия',
			'Музыка',
			'Фильмы',
			'Спорт',
			'Литература',
			'Автомобили',
			'Фотография',
			'Hand-made',
			'История',
			'Культура',
			'Шоппинг',
			'Языки'
		]

		this.activitiesListConst = [
			'Встреча и сопровождение',
			'Обзорная экскурсия',
			'Знакомство с историей и культурой',
			'Посещение музеев',
			'Посещение кафе и ресторанов',
			'Осмотр достопримечательностей',
			'Шопинг',
			'Спорт и экстрим'
		]

		this.languagesListConst = [
			'Русский',
			'Английский'
		]

		switch (this.props.location.pathname) {
			case '/profile/applications':
				this.props.onClaimList()
				break;

			default:
				break;
		}

	}

	hobbiesListConst = []
	activitiesListConst = []
	languagesListConst = []


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
		let id = this[`${name}ListConst`].indexOf(event.target.value)

		currentList[id] = event.target.value

		if (this.state[`${name}List`]) {
			let itemsList = this.state[`${name}List`]
			itemsList.splice(itemsList.indexOf(event.target.value), 1)
			this.setState({ [`${name}List`]: itemsList })
		}
		this.setState({ [name]: currentList })
	}

	handleListDelete = event => {
		let id = event.target.dataset.id
		let targetList = event.target.dataset.for

		let currentList = this.state[targetList]
		delete currentList[id]

		this.setState({ [targetList]: currentList })

		currentList = this.state[`${targetList}List`]
		currentList.splice(id, 0, this[`${targetList}ListConst`][id])

		this.setState({ [`${targetList}List`]: currentList })
	}

	onSubmit = (event) => {
		event.preventDefault()
		switch (this.props.location.pathname) {
			case '/profile/become-gid':

				let languages = [], hobbies = [], activities = []

				Object.keys(this.state.languages).forEach(id => languages.push({ name: this.state.languages[id], level: 0 }))
				Object.keys(this.state.hobbies).forEach(id => hobbies.push({ code: id }))
				Object.keys(this.state.activities).forEach(id => activities.push({ code: id }))

				this.props.onCreateGid(this.state.bio, this.state.keyphrase, languages, hobbies, activities, this.state.price)
				break;

			case '/profile/create-tour':
				let dateFrom = this.state.date_from.split('.')
				let dateTo = this.state.date_to.split('.')
				this.props.onCreateTour(this.state.name, this.state.location, this.state.description, this.state.route, this.state.transport, this.state.inclusion, this.state.price, dateFrom.length === 3 ? `${dateFrom[2]}-${dateFrom[1]}-${dateFrom[0]}` : '', dateTo.length === 3 ? `${dateTo[2]}-${dateTo[1]}-${dateTo[0]}` : '', this.state.meeting_details, this.state.slogan, this.state.expenses, this.state.extra_options, this.state.extra_info, this.state.max_tourists)

				break;

			default:
				break;
		}
	};

	handleValueChange = (name, value) => this.setState({ [name]: value })

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
							<button onClick={this.props.logout}><Link to='/login' >Выйти</Link></button>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-7">
					<Switch>
						{this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ date_to: '', date_from: '', name: '', location: '', description: '', route: '', transport: '', inclusion: '', price: '', meeting_details: '', slogan: '', expenses: '', extra_options: '', extra_info: '', max_tourists: '' }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
						<Route exact path='/profile/live/:uuid/:id' component={Chat} />
						<Route exact path='/profile/edit' render={() => edit(
							this.props.user
						)} />
						<Route exact path='/profile/applications' render={() => applications(
							this.props.claims,
							this.props.user.is_accepted
						)} />
						<Route exact path='/profile/tours' render={() => tours(
							this.props.user.tours
						)} />
						<Route exact path='/profile/become-gid' render={() =>
							this.props.user.is_suspended
								? <section className="jumbotron v-offset-small">
									<div className="content">
										<div className="v-offset-small text-center">
											<p className="bold">Вы не можете стать гидом.</p>
										</div>
										<div className="v-offset-small text-center">
											<p>Подтвердите свой почтовый адрес для возможности стать частью сообщества гидов.</p>
										</div>
										<div className="v-offset-small text-center">
											<p>Не пришло письмо? <button onClick={this.props.onActivate}>Повторить отправку</button></p>
										</div>
									</div>
								</section>
								: becomeGid(
									this.handleInputChange,
									this.hadleListChange,
									this.onSubmit,
									this.handleListDelete,
									this.state,
									this.props.user.profile === null ? false : this.props.user.profile,
									this.props.status
								)} />
						<Route exact path='/profile/create-tour' render={() =>
							this.props.user.is_accepted
								? newTour(
									this.handleInputChange,
									this.onSubmit,
									this.props.errors,
									this.props.status,
									this.handleValueChange,
									this.state
								)
								: <section className="jumbotron v-offset-small">
									<div className="content">
										<div className="v-offset-small text-center">
											<p className="bold">Вы не можете создать тур.</p>
										</div>
										<div className="v-offset-small text-center">
											{this.props.user.profile
												? <p>Ваша заявка находится на рассмотрении модераторами сервиса. Попробуйте позже</p>
												: <p>Заполните заявку для того, чтобы стать гидом. После подтверждения Вашей заявки администратором, Вы сможете создать свой первый тур</p>}
										</div>
										{this.props.user.profile
											? null
											: <div className="v-offset-mid row justify-center">
												<div className="col-lg-5">
													<Link to='become-gid'>
														<button className="lead">Стать гидом</button>
													</Link>
												</div>
											</div>}
									</div>
								</section>} />
						<Route path='/activate/' render={() => {
							this.handleActivate()
							return <Redirect to='/profile' />
						}} />
					</Switch>
				</div>
			</div>
			: <Switch>
				<Route path='/activate/' render={() => {
					this.handleActivate()
					return <Redirect to='/login' />
				}} />
				<Route render={() => <Redirect to='/login' />} />
			</Switch>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.profile,
	claims: state.claim.list,
	claim: state.claim.info,
	errors: getFiledErrors(state.profile),
	isAuthenticated: isAuthenticated(state),
	userId: userId(state),
	state: state,
	status: state.profile.status,
	resetStatus: () => resetStatus(state)
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchUser: id => dispatch(userInfo(id)),

	forceRefresh: () => {
		dispatch(forceRefresh())
	},

	onCreateGid: (bio, keyphrase, languages, hobbies, activities, price) => {
		dispatch(createGid(bio, keyphrase, languages, hobbies, activities, price))
	},

	onCreateTour: (name, location, description, route, transport, inclusion, price, date_from, date_to, meeting_details, slogan, expenses, extra_options, extra_info, max_tourists) => {
		dispatch(createTour(name, location, description, route, transport, inclusion, price, date_from, date_to, meeting_details, slogan, expenses, extra_options, extra_info, max_tourists))
	},

	onActivate: () => {
		dispatch(activate())
	},

	onActivateConfirm: (token, uidb64) => {
		dispatch(activateConfirm(token, uidb64))
	},

	onClaimList: () => {
		dispatch(getClaimList())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);