import React, { Component } from 'react'
import { connect } from 'react-redux'
import { acquiringStatusUpdate } from '../actions/commerce';

class Acquiring extends Component {
    constructor(props) {
        super(props)

        let uuid = this.props.location.search
        uuid = uuid.replace('?orderId=', '')
        uuid = uuid.replace('&lang=ru', '')

        this.state = {
            uuid: uuid
        }
    }


    statusList = [
        'Заказ зарегистрирован в банке, но не оплачен',
        'Сумма удержана',
        'Заказ полностью авторизован',
        'Авторизация отменена',
        'Проведена операция возврата',
        'Авторизация инициирована через сервер банка-эмитента',
        'Авторизация отклонена'
    ]

    componentDidMount() {
        setTimeout(() => this.props.onStatusRequest(this.state.uuid), 2000)
    }

    render() {
        return (
            <div className="container">
                <h1>Ваш заказ {Object.keys(this.props.details).length === 0 ? 'обрабатывается' : 'обработан'}!</h1>
                <p>{this.props.details && this.props.details.status ? this.statusList[this.props.details.status] : null}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.commerce,
});

const mapDispatchToProps = dispatch => ({
    onStatusRequest: (id) => dispatch(acquiringStatusUpdate(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Acquiring)
