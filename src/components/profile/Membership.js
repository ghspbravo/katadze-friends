import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMembershipStatus, purchaseSubscription, createSubscription, getSubscriptionTypes } from '../../actions/subscription';
import { getFiledErrors, resetStatus } from '../../reducers';
import Parser from 'html-react-parser';

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
					: <div style={{ marginTop: '50px' }}>
						<p className="small text-center">Станьте членом клуба KatadZe уже сегодня!</p>

						{ this.state.isProcessing
							? loader()
							: <div className="row" style={{marginTop: '30px'}}>
							{
								this.props.subscriptionTypes
								&& this.props.subscriptionTypes.map(type => <div key={type.id} className="col-lg-6 col-12">
									<div style={{
									boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
									marginBottom: '30px',
									cursor: 'pointer',
									}} onClick={(e) => {
										this.setState({
											subscriptionType: type.id
										})
										this.purchaseSubscriptionHandler(e)
										}}>
										<div style={{
											height: '250px',
											backgroundImage: `url(${type.img})`,
											backgroundSize: 'cover',
										}}></div>
										<div style={{
											padding: '20px 30px',
											backgroundColor: 'white',
										}}>
											<p style={{
												fontSize: '14px',
												textTransform: 'uppercase',
												fontWeight: 700,
												lineHeight: 1,
											}}>{type.name}</p>
											<div style={{marginTop: '20px', fontSize: '14px', lineHeight: 1.2, color: '#B4B4B4'}}>
												{type.description && Parser(type.description)}
											</div>

											<div style={{
												marginTop: '30px',
												textAlign: 'right',
											}}>
												<button style={{
													padding: '10px 20px',
													backgroundColor: '#E0DEDE',
													color: 'white',
													borderRadius: '10px',
													marginRight: '15px'
												}} disabled="disabled">{type.btn_text}</button>
												<button style={{
													padding: '10px 20px',
													color: 'white',
													borderRadius: '10px',
													background: 'linear-gradient(180deg, #6F9BCF 0%, #66D2EA 100%)',
												}}>{`${type.price.slice(0, -3)} руб`}</button>
											</div>

											<hr style={{margin: '15px -30px'}}/>
											<p className="text-center" style={{fontSize: '12px',
											textTransform: 'uppercase',
											lineHeight: 1,
											}}>приобрести подписку</p>
										</div>
									</div>
								</div>)
							}

						</div>
						}
						{/* <div className="subscription-card subscription-card_inactive">
							<p className="subscription-card__message upper small">Подписка не оплачена...
							<br />Станьте членом клуба KatadZe уже сегодня!</p>
							<form onSubmit={this.purchaseSubscriptionHandler}>
								{
									this.props.subscriptionTypes
									&& this.props.subscriptionTypes.map(type => <div key={type.id} className="row align-center">
										<input onChange={this.handleRadioChange} className='col-1' type="radio" name="subscriptionType" id={`type-${type.id}`} value={type.id} />
										<label className='col' htmlFor={`type-${type.id}`}>{`${type.name} – ${type.price.slice(0, -3)}`}</label>
									</div>)
								}
								<p style={{ marginTop: '15px' }} className="small upper">Подписка действительна в течение месяца с момента оформления</p>
								<div className="row justify-center">
									{this.state.isProcessing
										? loader()
										: <button
											className="subscription-card__button" disabled={typeof (this.state.subscriptionType) == undefined}>Оплатить подписку</button>
									}
								</div>
							</form>
						</div> */}
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