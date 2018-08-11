import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userId } from '../reducers/auth';



class Profile extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1>
						Hello,user {this.props.userId}
					</h1>
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	userId: userId(state)
});


export default connect(mapStateToProps, null)(Profile);