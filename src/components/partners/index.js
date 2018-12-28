import React, { Component } from 'react'
import { connect } from 'react-redux'

import { list } from '../../actions/partner'

import { getFiledErrors, resetStatus, isAuthenticated } from '../../reducers';
import { becomePartnerRequest } from '../../actions/ticket';
import { forceRefresh, STATUS_SUCCESS } from '../../actions';

import becomePartner from './becomePartner'
import { Link } from 'react-router-dom'

import instructionImage from './howTo.jpg'
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

	componentDidMount() {
		if (!(this.props.partners && this.props.partners[0])) this.props.fetchPartnerList()
		
		if (this.props.isAuthenticated && this.props.membership) {
            this.setState(() => ({ isMember: true }))
		} if (!(this.props.coupons && this.props.coupons[0])) this.props.fetchCouponsList()
	}
	componentDidUpdate() {
        if (!this.state.isMember && this.props.isAuthenticated && this.props.membership) {
            this.setState(() => ({ isMember: true }))
        }
    }

	handleActivatePartner = async (partnerId) => {
		await this.props.activateCoupon(partnerId)
		this.props.fetchCouponsList()
	}

	showPartnerControls = (partnerId) => {
		let coupon = this.props.coupons.filter(coupon => coupon.partner === partnerId)

		if (coupon.length) return coupon.expired_at
			? <div className="coupon-control">
				<button
					disabled
					className='coupon-control__button_activated'>Активировано</button>
					<p className="coupon-control__expire-date">Истекает {coupon.expired_at}</p>
			</div>
			: <div className="coupon-control">
				<button
					onClick={() => this.handleActivatePartner(partnerId)}
					className='coupon-control__button'>Активировать</button>
			</div>
		return null
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
					<h2>Друзья.Katadze</h2>
					<p>Дружба – это продуктивно.</p>
				</section>
				<section className="container justify-center">
					{this.state.showPartnerForm
						? becomePartner(this.handleInputChange, this.handleBecomePartner, this.props.errors, this.props.status, this.state)
						: <button onClick={() => this.showPartnerFormHandler()}><h1 className="upper underline"><span>Стать партнером KATADZE</span></h1></button>
					}
				</section>
				<section className="container justify-center">
					<div className="col-12">
						<img style={{
							height: 'auto',
							width: '100%',
							objectFit: 'contain',
						}} src={instructionImage} alt="instructions" />
					</div>
				</section>
				<section className="container">
					<p style={{
						fontSize: '2rem',
						color: '#fb0',
					}}>Доступно членам клуба KATADZE*</p>
					<p className="small" style={{
						marginBottom: '50px'
					}}>*приобрести подписку KATADZE можно в личном кабинете</p>
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
												}} className="col-lg-6 order-fix">
													<h1>{partner.title}</h1>
													<p className="secondary">{partner.description}</p>
													<p className="secondary small v-offset-small">{partner.tags}</p>
													<div style={{ marginTop: '50px' }} className="row justify-space-between align-center no-gutters">
														<button className="more-button"><Link to={`/partners/id=${partner.id}`}>Подробнее</Link></button>
														{this.props.coupons && this.state.isMember
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