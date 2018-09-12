import React, { Component } from 'react'

export default class Gallery extends Component {
    constructor(props) {
        super(props)

        const reqJpg = require.context('../../resourses/RKW', true, /\.jpg$/)
        const paths = reqJpg.keys()
        this.images = paths.map(path => reqJpg(path))

        this.state = {
            current: 0,
        }
    }

    images = []

    change = (id) => this.setState({ current: id })

    render() {
        return (
            <section>
                <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(${this.images[this.state.current]})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(20px)', zIndex: '-1' }}></div>
                <div className="container" style={{ boxShadow: '0px 0px 50px' }}>
                    <div className="row">
                        <div onClick={() => this.change((this.images.length + this.state.current - 1) % this.images.length)} style={{ cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.6)' }} className="d-none d-sm-flex no-padding col-sm align-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{ transform: 'rotate(90deg)' }} ><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        </div>
                        <div onClick={() => this.change((this.images.length + this.state.current + 1) % this.images.length)} style={{ cursor: 'pointer' }} className="col-sm-10 col-12 no-padding">

                            <img src={this.images[this.state.current]} alt="event" />
                        </div>
                        <div onClick={() => this.change((this.images.length + this.state.current + 1) % this.images.length)} style={{ cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.6)' }} className="d-none d-sm-flex no-padding col-sm align-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{ transform: 'rotate(270deg)' }}><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={() => this.change((this.images.length + this.state.current - 1) % this.images.length)} style={{ cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.6)', height: '50px', borderRight: '1px solid' }} className="d-sm-none no-padding col align-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 15" style={{ transform: 'rotate(90deg)' }} ><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        </div>
                        <div onClick={() => this.change((this.images.length + this.state.current + 1) % this.images.length)} style={{ cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.6)', height: '50px', borderLeft: '1px solid' }} className="d-sm-none no-padding col align-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 15" style={{ transform: 'rotate(270deg)' }}><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
