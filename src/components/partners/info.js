import React, { Component } from 'react'
import Parser from 'html-react-parser'
import loader from '../loader';
import { isAuthenticated } from '../../reducers';
import { getCouponsList, activateCoupon } from '../../actions/coupons';
import { getMembershipStatus } from '../../actions/subscription';
import { connect } from 'react-redux'


class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isMember: false,
        }
    }

    showPartnerControls = (partnerId) => {
        let coupon = this.props.coupons.filter(coupon => coupon.partner === partnerId)[0]

        if (coupon) {
            if (coupon.expired_at && coupon.expired_at > new Date()) {
                let couponDateList = coupon.expired_at.match(/\d+-\d+-\d+/)[0].split('-')
                let couponDate = `${couponDateList[2]}.${couponDateList[1]}.${couponDateList[0]}`

                return <div className="coupon-control">
                    <button
                        disabled
                        className='coupon-control__button coupon-control__button_activated'>Активировано</button>
                    <p className="coupon-control__expire-date">истекает {couponDate}</p>
                </div>
            } else return <div className="coupon-control">
                <button
                    onClick={() => this.handleActivatePartner(partnerId)}
                    className='coupon-control__button'>Активировать</button>
            </div>
        }
    }

    handleActivatePartner = async (partnerId) => {
        await this.props.activateCoupon(partnerId)
        this.props.fetchCouponsList()
    }

    async componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.membership
            ? null
            : await this.props.fetchMembershipStatus()
            if (this.props.membership) {
                this.props.fetchCouponsList()
            }
        }
    }

    render() {
        if (this.props.partner)
            return (
                <div className="container">
                    <h2 className="text-center">{this.props.partner.title}</h2>
                    <h1 className="text-center"><span>{this.props.partner.category.name}</span></h1>
                    <img className="col-12" src={this.props.partner.img} alt="partnerImg" />
                    <section>
                        <div class="row justify-center">
                            {this.props.coupons
                                ? this.showPartnerControls(this.props.partner.id)
                                : null
                            }
                        </div>
                    </section>
                    <section>
                        <h1 className="bold">Описание</h1>
                        <div className="custom_text v-offset-small justify-text">{Parser(this.props.partner.content)}</div>
                    </section>
                    {this.props.partner.services.length > 0
                        ? <section>
                            <h1 className="bold">Услуги</h1>
                            <ol className="col-12" type="1">
                                {
                                    this.props.partner.services.forEach(service => <li className="v-offset-small">{service}</li>)
                                }
                            </ol>
                        </section>
                        : null}
                    {this.props.partner.conditions
                        ? <section>
                            <h1 className="bold">Условия</h1>
                            <div className="custom_text justify-text v-offset-small">{Parser(this.props.partner.conditions)}</div>
                        </section>
                        : null}
                    {this.props.partner.schedule
                        ? <section>
                            <h1 className="bold">Расписание</h1>
                            <div className="custom_text v-offset-small">{Parser(this.props.partner.schedule)}</div>
                            <ul className="row week v-offset-mid col-12 justify-center">
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('1') ? 'lightgreen' : 'lightcoral' }}>ПН</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('2') ? 'lightgreen' : 'lightcoral' }}>ВТ</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('3') ? 'lightgreen' : 'lightcoral' }}>СР</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('4') ? 'lightgreen' : 'lightcoral' }}>ЧТ</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('5') ? 'lightgreen' : 'lightcoral' }}>ПТ</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('6') ? 'lightgreen' : 'lightcoral' }}>СБ</li>
                                <li style={{ backgroundColor: this.props.partner.schedule_weekdays.split(',').includes('7') ? 'lightgreen' : 'lightcoral' }}>ВС</li>
                            </ul>
                        </section>
                        : null}
                </div>
            )
        else return (
            <div>
                {loader()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    coupons: state.coupons.list,
    isAuthenticated: isAuthenticated(state),
    membership: state.subscription.expired_at,
});

const mapDispatchToProps = dispatch => ({
    fetchCouponsList: () => dispatch(getCouponsList()),
    activateCoupon: couponId => dispatch(activateCoupon(couponId)),
    fetchMembershipStatus: () => dispatch(getMembershipStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Info)
