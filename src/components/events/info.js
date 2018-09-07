import React from 'react'
import LogoWhite from '../../resourses/LogoWhite.png'
import regform from './regform';
import Gallery from './Gallery';

import Parser from 'html-react-parser';

export default (event, currentTariff, handleTariffChange, handleAcquiring, handeInput, handleSubmit, errors, status, fields, handleValueChange) => {
    return (
        <div>
            {event && event.sections
                ? <div>
                    {/РКВ/.test(event.name) && window.innerWidth > 992
                        ? <section className="header" style={{ height: '75vh', paddingTop: '25vh', paddingBottom: '25vh' }}>
                            <h2>{event.name}</h2>
                            {window.addEventListener('scroll', () => document.body.contains(document.querySelector('#header_video')) ? document.querySelector('#header_video').style.position = window.scrollY > window.innerHeight * 0.7 ? 'absolute' : 'fixed' : null)}
                            {event && event.tariffs[0]
                                ? <button onClick={() => document.querySelector('#tariffs').scrollIntoView({ behavior: 'smooth' })} className="lead col-10 col-md-4 col-lg-2">Выбор тарифа</button>
                                : null}
                            <div id="header_video" style={{ position: 'fixed', width: `${window.innerWidth > 1920 ? window.innerWidth : 1920}px`, height: '1080px', left: `${window.innerWidth < 1920 ? (window.innerWidth - 1920)/2 : 0}px`, top: '0', zIndex: '-1', pointerEvents: 'none' }}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A3doCFpZGDY?start=21&end=115&autoplay=1&controls=0&loop=1&playlist=A3doCFpZGDY&modestbranding=1&showinfo=0&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </section>
                        : <section className="col-12 header" style={{ backgroundImage: `url(${event.img})`, paddingTop: '25vh', paddingBottom: '25vh' }}>
                            <h2>{event.name}</h2>
                            {event && event.tariffs[0]
                                ? <button onClick={() => document.querySelector('#tariffs').scrollIntoView({ behavior: 'smooth' })} className="lead col-10 col-md-4 col-lg-2">Выбор тарифа</button>
                                : null}
                        </section>}
                    {
                        event.sections.map(section => {
                            switch (section.type) {
                                case 0:
                                    return <section key={section.id} className="eventSection idSection one-page">
                                        {section.idx % 2 !== 0
                                            ? <div>
                                                <div className="section-id">{`0${section.idx}`}</div>
                                                <div className=" col-12 offset-lg-6 col-lg-5">
                                                    <h1>{section.title}</h1>
                                                    <div className="custom_text">
                                                        {Parser(section.content)}
                                                    </div>
                                                </div>
                                            </div>
                                            : <div>
                                                <div className="col-12 offset-lg-1 col-lg-5" style={{ zIndex: 5 }}>
                                                    <h1>{section.title}</h1>
                                                    <div className="custom_text">
                                                        {Parser(section.content)}
                                                    </div>
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
                                            <div className="row justify-space-between">
                                                {
                                                    section.bricks.map(brick => <div key={brick.id} className="col-12 col-lg-3 acsent-box-small text-center v-offset-mid" >
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
                                    return <section key={section.id} className="eventSection one-page" style={window.innerWidth < 992 ? { backgroundColor: '#fb0' } : {}}>
                                        <div className="offset-lg-1 col-12 col-md-8">
                                            <h1 className="custom_text"><span style={window.innerWidth < 992 ? { color: '#fff' } : {}}>{Parser(section.content)}</span></h1>
                                            <p className="small secondary v-offset-large" style={window.innerWidth < 992 ? { color: '#fff' } : {}}>{section.title}</p>
                                        </div>
                                        <div className="d-none d-md-flex col-md-4 col-lg-3 one-page justify-center acsent-alt-bg">
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
                        : null
                    }
                    {/РКВ/.test(event.name)
                        ? <Gallery />
                        : null
                    }
                    {event && event.tariffs[0]
                        ? <section id="tariffs">
                            <div className="offset-1">
                                <h1 className="super"><span>Пакеты</span></h1>
                            </div>
                            <div className="container align-center">
                                <div className="col-lg-3 col-md-4 text-center tarif-selector">
                                    {
                                        event.tariffs.map((tariff, i) => {
                                            return <button
                                                onClick={() => handleTariffChange(i, tariff.id)}
                                                className={currentTariff === i ? "col-12 active" : "col-12"}
                                                key={tariff.id}><p className="lead">{tariff.name}</p></button>
                                        })
                                    }
                                </div>
                                <div className="offset-lg-2 offset-md-1 col-md-7">
                                    <div className="col-12 tarif-description custom_text" style={{color: 'white'}}>
                                        {
                                            typeof currentTariff !== 'undefined' ? Parser(event.tariffs[currentTariff].description) : <p>Нажмите на название тарифа для просмотра информации</p>
                                        }
                                    </div>
                                    <div className="no-margin row">
                                        <div className="col-lg-4 tarif-price v-offset-small"><p className="small">
                                            {
                                                typeof currentTariff !== 'undefined' ? `${event.tariffs[currentTariff].price} рублей` : 'неизвестно'
                                            }
                                        </p></div>
                                        <button onClick={() => handleAcquiring()} className="offset-lg-4 col-lg-4 tarif-button v-offset-small"><p className="small">
                                            Поехали!
                                    </p></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : null
                    }
                    {/РКВ/.test(event.name)
                        ? <section className="container">
                            <p className="small">
                                По всем вопросам участия в проекте можно писать <a href="https://vk.com/mahrovanov" className="bold small" target="blank">Юлии Махровой</a>
    <br /><br />
                                По вопросам сотрудничества: <a href="https://vk.com/safronov_vlad" className="bold small" target="blank">Сафронов Владислав</a>
    <br /><br />
                                Посоветовать нам, как жить можно через <a href="https://vk.com/safir_rais" target="blank" className="bold small">Асалика</a>
    <br /><br />
                                И не забывайте, самая важная и нужная информация <a href="https://vk.com/РКВ2019" className="bold small">здесь</a>
    <br /><br />
                                Katadze РКВ-2019
    <br /><br />
                                Любовь к горам никогда не была так близко.
                            </p>
                        </section>
                        : null
                    }
                    {/РКВ/.test(event.name)
                        ? regform(handeInput, handleSubmit, errors, status, fields, handleValueChange)
                        : null
                    }
                </div>
                : <h1>Loading...</h1>}
        </div>
    )
}
