import React, { Component } from 'react'
import { connect } from 'react-redux'
import { event } from '../actions/event'

import LogoWhite from '../resourses/LogoWhite.png'

class EventInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tariff: 0
        }
    }


    componentDidMount() {
        let eventId = this.props.match.params.id
        this.props.fetchEvent(eventId)
    }

    render() {
        return (
            <div>
                {this.props.event && this.props.event.sections
                    ? <div>
                        <section className="vh-50 col-12 header" style={{ backgroundImage: `url(${this.props.event.img})` }}>
                            <h2>{this.props.event.name}</h2>
                        </section>
                        {
                            this.props.event.sections.map(section => {
                                switch (section.type) {
                                    case 0:
                                        return <section key={section.id} className="eventSection idSection one-page">
                                            {section.idx % 2 !== 0
                                                ? <div className="row">
                                                    <div className="section-id">{`0${section.idx}`}</div>
                                                    <div className="offset-lg-6 col-lg-5">
                                                        <h1>{section.title}</h1>
                                                        <p>{section.content}</p>
                                                    </div>
                                                </div>
                                                : <div className="row">
                                                    <div className="offset-lg-1 col-lg-5">
                                                        <h1>{section.title}</h1>
                                                        <p>{section.content}</p>
                                                    </div>
                                                    <div className="section-id">{`0${section.idx}`}</div>
                                                </div>
                                            }
                                        </section>

                                    case 1:
                                        return <section key={section.id} className="eventSection">
                                            <div className="col-12">
                                                <h1 className="text-center">{section.title}</h1>
                                            </div>
                                            <div className="container">
                                                <div className="row justify-space-between row-box-3">
                                                    {
                                                        section.bricks.map(brick => <div key={brick.id} className="col-lg-3 acsent-box-small text-center v-offset-mid" >
                                                            <h1>{brick.title}</h1>
                                                            <ul className="v-offset-small">
                                                                {
                                                                    brick.content.split(' ')
                                                                        .map(item => <li key={item}>{item}</li>)
                                                                }
                                                            </ul>
                                                        </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </section>

                                    case 2:
                                        return <section key={section.id} className="eventSection one-page">
                                            <div className="offset-lg-1 col-lg-6">
                                                <h1><span>{section.title}</span></h1>
                                                <p className="small secondary v-offset-large">{section.content}</p>
                                            </div>
                                            <div className="offset-lg-2 col-lg-3 one-page justify-center acsent-alt-bg">
                                                <div className="col-lg-10">
                                                    <img src={LogoWhite} alt="logo" />
                                                </div></div>
                                        </section>

                                    default:
                                        return true
                                }
                            })
                        }
                        {this.props.event && this.props.event.steps
                            ? < section >
                                <div className="container">
                                    <ul className="steps">
                                        {
                                            this.props.event.steps.map(step => <li key={step.id}><span>{`0${step.id}`}</span>{step.text}</li>)
                                        }
                                    </ul>
                                </div>
                            </section>
                            : console.log('STEPS_NOT_FOUND')
                        }
                        {this.props.event && this.props.event.tariffs[this.state.tariff]
                            ? <section>
                                <div className="offset-1">
                                    <h1 className="super"><span>Пакеты</span></h1>
                                </div>
                                <div className="container align-center">
                                    <div className="col-lg-3 text-center tarif-selector">
                                        {
                                            this.props.event.tariffs.map((tariff, i) => <button
                                                onClick={() => this.setState({ tariff: i })}
                                                className={this.state.tariff === i ? "col-12 active" : "col-12"}
                                                key={tariff.id}><p className="lead">{tariff.name}</p></button>)
                                        }
                                    </div>
                                    <div className="offset-lg-2 col-lg-7">
                                        <div className="col-12 tarif-description"><p>
                                            {
                                                this.props.event.tariffs[this.state.tariff].description
                                            }
                                        </p></div>
                                        <div className="row v-offset-small">
                                            <div className="col-lg-4 tarif-price"><p className="small">
                                                {
                                                    `${this.props.event.tariffs[this.state.tariff].price} рублей`
                                                }
                                            </p></div>
                                            <button onClick={() => console.log(this.props)} className="offset-lg-4 col-lg-4 tarif-button"><p className="small">
                                                Поехали!
                                    </p></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            : console.log('TARIFS_NOT_FOUND')
                        }
                    </div>
                    : <h1>Loading...</h1>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.event,
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: id => dispatch(event(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
