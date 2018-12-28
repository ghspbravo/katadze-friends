import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMembershipStatus, purchaseSubscription } from '../../actions/subscription';
import { getFiledErrors, resetStatus } from '../../reducers';

class Membership extends Component {
	constructor(props) {
		super(props)

		this.state = {
			subscriptionType: 1,
		}
	}

	componentDidMount() {
		this.props.fetchMembershipStatus()
	}

	purchaseSubscriptionHandler = (e) => {
		e.preventDefault()
		this.props.purchaseSubscription(this.state.subscriptionType)
	}
	componentDidUpdate() {
		if (this.props.purchaseRedirect) window.location.href = this.props.purchaseRedirect
	}

	render() {
		return (
			<div>
				{this.props.membership
					? <p>Ваша подписка действительна до {this.props.membership}</p>
					: <div class="row justify-center" style={{ marginTop: '50px' }}>
						<div className="subscription-card">
							<p className="subscription-card__message">Подписка не оплачена...
							<br />Станьте членом клуба KatadZe уже сегодня!</p>
							<form onSubmit={this.purchaseSubscriptionHandler}>
								<div className="row align-center">
									<input checked className='col-1' type="radio" name="subscriptionType" id="type-1" value={1} />
									<label className='col' htmlFor="type-1">Годовая подписка - 1000 рублей</label>
								</div>
								<div className="row align-center">
									<input disabled className='col-1' type="radio" name="subscriptionType" id="type-2" value={2} />
									<label className='col' htmlFor="type-2">Пока недоступная подписка</label>
								</div>
								<div className="row align-center">
									<input disabled className='col-1' type="radio" name="subscriptionType" id="type-3" value={3} />
									<label className='col' htmlFor="type-3">Пока недоступная подписка</label>
								</div>
								<div class="row justify-center">
									<button
										className="subscription-card__button">Оплатить подписку</button>
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
});

const mapDispatchToProps = dispatch => ({
	fetchMembershipStatus: () => dispatch(getMembershipStatus()),
	purchaseSubscription: (subscription_type) => dispatch(purchaseSubscription(subscription_type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Membership);