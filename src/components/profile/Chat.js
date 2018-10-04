import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accessToken } from '../../reducers';
import { getHistoryMessages, getColocutorInfo } from '../../actions/live';

import { Link } from "react-router-dom";

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messages: [],
            scrollFix: true,
            newPage: false,
            fetching: false,
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
        this.socket.send(JSON.stringify({ message: this.state.message }))
    }

    socket = null

    componentWillReceiveProps() {
        this.setState({ fetching: true })
        setTimeout(() => {
            if (this.props.history && this.props.history.results && this.state.messages.length === 0) {
                let historyMessages = []
                this.props.history.results.forEach(message => historyMessages.push({
                    text: message.content,
                    isMy: message.author != this.props.match.params.id ? true : false,
                    time: message.created_at.match(/\d+:\d+/)[0]
                }))

                this.setState({ messages: historyMessages.reverse(), fetching: false })
            }
            if (this.state.newPage) {
                let historyMessages = []
                this.props.history.results.forEach(message => historyMessages.push({
                    text: message.content,
                    isMy: message.author != this.props.match.params.id ? true : false,
                    time: message.created_at.match(/\d+:\d+/)[0]
                }))
                this.setState({ messages: historyMessages.reverse(), newPage: false, fetching: false })
            }
            if (this.state.scrollFix && document.querySelector('#chatWrapper').scrollHeight > window.innerHeight * 0.5) {
                document.querySelector('#chatWrapper').scrollTop = document.querySelector('#chatWrapper').scrollHeight
                this.setState({ scrollFix: false })
            }
        }, 2000)
    }

    componentDidMount() {
        this.props.getColocutor(this.props.match.params.id)
        this.props.getHistory(this.props.match.params.uuid)

        this.socket = new WebSocket(`wss://katadze.ru/ws/chat/${this.props.match.params.uuid}/?token=${this.props.token}`)
        this.socket.onclose = e => console.log(e)
        this.socket.onopen = () => document.querySelector('#sendMessage').disabled = false
        this.socket.onmessage = e => {
            let currentDate = new Date()
            let messageTime = `${currentDate.getHours().length < 2 ? 0 + currentDate.getHours() : currentDate.getHours()}:${currentDate.getMinutes().length < 2 ? 0 + currentDate.getMinutes() : currentDate.getMinutes()}`
            let incomeMessage = JSON.parse(e.data).message

            this.setState(prevState => ({
                messages: [...prevState.messages, {
                    text: incomeMessage,
                    isMy: incomeMessage === this.state.message ? true : false,
                    time: messageTime,
                }],
                message: ''
            }))
            document.querySelector('#chatWrapper').scrollTop = document.querySelector('#chatWrapper').scrollHeight
        }
    }

    scrollMessagesHandler = () => {
        if (document.querySelector('#chatWrapper').scrollTop === 0 && this.props.history.next !== null) {
            this.props.getHistory(this.props.match.params.uuid, this.props.history.next)
            this.setState({ newPage: true })
        }
    }

    componentWillUnmount() {
        this.socket.close()
    }
    render() {
        return (
            <div>
                {this.props.colocutor && this.props.colocutor.first_name
                    ? <Link to={`/guide/id=${this.props.colocutor.id}`} className='row align-center' style={{ paddingBottom: '15px', cursor: 'pointer', borderBottom: '1px solid' }}>
                        <img style={{ objectFit: 'cover', marginRight: '10px', width: '55px', height: '55px', borderRadius: '50%' }} src={this.props.colocutor.img_photo} alt="" />
                        <p className="small">{this.props.colocutor.first_name} {this.props.colocutor.last_name}</p>
                    </Link>
                    : <div className='row align-center' style={{ paddingBottom: '15px', cursor: 'pointer', borderBottom: '1px solid' }}>
                        <img style={{ marginRight: '10px', width: '55px', height: '55px', borderRadius: '50%' }} src='' alt="" />
                        <p className="small">Имя Фамилия</p>
                    </div>}
                <div id='chatWrapper' onScroll={() => this.scrollMessagesHandler()} style={{ height: '50vh', overflowY: 'auto', borderBottom: '1px solid' }}>
                    {!this.state.fetching
                        ? null
                        : <p className='small'>Loading...</p>}
                    {this.state.messages.map((message, i) => message.isMy
                        ? <div key={i} style={{ margin: '10px 0' }}>
                            <p style={{ marginLeft: 'auto' }} className="small col-6 text-right">
                                <span style={{ fontSize: '10px', color: 'black', marginRight: '20px', userSelect: 'none' }}>{message.time}</span> {message.text}</p>
                        </div>
                        : <div key={i} className='row align-center' style={{ margin: '10px 0' }}>
                            <Link to={`/guide/id=${this.props.match.params.id}`}>
                                <img style={{ objectFit: 'cover', marginRight: '10px', width: '55px', height: '55px', borderRadius: '50%' }} src={this.props.colocutor && this.props.colocutor.img_photo} alt="" />
                            </Link>
                            <p className="small col-6">{message.text}
                                <span style={{ fontSize: '10px', color: 'black', marginLeft: '20px' }}>{message.time}</span></p>

                        </div>)}
                </div>
                <form autoComplete="off" onSubmit={this.onSubmit} className="row">
                    <input autoComplete="off" onChange={this.handleInputChange} value={this.state.message} className='col-8' type="text" name='message' placeholder='Введите Ваше сообщение' />
                    <button id='sendMessage' disabled className='col-4' style={{ border: 'none', marginTop: 0 }}><p className="small text-right">Отправить</p></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: accessToken(state),
    colocutor: state.live.colocutor,
    history: { results: state.live.history, next: state.live.next },
    status: state.live.status
});

const mapDispatchToProps = (dispatch) => ({
    getHistory: (uuid, page = 0) => {
        dispatch(getHistoryMessages(uuid, page))
    },
    getColocutor: (id) => {
        dispatch(getColocutorInfo(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)