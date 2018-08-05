import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPartner } from '../actions/index'

import partners from '../fakeServer/Partners'


export class PartnerInfo extends Component {

    componentDidMount() {
        let partnerId = this.props.match.params.id
        this.props.fetchPartner(partners.results[partnerId-1])
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">{this.props.title}</h2>
                <h1 className="text-center"><span>{this.props.category}</span></h1>
                <img className="col-12" src={this.props.img} alt="partnerImg"/>
                <p className="v-offset-small">{this.props.content}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    title: state.partnersReducer.title,
    category: state.partnersReducer.category,
    img: state.partnersReducer.img,
    content: state.partnersReducer.content
});

const mapDispatchToProps = dispatch => ({
    fetchPartner: partner => dispatch(fetchPartner(partner)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnerInfo)