import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMembershipStatus, purchaseSubscription, createSubscription, getSubscriptionTypes } from '../../actions/subscription';
import { getFiledErrors, resetStatus } from '../../reducers';

import loader from '../loader'

class Membership extends Component {
	constructor(props) {
		super(props)

		this.state = {
			subscriptionType: undefined,
			isProcessing: false,
		}
	}

	componentDidMount() {
		this.props.fetchMembershipStatus()
		this.props.fetchSubscriptionTypes()
	}

	purchaseSubscriptionHandler = (e) => {
		if (this.state.isProcessing) return 
		e.preventDefault()
		this.setState({
			isProcessing: true,
		})
		this.props.createSubscription()
		this.props.purchaseSubscription(this.state.subscriptionType)
		this.setState({
			isProcessing: false,
		})
	}
	componentDidUpdate() {
		if (this.props.purchaseRedirect) window.location.href = this.props.purchaseRedirect
	}

	showMembershipDate() {
		let membershipDateList = this.props.membership.match(/\d+-\d+-\d+/)[0].split('-')
		return `${membershipDateList[2]}.${membershipDateList[1]}.${membershipDateList[0]}`
	}

	handleRadioChange = (e) => {
		this.setState({
			subscriptionType: e.target.value
		})
	}

	render() {
		return (
			<div>
				{this.props.membership
					? <div className="row justify-center" style={{ marginTop: '50px' }}>
						<div className="subscription-card">
							<p className='subscription-card__message'>Ваша подписка действительна до {this.showMembershipDate()}</p>
						</div>
					</div>
					: <div className="row justify-center" style={{ marginTop: '50px' }}>
						<div className="subscription-card subscription-card_inactive">
							<p className="subscription-card__message upper small">Подписка не оплачена...
							<br />Станьте членом клуба KatadZe уже сегодня!</p>
							<form onSubmit={this.purchaseSubscriptionHandler}>
								{
									this.props.subscriptionTypes
									&& this.props.subscriptionTypes.map(type => <div key={type.id} className="row align-center">
										<input onChange={this.handleRadioChange} className='col-1' type="radio" name="subscriptionType" id={`type-${type.id}`} value={type.id} />
										<label className='col' htmlFor={`type-${type.id}`}>{`${type.name} – ${type.price.slice(0,-3)}`}</label>
									</div> )
								}
								{/* <div style={{
									width: '150px',
									height: '150px',
									borderRadius: '75px',
									backgroundColor: '#fc0',
									margin: '20px auto',
									position: 'relative',
								}}>
									<div style={{
										position: 'absolute',
										top: '5px',
										right: '-20px',
										backgroundColor: '#41bfef',
										fontFamily: 'BebasNeue',
										padding: '7px 15px 5px 15px',
										fontSize: '1.5rem',
										color: 'white',
										clipPath: 'polygon(0 0, 80% 2%, 100% 99%, 20% 100%)'
									}}>75% OFF</div>
									<div style={{
										fontSize: '5rem',
										fontFamily: 'BebasNeue',
										fontWeight: '900',
										paddingTop: '40px',
										textAlign: 'center',
										position: 'relative',
									}}>
										30
										<div style={{
											position: 'absolute',
											bottom: '-20px',
											left: '50%',
											transform: 'translateX(-50%)',
											fontSize: '2rem'
										}}>рублей</div>
									</div>
								</div> */}
								<p style={{marginTop: '15px'}} className="small upper">Подписка действительна в течение месяца с момента оформления</p>
								<div className="row justify-center">
									{this.state.isProcessing
										? loader()
										: <button
											className="subscription-card__button" disabled={typeof(this.state.subscriptionType) == undefined}>Оплатить подписку</button>
									}
								</div>
							</form>
						</div>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.profile,
	membership: state.subscription.expired_at,
	purchaseRedirect: state.subscription.form_url,
	errors: getFiledErrors(state.subscription),
	status: state.subscription.status,
	resetStatus: () => resetStatus(state),
	subscriptionTypes: state.subscription.types
});

const mapDispatchToProps = dispatch => ({
	createSubscription: () => dispatch(createSubscription()),
	fetchMembershipStatus: () => dispatch(getMembershipStatus()),
	fetchSubscriptionTypes: () => dispatch(getSubscriptionTypes()),
	purchaseSubscription: (subscription_type) => dispatch(purchaseSubscription(subscription_type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Membership);