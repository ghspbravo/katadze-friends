import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PURGE } from 'redux-persist';

import applications from '../components/profile/applications'
import tours from '../components/profile/tours'
import becomeGid from '../components/profile/becomeGid'
import newTour from '../components/profile/newTour'

import { Route, Redirect } from 'react-router'
import { Switch, Link, NavLink } from 'react-router-dom'

import { isAuthenticated, userId, getFiledErrors, resetStatus } from '../reducers'
import { logout } from '../actions/auth'
import { userInfo, createGid, createTour, patchUserInfo, getUserPhotos, deleteUserPhoto, patchUserPhoto, postUserPhoto } from '../actions/profile'
import { activate, activateConfirm } from '../actions/registration';
import { forceRefresh, STATUS_SUCCESS } from '../actions'
import { getClaimList } from '../actions/claim';
import Chat from '../components/profile/Chat';
import Edit from '../components/profile/edit';
import Membership from '../components/profile/Membership';

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userChanged: true,

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

			avatar: '',

			cropX: '',
			cropY: '',
			cropWidth: '',
			cropHeight: '',

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
		if (this.state.userChanged) {
			this.props.fetchUser(this.props.userId)
			this.setState({ userChanged: false })
		}

		switch (this.props.location.pathname) {
			case '/profile/edit':
				this.props.onGetPhotos(this.props.userId)
				break;
			case '/profile/applications':
				this.props.onClaimList()
				break;

			default:
				break;
		}

	}

	handlePatchUserInfo = (event) => {
		event.preventDefault()
		let fields = event.target.querySelectorAll('input, select')
		let userInfo = {}
		fields.forEach(field => field.value
			? userInfo[field.id] = field.value
			: null)
		if (this.state.avatar) userInfo['avatar'] = this.state.avatar
		this.props.onPatchUserInfo(
			userInfo.locale,
			userInfo.currency,
			userInfo.date_birth,
			userInfo.gender,
			userInfo.last_name,
			userInfo.first_name,
			userInfo.residence,
			userInfo.phone,
			userInfo.avatar
		)
		this.setState({ userChanged: true })
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

	handleCrop = (x, y, width, height) => {
		this.setState({
			cropX: x,
			cropY: y,
			cropWidth: width,
			cropHeight: height
		})
	}

	handleFileLoad = (event) => {
		let file = event.target.files[0]
		let fr = new FileReader()
		fr.onloadend = info => {
			// document.querySelector('.avatar-container img').src = info.target.result
			this.setState({ avatar: info.target.result })
			this.props.onPostPhoto(info.target.result)
		}
		fr.readAsDataURL(file)
	}

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

	handlePatchPhoto = (id) => {
		let area = {}
		area['x'] = Math.round(this.state.cropX)
		area['y'] = Math.round(this.state.cropY)
		area['width'] = Math.round(this.state.cropWidth)
		area['height'] = Math.round(this.state.cropHeight)
		this.props.onPatchPhoto(id, area)
	}

	componentDidUpdate() {
		if (this.props.status === STATUS_SUCCESS) setTimeout(() => {
			this.setState({ date_to: '', date_from: '', name: '', location: '', description: '', route: '', transport: '', inclusion: '', price: '', meeting_details: '', slogan: '', expenses: '', extra_options: '', extra_info: '', max_tourists: '', });
			this.props.resetStatus();
			this.props.forceRefresh()
		}, 5000)
	}

	render() {
		return (this.props.isAuthenticated
			? <div className="row no-margin">
				<div className="offset-xl-2 offset-lg-1 col-lg-3 col-xl-2 no-select">
					<div className="sticky no-gutters profile-nav" style={window.innerWidth < 992 ? { textAlign: 'center' } : {}}>
						<div className=" col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/edit' >Редактировать профиль</NavLink>
						</div>
						<div className=" col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/partners' >Воспользоваться партнерской программой</NavLink>
						</div>
						<div className=" col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/events' >Участвовать в мероприятиях</NavLink>
						</div>
						<div className=" col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/events/contacts' >Дать обратную связь</NavLink>
						</div>
						{/* <div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/applications'  >Заявки</NavLink>
						</div> */}
						{/* <div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/tours' >Мои туры</NavLink>
						</div> */}
						{/* <div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/become-gid' >Стать гидом</NavLink>
						</div>
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink activeClassName='profile-current' to='/profile/create-tour' >Создать тур</NavLink>
						</div> */}
						{/* <div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<NavLink to='/profile/' >Членский статус</NavLink>
						</div> */}
						<div className="col-md-2 col-6 col-lg-12 v-offset-small">
							<button onClick={this.props.logout}><Link to='/login' >Выйти</Link></button>
						</div>
					</div>
				</div>
				<div style={{ marginTop: '20px' }} className="col-xl-6 col-lg-7">
					<Switch>
						<Route exact path='/profile/live/:uuid/:id' component={Chat} />
						<Route exact path='/profile/edit' render={() => <Edit
							user={this.props.user}
							editedFields={this.state}
							fileLoadHandler={this.handleFileLoad}
							cropHandler={this.handleCrop}
							patchHandler={this.handlePatchUserInfo}
							status={this.props.status}
							clearStatusHandler={this.props.resetStatus}
							errors={this.props.errors}
							deletePhotoHandler={this.props.onDeletePhoto}
							patchPhotoHandler={this.handlePatchPhoto}
						/>} />
						<Route exact path='/profile/applications' render={() => applications(
							this.props.claims,
							this.props.user.is_accepted,
							this.props.user.id
						)} />
						<Route exact path='/profile/tours' render={() => tours(
							this.props.user.tours
						)} />
						<Route exact path='/profile/become-gid' render={() =>
							becomeGid(
								this.handleInputChange,
								this.hadleListChange,
								this.onSubmit,
								this.handleListDelete,
								this.state,
								this.props.user.profile,
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
						<Route render={() => this.props.user.is_suspended
							? <section className="jumbotron v-offset-small">
								<div className="content">
									<div className="v-offset-small text-center">
										<p className="bold">Добро пожаловать в личный кабинет клуба Katadze!</p>
									</div>
									<div className="v-offset-small text-center">
										<p>Для того, чтобы пользоваться личным кабинетом, Вам необходимо подтвердить аккаунт. Инструкции по подтверждению должны прийти на почту, которую Вы указали при регистрации.</p>
									</div>
									<div className="v-offset-small text-center">
										<p>Не пришло письмо? <button onClick={this.props.onActivate}>Повторить отправку</button></p>
									</div>
								</div>
							</section>
							: <div>
								<p className="text-center">Добро пожаловать в личный кабинет клуба Katadze!</p>
								<Membership />
							</div>
						} />
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
	status: state.profile.status,
	resetStatus: () => resetStatus(state),
});

const mapDispatchToProps = dispatch => ({
	logout: () => {
		dispatch(logout())
		dispatch({
			type: PURGE,
			key: "polls",    // Whatever you chose for the "key" value when initialising redux-persist in the **persistCombineReducers** method - e.g. "root"
			result: () => null              // Func expected on the submitted action. 
		});
	},
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
	},

	onGetPhotos: (id) => {
		dispatch(getUserPhotos(id))
	},

	onDeletePhoto: id => {
		dispatch(deleteUserPhoto(id))
	},

	onPatchPhoto: (id, area) => {
		dispatch(patchUserPhoto(id, area))
	},

	onPostPhoto: (img) => {
		dispatch(postUserPhoto(img))
	},

	onPatchUserInfo: (
		locale,
		currency,
		date_birth,
		gender,
		last_name,
		first_name,
		username,
		residence,
		phone,
		avatar
	) => {
		dispatch(patchUserInfo(
			locale,
			currency,
			date_birth,
			gender,
			last_name,
			first_name,
			username,
			residence,
			phone,
			avatar
		))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);