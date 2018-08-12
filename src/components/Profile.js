import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from '../reducers'
import { Redirect } from 'react-router'

class Profile extends Component {
	render() {
		return (
			this.props.isAuthenticated
				? <div>
					<div className="container">
						<h1>
							Hello,user
					</h1>
					</div>
				</div>
				: <Redirect to='/login' />
		)
	}
}


const mapStateToProps = (state) => ({
	isAuthenticated: isAuthenticated(state)
});


export default connect(mapStateToProps, null)(Profile);