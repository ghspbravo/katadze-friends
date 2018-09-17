import React from 'react'
import Parser from 'html-react-parser';

export default (event, handleAcquiring) => {
    return (
        <section id='tariffs'>
            <div className="offset-1">
                <h1 className="super"><span>Пакеты</span></h1>
            </div>
            <div className="container">
                <div className='row'>
                    {event.tariffs.map((tariff, i) => <div key={i} style={{ borderRadius: 0, border: '2px solid #41bfef', paddingBottom: '15px', margin: window.innerWidth < 992 ? '15px 0' : null }} className='col-md-5 offset-md-1 row'>
                        <div style={{ alignSelf: 'flex-start' }}><p style={{ textTransform: 'uppercase', color: '#41bfef', textAlign: 'center' }}>{tariff.name}</p>
                            <div className='v-offset-small' style={{ maxHeight: window.innerHeight * 0.8, overflowY: 'auto' }}>
                                {Parser(tariff.description)}
                            </div></div>
                        {tariff.parts[0] && tariff.parts[0].id
                            ? tariff.parts.map(part => <div className='row col-12'>
                                <div className="col-sm-6 col-12"><p className="small">
                                    {`${part.name} - ${part.price.split('.')[0]} руб.`}
                                </p></div>
                                <div className="col-sm-6 col-12"><button style={{ borderRadius: 0, height: '45px' }} onClick={() => handleAcquiring(tariff.id, part.id)} className="col-12 tarif-button"><p className="small">Оплатить</p></button></div>
                            </div>)
                            : <div style={{ alignSelf: 'flex-end' }} className='col-12'>
                                <div style={{ borderRadius: 0, height: '45px' }} className="col-12 text-center tarif-description v-offset-small"><p style={{ color: 'white' }} className="small">{tariff.price.split('.')[0]} руб.</p></div>
                                <button style={{ borderRadius: 0, height: '45px' }} onClick={() => handleAcquiring(tariff.id)} className="col-12 tarif-button v-offset-small"><p className="small">Поехали!</p></button>
                            </div>
                        }
                    </div>)}
                </div>
            </div>
        </section>
    )
}


{/* <section id="tariffs">
    <div className="offset-1">
        <h1 className="super"><span>Пакеты</span></h1>
    </div>
    <div className="container align-center">
        <div className="col-lg-3 col-md-4 text-center tarif-selector">
            {
                event.tariffs.map((tariff, i) => {
                    return <button style={{ borderRadius: 0 }}
                        onClick={() => handleTariffChange(i, tariff.id)}
                        className={currentTariff === i ? "col-12 active" : "col-12"}
                        key={tariff.id}><p className="lead">{tariff.name}</p></button>
                })
            }
        </div>
        <div className="offset-lg-2 offset-md-1 col-md-7">
            <div className="col-12 tarif-description custom_text" style={{ color: 'white', borderRadius: 0 }}>
                {
                    typeof currentTariff !== 'undefined' ? Parser(event.tariffs[currentTariff].description) : <p>Нажмите на название тарифа для просмотра информации</p>
                }
            </div>
            <div className="no-margin row">
                <div style={{ borderRadius: 0 }} className="col-lg-4 tarif-price v-offset-small"><p className="small">
                    {
                        typeof currentTariff !== 'undefined' ? `${event.tariffs[currentTariff].price} рублей` : 'неизвестно'
                    }
                </p></div>
                <button style={{ borderRadius: 0 }} onClick={() => handleAcquiring()} className="offset-lg-4 col-lg-4 tarif-button v-offset-small"><p className="small">
                    Поехали!
                                    </p></button>
            </div>
        </div>
    </div>
</section> */}