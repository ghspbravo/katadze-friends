import React, { Component } from 'react'
import { connect } from 'react-redux'

import { list } from '../../actions/partner'

import { getFiledErrors, resetStatus, isAuthenticated } from '../../reducers';
import { becomePartnerRequest } from '../../actions/ticket';
import { forceRefresh, STATUS_SUCCESS } from '../../actions';

import becomePartner from './becomePartner'
import { Link } from 'react-router-dom'

import instructionImage from './howTo.png'
import { getCouponsList, activateCoupon } from '../../actions/coupons';
import { getMembershipStatus } from '../../actions/subscription';

class Partners extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showPartnerForm: false,
			title: '',
			name: '',
			email: '',
			question: '',
			organization: '',
			comment: '',

			isMember: false,
		}
	}

	async componentDidMount() {
		if (!(this.props.partners && this.props.partners[0])) this.props.fetchPartnerList()
		if (this.props.isAuthenticated) {
			this.props.membership
			? null
			: await this.props.fetchMembershipStatus()

			if (!(this.props.coupons && this.props.coupons[0]) && this.props.membership) this.props.fetchCouponsList()
		}
	}

	handleActivatePartner = async (partnerId) => {
		await this.props.activateCoupon(partnerId)
		this.props.fetchCouponsList()
	}

	showPartnerControls = (partnerId) => {
		let coupon = this.props.coupons.filter(coupon => coupon.partner === partnerId)[0]

		if (coupon) {
			if (coupon.expired_at && new Date(Date.parse(coupon.expired_at) + new Date().getTimezoneOffset() * 60000) > new Date()) {
				let couponDateList = coupon.expired_at.match(/\d+-\d+-\d+/)[0].split('-')
				let couponTimeList = coupon.expired_at.match(/\d+:\d+:\d+/)[0].split(':')
				let couponDate = `${couponDateList[2]}.${couponDateList[1]}.${couponDateList[0]}`
				let couponTime = `${couponTimeList[0]}:${couponTimeList[1]}`

				return <div className="coupon-control">
					<button
						disabled
						className='coupon-control__button coupon-control__button_activated'>Активировано</button>
					<p className="coupon-control__expire-date">истекает {couponDate} {couponTime}</p>
				</div>
			} else return <div className="coupon-control">
				<button
					onClick={() => this.handleActivatePartner(partnerId)}
					className='coupon-control__button'>Активировать</button>
			</div>
		}
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

	handleBecomePartner = (event) => {
		event.preventDefault()
		this.props.onBecomePartner(this.state.organization, this.state.name, this.state.email, this.state.comment)
	}

	showPartnerFormHandler = () => this.setState({ showPartnerForm: true })

	render() {
		return (
			<div>
				{this.props.status === STATUS_SUCCESS ? setTimeout(() => { this.setState({ name: '', title: '', question: '', email: '', organization: '', comment: '', showPartnerForm: false }); this.props.resetStatus(); this.props.forceRefresh() }, 3000) : null}
				<section id="partners-header" className="vh-100 col-12 text-center">
					<h2>Katadze.Friends</h2>
					<p style={{textTransform: 'uppercase'}}>Дружба – это продуктивно.
						<br/>ПОЛУЧАЙ СКИДКИ ОТ ПАРТНЕРОВ KATADZE
					</p>
				</section>
				<div className="container justify-center" style={{marginTop: '50px', marginBottom: '50px'}}>
					{this.state.showPartnerForm
						? becomePartner(this.handleInputChange, this.handleBecomePartner, this.props.errors, this.props.status, this.state)
						: <button onClick={() => this.showPartnerFormHandler()}><h1 className="upper underline"><span>Стать партнером KATADZE</span></h1></button>
					}
				</div>
				<div className="container justify-center">
					<div>
						<img style={{
							height: 'auto',
							width: '100%',
							objectFit: 'contain',
						}} src={instructionImage} alt="instructions" />
					</div>
				</div>
				<section className="container">
					<p className="membership-alert" to='/profile'>Доступно участникам клуба KATADZE<span className="note">*</span></p>
					<p className="membership-note small" style={{marginBottom: '50px', textTransform: 'uppercase'}}>*приобрести подписку KATADZE можно в <Link className="link small" to='/profile'>
						личном кабинете
					</Link></p>
					{
						this.props.partners
							? this.props.partners.map(category =>
								<div key={category.id} className="row">
									<div className="category-name col-12">
										<p className="small">{category.name}</p>
									</div>
									{
										category.partners.map(partner =>
											<div key={partner.id} className="row list-card">
												<div style={{
													padding: '0 25px'
												}} className="col-lg-6 partner-item order-fix">
													<h1>{partner.title}</h1>
													<p className="secondary partner-item__description">{partner.description}</p>
													<p className="secondary small v-offset-small partner-item__tags">{partner.tags}</p>
													<div style={{ marginTop: '50px', alignItems: 'start' }} className="row justify-space-between no-gutters">
														<button className="more-button"><Link to={`/partners/id=${partner.id}`} style={{lineHeight: 1}}>Подробнее</Link></button>
														{this.props.coupons
															? this.showPartnerControls(partner.id)
															: null
														}
													</div>
												</div>
												<div className="col-lg-6 justify-center align-center">
													<img className="list-card-pic" style={{ width: '100%' }} src={partner.img} alt="project-pic" />
												</div>
											</div>
										)
									}
								</div>
							)
							: <h1>Loading, please wait...</h1>
					}
				</section>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	coupons: state.coupons.list,
	partners: state.partner.list,
	status: state.ticket.status,
	errors: getFiledErrors(state.ticket),
	resetStatus: () => resetStatus(state),
	isAuthenticated: isAuthenticated(state),
	membership: state.subscription.expired_at,
});

const mapDispatchToProps = dispatch => ({
	fetchCouponsList: () => dispatch(getCouponsList()),
	activateCoupon: couponId => dispatch(activateCoupon(couponId)),
	fetchPartnerList: page => dispatch(list(page)),
	fetchMembershipStatus: () => dispatch(getMembershipStatus()),
	onBecomePartner: (organization, name, email, comment) => dispatch(becomePartnerRequest(organization, name, email, comment)),

	forceRefresh: () => {
		dispatch(forceRefresh())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Partners)