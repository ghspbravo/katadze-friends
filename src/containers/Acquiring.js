import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Switch,
} from 'react-router'
import { acquiringStatusUpdate } from '../actions/commerce';

class Acquiring extends Component {

    statusList = [
        'Заказ зарегистрирован в банке, но не оплачен',
        'сумма удержана',
        'заказ полностью авторизован',
        'авторизация отменена',
        'проведена операция возврата',
        'авторизация инициирована через сервер банка-эмитента',
        'авторизация отклонена'
    ]

    componentDidMount() {
        this.props.onStatusRequest(this.props.match.params.uuid)
    }

    render() {
        return (
            <div className="container">
                {console.log(this.props.details)}
                <h1>Ваш заказ {typeof this.props.details === 'undefined' ? 'обрабатывается' : 'обработан'}!</h1>
                <p>{typeof this.props.details === 'undefined' ? null : this.statusList[this.props.details]}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.commerce
});

const mapDispatchToProps = dispatch => ({
    onStatusRequest: () => dispatch(acquiringStatusUpdate)
})

export default connect(mapStateToProps, mapDispatchToProps)(Acquiring)
