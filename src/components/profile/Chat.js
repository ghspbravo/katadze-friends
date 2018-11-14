import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accessToken, userId } from '../../reducers';
import { getHistoryMessages, getColocutorInfo } from '../../actions/live';

import { Link } from "react-router-dom";
import { postComment, getUserComments } from '../../actions/gids';

import stars from '../gids/Stars'
import { STATUS_SUCCESS } from '../../actions';

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messages: [],
            scrollFix: true,
            newPage: false,
            fetching: false,

            isTourFinished: false,

            commentContent: '',
            rate: 1
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
        if (!this.state.isTourFinished) {
            this.setState({ fetching: true })
            setTimeout(() => {
                if (this.props.history && this.props.history.results && this.state.messages.length === 0) {
                    let historyMessages = []
                    this.props.history.results.forEach(message => historyMessages.push({
                        text: message.content,
                        isMy: message.author != this.props.match.params.id ? true : false,
                        time: message.created_at.match(/\d+:\d+/)[0]
                    }))

                    this.setState({ messages: [...historyMessages.reverse(), ...this.state.messages], fetching: false })
                }
                if (this.state.newPage) {
                    let historyMessages = []
                    this.props.history.results.forEach(message => historyMessages.push({
                        text: message.content,
                        isMy: message.author != this.props.match.params.id ? true : false,
                        time: message.created_at.match(/\d+:\d+/)[0]
                    }))
                    this.setState({ messages: [...historyMessages.reverse(), ...this.state.messages], newPage: false, fetching: false })
                }
                if (this.state.scrollFix && document.querySelector('#chatWrapper') && document.querySelector('#chatWrapper').scrollHeight > window.innerHeight * 0.5) {
                    document.querySelector('#chatWrapper').scrollTop = document.querySelector('#chatWrapper').scrollHeight
                    this.setState({ scrollFix: false })
                }
            }, 2000)
        }
    }

    componentDidMount() {
        this.props.getColocutor(this.props.match.params.id)
        if (!this.state.isTourFinished) {
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
        } else {
            this.props.getUserComments(this.props.userId)
        }
    }

    scrollMessagesHandler = () => {
        if (document.querySelector('#chatWrapper').scrollTop === 0 && this.props.history.next !== null) {
            this.props.getHistory(this.props.match.params.uuid, this.props.history.next)
            this.setState({ newPage: true })
        }
    }

    postCommentHandler = (e) => {
        e.preventDefault()
        this.props.onPostComment(this.props.colocutor.id, this.state.commentContent, this.state.rate)
    }

    componentWillUnmount() {
        this.socket && this.socket.close()
    }
    render() {
        return this.state.isTourFinished
            ? (
                <div>
                    {this.props.comments && this.props.colocutor &&
                        this.props.comments
                            .filter(comment => comment.guide.id === this.props.colocutor.id)
                            .length > 0
                        ? <div>
                            <p>Вы уже оставляли отзыв данному гиду</p>
                        </div>
                        : <div>{this.props.commentStatus === STATUS_SUCCESS
                            ? <p>Ваш отзыв успешно отправлен! Спасибо</p>
                            : <form onSubmit={this.postCommentHandler} action="POST">
                                <textarea
                                    name="comment"
                                    id="comment"
                                    cols="10"
                                    rows="3"
                                    placeholder="Напишите все, что думаете"
                                    value={this.state.commentContent}
                                    onChange={e => this.setState({ commentContent: e.target.value })}
                                />
                                {stars(this.state.rate, (e) => this.setState({
                                    rate: e.target.dataset.rating
                                }))}
                                <button ><p className="small text-right">Отправить</p></button>
                            </form>}
                        </div>}
                </div>
            )
            : (
                <div>
                    {this.props.colocutor && this.props.colocutor.first_name
                        ? <Link to={`/guide/id=${this.props.colocutor.id}`} className='row align-center' style={{ paddingBottom: '15px', cursor: 'pointer', borderBottom: '1px solid' }}>
                            <img style={{ objectFit: 'cover', marginRight: '10px', width: '55px', height: '55px', borderRadius: '50%' }} src={this.props.colocutor.avatar} alt="" />
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
                                    <img style={{ objectFit: 'cover', marginRight: '10px', width: '55px', height: '55px', borderRadius: '50%' }} src={this.props.colocutor && this.props.colocutor.avatar} alt="" />
                                </Link>
                                <p className="small col-6">{message.text}
                                    <span style={{ fontSize: '10px', color: 'black', marginLeft: '20px' }}>{message.time}</span></p>

                            </div>)}
                    </div>
                    <form autoComplete="off" onSubmit={this.onSubmit} className="row">
                        <input autoComplete="off" onChange={this.handleInputChange} value={this.state.message} className='col-8' type="text" name='message' placeholder='Введите Ваше сообщение' />
                        <button id='sendMessage' disabled className='col-4' style={{ border: 'none', marginTop: 0 }}><p className="small text-right">Отправить</p></button>
                    </form>
                    {this.state.isTourFinished
                        ? null
                        : <button onClick={() => {
                            this.setState({
                                isTourFinished: true
                            })
                        }} className="lead">Оставить отзыв</button>}
                </div>
            )
    }
}

const mapStateToProps = state => ({
    token: accessToken(state),
    colocutor: state.live.colocutor,
    history: { results: state.live.history, next: state.live.next },
    status: state.live.status,

    userId: userId(state),

    commentStatus: state.gids.status,
    comments: state.gids.comments,
});

const mapDispatchToProps = (dispatch) => ({
    getHistory: (uuid, page = 0) => {
        dispatch(getHistoryMessages(uuid, page))
    },
    getColocutor: (id) => {
        dispatch(getColocutorInfo(id))
    },
    onPostComment: (gidId, comment, rate) => {
        dispatch(postComment(gidId, comment, rate))
    },
    getUserComments: (id) => {
        dispatch(getUserComments(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)