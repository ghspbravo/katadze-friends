import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authErrors, isAuthenticated } from '../reducers'
import { login } from '../actions/auth'
import { Redirect } from 'react-router'



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
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
        this.props.onSubmit(this.state.username, this.state.password)
    };

    render() {
        return (
            this.props.isAuthenticated
                ? <Redirect to='/Profile' />
                : <div>
                    <div className="row">
                        <form className='offset-4 col-4' action="POST" autoComplete="off" onSubmit={this.onSubmit}>
                            <input name="username" autoComplete="login" type='text' placeholder='username' onChange={this.handleInputChange} />
                            <input name="password" autoComplete="password" type="password" placeholder='password' onChange={this.handleInputChange} />
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                    <div className="container">
                        <button onClick={() => console.log(this.props)}><h1>Show props</h1></button>
                    </div>
                </div>
        )
    }
}


const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        dispatch(login(username, password))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);