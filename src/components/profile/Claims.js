import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClaimInfo, getClaimReceiver, getClaimSender, acceptClaim, declineClaim, getClaimList, canselClaim } from '../../actions/claim';

import { Link } from 'react-router-dom'
import { accessToken } from '../../reducers';

class Claim extends Component {
    statuses = ['Рассматривается', 'Одобрена', 'Отклонена']

    handleFetchMembers = (recieverId, senderId) => {
        this.props.getReceiverInfo(recieverId)
        this.props.getSenderInfo(senderId)
    }

    render() {
        return this.props.list.results.map((claim, index) => {
            let creationDateList = claim.created_at.match(/\d+-\d+-\d+/)[0].split('-')
            let creationDate = `${creationDateList[2]}.${creationDateList[1]}.${creationDateList[0]}`
            return <div key={index} className="row v-offset-small" style={{
                borderTop: index === 0 ? '1px solid' : null,
                borderBottom: '1px solid',
                padding: '20px 0',
            }}>
                <div className="col-12 col-md-4">
                    {this.props.isGid && claim.status === 0
                        ? <div className='col-6 d-block d-sm-none' style={{ position: 'absolute', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                            <div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                                <p onClick={() => this.props.acceptClaim(claim.id)} style={{ cursor: 'pointer', color: 'green' }} className="small">Одобрить</p>
                            </div>
                            <div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                                <p onClick={() => this.props.declineClaim(claim.id)} style={{ cursor: 'pointer', color: 'red' }} className="small">Отклонить</p>
                            </div>
                        </div>
                        : <div className='col-6 d-block d-sm-none' style={{ position: 'absolute', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}><div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                            <p style={{ color: claim.status === 2 ? 'red' : claim.status === 1 ? 'green' : 'white' }} className="small">
                                {this.statuses[claim.status]}
                            </p></div>
                            {
                                claim.status === 1
                                    ? <div className="price-popup" style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #41bfef' }}>
                                        <Link to={`/profile/live/${claim.im_room}/${this.props.isGid ? claim.sender : claim.receiver}`} className="small">Открыть чат</Link>
                                    </div>
                                    : null
                            }
                            {
                                claim.status === 0
                                    ? <div className="price-popup" style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #41bfef' }}>
                                        <p onClick={() => { this.props.canselClaim(claim.id); this.props.onClaimList() }} style={{cursor: 'pointer'}} className="small">Отменить</p>
                                    </div>
                                    : null
                            }
                        </div>}
                    <Link to={`/guide/id=${claim.receiver && claim.receiver.id}`} className="row">
                        <div className="col-6 col-md-12 no-padding profile-image-small justify-center">
                            <img src={this.props.isGid ? claim.sender && claim.sender.img_photo : claim.receiver && claim.receiver.img_photo} alt="userImage" />
                        </div>
                        <p className="secondary col-12 small v-offset-small">{this.props.isGid
                            ? claim.sender && claim.sender.name
                            : claim.receiver && claim.receiver.name
                        }</p>
                    </Link>
                </div>
                <div className="col-12 col-md-8 row">
                    <p className="small comment col-6">{claim.message}</p>
                    {this.props.isGid && claim.status === 0
                        ? <div className='col-6 d-none d-sm-block' >
                            <div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                                <p onClick={() => { this.props.acceptClaim(claim.id); this.props.onClaimList }} style={{ cursor: 'pointer', color: 'green' }} className="small">Одобрить</p>
                            </div>
                            <div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                                <p onClick={() => { this.props.declineClaim(claim.id); this.props.onClaimList }} style={{ cursor: 'pointer', color: 'red' }} className="small">Отклонить</p>
                            </div>
                        </div>
                        : <div className='col-6 d-none d-sm-block' style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}>
                            <div className="price-popup" style={{ position: 'relative', textTransform: 'uppercase', top: 0, right: 0, zIndex: 10, opacity: 0.9, userSelect: 'none' }}><p style={{ color: claim.status === 2 ? 'red' : claim.status === 1 ? 'green' : 'white' }} className="small">
                                {this.statuses[claim.status]}
                            </p></div>
                            {
                                claim.status === 1
                                    ? <div className="price-popup" style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #41bfef' }}>
                                        <Link to={`/profile/live/${claim.im_room}/${this.props.isGid ? claim.sender.id : claim.receiver.id}`} className="small">Открыть чат</Link>
                                    </div>
                                    : null
                            }
                            {
                                claim.status === 0
                                    ? <div className="price-popup" style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #41bfef' }}>
                                        <p onClick={() => this.props.canselClaim(claim.id)} style={{cursor: 'pointer'}} className="small">Отменить</p>
                                    </div>
                                    : null
                            }
                        </div>
                    }
                    <p style={{ alignSelf: 'flex-end' }} className="small text-right col-12 v-offset-small">{creationDate}</p>
                </div>
            </div>
        }
        )
    }
}

const mapStateToProps = state => ({
    details: state.claim.info,
    receiver: state.claim.receiver,
    sender: state.claim.sender,
    token: accessToken(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClaimInfo: (id) => {
        dispatch(getClaimInfo(id))
    },
    getReceiverInfo: (id) => {
        dispatch(getClaimReceiver(id))
    },
    getSenderInfo: (id) => {
        dispatch(getClaimSender(id))
    },
    acceptClaim: (id) => {
        dispatch(acceptClaim(id))
        setTimeout(() => dispatch(getClaimList()), 1000)
    },
    declineClaim: (id) => {
        dispatch(declineClaim(id))
        setTimeout(() => dispatch(getClaimList()), 1000)
    },
    onClaimList: () => {
        dispatch(getClaimList())
    },
    canselClaim: (id) => {
        dispatch(canselClaim(id));
        setTimeout(() => dispatch(getClaimList()), 1000)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Claim)