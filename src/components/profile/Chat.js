import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accessToken } from '../../reducers';

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
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

    onSubmit = (event) => {
        event.preventDefault()
        this.socket.send(this.state.message)
    }

    socket = null

    componentDidMount() {
        this.socket = new WebSocket(`wss://katadze.ru/ws/chat/${this.props.match.params.uuid}/?token=${this.props.token}`)
        this.socket.onclose = e => console.log(e)
        this.socket.onopen = () => alert('opened!')
        this.socket.onmessage = e => {
            
        }

    }
    render() {
        return (
            <div>
                <div className='row' style={{ borderBottom: '1px solid' }}>
                    <img src="" alt="" />
                    <p className="small">Имя Фамилия</p>
                </div>
                <div style={{ height: '50vh', overflowY: 'auto', borderBottom: '1px solid', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div>
                        <p className="small col-6">Сообщение раз</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: 'auto' }} className="small col-6 text-right">Сообщение два</p>
                    </div>
                    <div>
                        <p className="small col-6">Сообщение три</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmit} className="row">
                    <input onChange={this.handleInputChange} value={this.state.message} className='col-8' type="text" name='message' placeholder='Введите Ваше сообщение' />
                    <button className='col-4' style={{ border: 'none', marginTop: 0 }}><p className="small">Отправить</p></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: accessToken(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)