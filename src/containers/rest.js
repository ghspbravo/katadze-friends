import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

import { isAuthenticated } from '../reducers'


import React, { Component } from 'react'

class rest extends Component {
    render() {
        return (
            <div>
                <h1>RESTING</h1>
                {/* <Route render={props => props.isAuthenticated
                    ? <button onClick={() => console.log(this.props)}>showprops</button>
                    :  <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                      }}/>
                }/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps, null)(rest);