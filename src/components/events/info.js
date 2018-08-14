import React from 'react'
import LogoWhite from '../../resourses/LogoWhite.png'

export default (event, currentTariff, handleTariffChange) => {
    return (
        <div>
            {event && event.sections
                ? <div>
                    <section className="vh-50 col-12 header" style={{ backgroundImage: `url(${event.img})` }}>
                        <h2>{event.name}</h2>
                    </section>
                    {
                        event.sections.map(section => {
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
                    {event && event.steps
                        ? < section >
                            <div className="container">
                                <ul className="steps">
                                    {
                                        event.steps.map(step => <li key={step.id}><span>{`0${step.id}`}</span>{step.text}</li>)
                                    }
                                </ul>
                            </div>
                        </section>
                        : console.log('STEPS_NOT_FOUND')
                    }
                    {event && event.tariffs[currentTariff]
                        ? <section>
                            <div className="offset-1">
                                <h1 className="super"><span>Пакеты</span></h1>
                            </div>
                            <div className="container align-center">
                                <div className="col-lg-3 text-center tarif-selector">
                                    {
                                        event.tariffs.map((tariff, i) => <button
                                            onClick={() => handleTariffChange(i)}
                                            className={currentTariff === i ? "col-12 active" : "col-12"}
                                            key={tariff.id}><p className="lead">{tariff.name}</p></button>)
                                    }
                                </div>
                                <div className="offset-lg-2 col-lg-7">
                                    <div className="col-12 tarif-description"><p>
                                        {
                                            event.tariffs[currentTariff].description
                                        }
                                    </p></div>
                                    <div className="row v-offset-small">
                                        <div className="col-lg-4 tarif-price"><p className="small">
                                            {
                                                `${event.tariffs[currentTariff].price} рублей`
                                            }
                                        </p></div>
                                        <button className="offset-lg-4 col-lg-4 tarif-button"><p className="small">
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