import React, { Component } from 'react'
import EventsList from '../fakeServer/EventsList';

import LogoWhite from '../resourses/LogoWhite.png'

export default class EventInfo extends Component {

    componentDidMount() {
        let eventId = this.props.match.params.id
        this.props.fetchEvent(EventsList.results[eventId - 1])
    }

    render() {
        return (
            <div>
                {this.props.eventInfo && this.props.eventInfo.sections
                    ? <div>
                        <section className="vh-50 col-12 header" style={{ backgroundImage: `url(${this.props.eventInfo.img})` }}>
                            <h2>{this.props.eventInfo.name}</h2>
                        </section>
                        {
                            this.props.eventInfo.sections.map(section => {
                                switch (section.type) {
                                    case 0:
                                        return <section key={section.id} className="eventSection idSection one-page">
                                            {section.section_id % 2 !== 0
                                                ? <div className="row">
                                                    <div className="section-id">{`0${section.section_id}`}</div>
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
                                                    <div className="section-id">{`0${section.section_id}`}</div>
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
                                                <h1><span>{section.content}</span></h1>
                                                <p className="small secondary v-offset-large">{section.comment}</p>
                                            </div>
                                            <div className="offset-lg-2 col-lg-3 one-page justify-center acsent-alt-bg">
                                                <div className="col-lg-10">
                                                    <img src={LogoWhite} />
                                                </div></div>
                                        </section>
                                    case 4:
                                        return <section key={section.id}>
                                            <div className="container">
                                                <ul className="steps">
                                                    {
                                                        section.steps.map(step => <li key={step.id}><span>{`0${step.id}`}</span>{step.content}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        </section>

                                    default:
                                        break;
                                }
                            })
                        }
                        <section>
                            <div className="offset-1">
                                <h1 className="super"><span>Пакеты</span></h1>
                            </div>
                            <div className="container align-center">
                                <div className="col-lg-3 text-center tarif-selector">
                                    {
                                        this.props.eventInfo.tariffs.map(tariff => <button
                                            onClick={() => this.props.changeTariff(tariff.id)}
                                            className={this.props.eventInfo.tariffId === tariff.id - 1 ? "col-12 active" : "col-12"}
                                            key={tariff.id}><p className="lead">{tariff.name}</p></button>)
                                    }
                                </div>
                                <div className="offset-lg-2 col-lg-7">
                                    <div className="col-12 tarif-description"><p>
                                        {
                                            this.props.eventInfo.tariffs[this.props.eventInfo.tariffId].description
                                        }
                                    </p></div>
                                    <div className="row v-offset-small">
                                        <div className="col-lg-4 tarif-price"><p className="small">
                                            {
                                                `${this.props.eventInfo.tariffs[this.props.eventInfo.tariffId].price} рублей`
                                            }
                                        </p></div>
                                        <button onClick={() => console.log(this.props)} className="offset-lg-4 col-lg-4 tarif-button"><p className="small">
                                            Поехали!
                                    </p></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    : <h1>Loading...</h1>}
            </div>
        )
    }
}
