import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClaimInfo } from '../../actions/claim';

class Claim extends Component {
    statuses = ['В рассмотрении', 'Одобрена', 'Отклонена']

    fetchClaimInfoHandle = id => {
        this.props.onClaimInfo(id)
    }


    render() {
        return this.props.list.results.map((claim, index) =>
            <div onClick={() => this.fetchClaimInfoHandle(claim.id)} key={index} className="row v-offset-small" style={{
                borderTop: index === 0 ? '1px solid' : null,
                borderBottom: '1px solid',
                padding: '20px 0',
                cursor: 'pointer'
            }}>
                <div className="col-12 col-md-4">
                    <div className='price-popup d-block d-sm-none' style={{ position: 'absolute', textTransform: 'uppercase', top: 0, right: 0 }}><p style={{ color: 'white' }} className="small">
                        {this.statuses[claim.status]}
                    </p></div>
                    <div className="row">
                        <div className="col-6 col-md-12 no-padding profile-image-small justify-center">
                            <img src='' alt="userImage" />
                        </div>
                        <p className="secondary col-12 small v-offset-small">от {claim.sender}</p>
                        <p className="secondary col-12 small">{claim.receiver}</p>
                    </div>
                </div>
                <div className="col-12 col-md-8 row">
                    <div className='price-popup d-none d-sm-block' style={{ position: 'absolute', textTransform: 'uppercase', top: 0, right: 0 }}><p style={{ color: 'white' }} className="small">
                        {this.statuses[claim.status]}
                    </p></div>
                    <p className="small comment">{claim.message}</p>
                    <p style={{ alignSelf: 'flex-end' }} className="small">{claim.created_at}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.claim.info,
});

const mapDispatchToProps = (dispatch) => ({
    onClaimInfo: (id) => {
        dispatch(getClaimInfo(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Claim)